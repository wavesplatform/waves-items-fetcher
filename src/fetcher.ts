import * as Bull from 'bull'
import { config } from './config/config'
import { axiosHttp, config as wavesApiConfig, wavesApi } from '@waves/waves-rest'
import axios from 'axios'
import { extractItemParamsList } from './helpers/utils'
import { ItemBuilder } from './helpers/item-builder'
import { ItemParamsMap } from './types'
import { overwriteRange } from './actions/items'
import { Item as WavesItem } from '@waves/types'
import { prisma } from './__generated__/prisma-client'

const { getIssueTxs, getDataTxs } = wavesApi(wavesApiConfig.testnet, axiosHttp(axios))

// TODO: temp instead db
const creators = [
  '3N2MUXXWL1Ws9bCAdrR1xoZWKwBAtyaowFH',
]

export interface FetcherOptions {
  redisUrl: string,
}

export const FETCH_QUEUE_KEY = 'fetch'
export const POLLING_KEY = 'polling'

export class Fetcher {
  private _fetchQueue: Bull.Queue
  private _redisUrl: string

  constructor(options: FetcherOptions) {
    this._redisUrl = options.redisUrl
  }

  init() {
    console.log('Fetcher initialization...')
    this._initQueue()
  }

  async startPolling() {
    await this._removePollingJob()
    await this._firstInitItems()
    await this._addPollingJob()
  }

  /**
   * Init fetch queue and processes for it
   * @private
   */
  private _initQueue() {
    this._fetchQueue = new Bull(FETCH_QUEUE_KEY, this._redisUrl)

    // this._fetchQueue.empty()

    // PROCESSES
    // Polling
    this._fetchQueue.process(POLLING_KEY, async (job: Bull.Job) => {
      if (!config.pollingEnabled) {
        return
      }

      try {
        await this._processPolling()
      } catch (err) {
        console.error(err)
        throw err
      }
    })

    // ...
  }

  private async _processPolling() {
    // Adding items in realtime
    await this._assignNowItems()
  }

  private async _firstInitItems() {
    console.log('_firstInitItems()')
    const timeStart = await this._getLastTime()

    const items = await this._takeItems(creators[0], timeStart)

    overwriteRange(items, { dateStart: new Date(timeStart) })
  }

  /**
   * Get last issues & data transactions and build/store items.
   * @private
   */
  private async _assignNowItems() {
    console.log('_assignNowItems()')

    const timeStart = Date.now() - config.pollingOffset
    const items = await this._takeItems(creators[0], timeStart)

    overwriteRange(items, { dateStart: new Date(timeStart) })
  }

  private async _takeItems(creator: string, timeStart: number): Promise<WavesItem[]> {
    const items: WavesItem[] = []

    // Get all issue txs
    const issueTxsChunks = getIssueTxs({
      limit: 1,
      sender: creator,
      timeStart,
    })
    const issueTxs = []
    for await (const chunk of issueTxsChunks) {
      issueTxs.push(...chunk)
    }
    const itemIds = issueTxs.map(tx => tx.id)

    // Get all data txs
    const dataTxsChunks = getDataTxs({
      sender: creator,
      timeStart,
    })
    const dataTxs = []
    for await (const chunk of dataTxsChunks) {
      dataTxs.push(...chunk)
    }

    // Extract item params list
    const itemParamsMap: ItemParamsMap<any> = {}
    for (const dataTx of dataTxs) {
      Object.assign(itemParamsMap, extractItemParamsList(dataTx, itemIds))
    }

    for (const issueTx of issueTxs) {
      try {
        const item: WavesItem = new ItemBuilder(issueTx)
          .setItemParams(itemParamsMap[issueTx.id])
          .build()

        items.push(item)
      } catch (err) {
        console.log(err)
        // The problem with build item
      }
    }

    return items
  }

  private async _getLastTime(): Promise<number> {
    const lastItem = (await prisma.items({
      orderBy: 'timestamp_DESC',
      first: 1,
    }))[0]

    if (lastItem) {
      return (new Date(lastItem.timestamp)).getTime()
    } else {
      return 0
    }
  }

  private async _addPollingJob() {
    console.log('_addPollingJob()')
    await this._fetchQueue.add(POLLING_KEY, {}, {
      repeat: {
        every: config.pollingRepeatEvery,
      },
    })
  }

  private async _removePollingJob() {
    console.log('_removePollingJob()')
    await this._fetchQueue.removeRepeatable(POLLING_KEY, {
      every: config.pollingRepeatEvery,
    })
  }
}
