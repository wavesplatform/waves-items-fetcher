import * as Bull from 'bull'
import { config } from './config/config'
import { axiosHttp, config as wavesApiConfig, wavesApi } from '@waves/waves-rest'
import axios from 'axios'
import { Item } from '../common/types'
import { extractItemParamsList } from './helpers/utils'
import { ItemBuilder } from './helpers/item-builder'
import { ItemParamsMap } from './types'
import { saveNewItems } from './actions/items'

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
    // await this._removePollingJob()
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

  /**
   * Get last issues & data transactions and build/store items.
   * @private
   */
  private async _assignNowItems() {
    console.log('_assignNowItems()')

    const newItems: Item[] = []

    const timeStart = Date.now() - config.pollingOffset

    // Get all issue txs
    const issueTxs = await getIssueTxs({
      // limit: config.issueLimit,
      sender: creators[0],
      timeStart,
    })
    const itemIds = issueTxs.map(tx => tx.id)

    // Get all data txs
    const dataTxs = await getDataTxs({
      sender: creators[0],
      timeStart,
    })

    // Extract item params list
    const itemParamsMap: ItemParamsMap<any> = {}
    for (const dataTx of dataTxs) {
      Object.assign(itemParamsMap, extractItemParamsList(dataTx, itemIds))
    }

    for (const issueTx of issueTxs) {
      try {
        const item: Item = new ItemBuilder(issueTx)
          .setItemParams(itemParamsMap[issueTx.id])
          .build()

        newItems.push(item)
      } catch (err) {
        // The problem with build item
      }
    }

    saveNewItems(newItems)
  }

  private async _addPollingJob() {
    console.log('_addPollingJob()')
    await this._fetchQueue.add(POLLING_KEY, {}, {
      // repeat: {
      //   every: config.pollingRepeatEvery,
      // },
    })
  }

  private async _removePollingJob() {
    console.log('_removePollingJob()')
    await this._fetchQueue.removeRepeatable(POLLING_KEY, {
      every: config.pollingRepeatEvery,
    })
  }
}
