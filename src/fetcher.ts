import * as Bull from 'bull'
import { config } from './config/config'
import { wavesApi, config as wavesApiConfig, apolloHttp } from '@waves/waves-rest'
import { RESTDataSource } from 'apollo-datasource-rest'

class WavesAPI extends RESTDataSource {
  constructor() {
    super()
  }
}

const { getIssueTxs, getDataTxs } = wavesApi(wavesApiConfig.testnet, apolloHttp(WavesAPI))

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

  startPolling() {
    this._createPollingJob()
  }

  private _initQueue() {
    this._fetchQueue = new Bull(FETCH_QUEUE_KEY, this._redisUrl)

    this._fetchQueue.process(POLLING_KEY, async (job: Bull.Job) => {
      if (!config.pollingActivated) {
        return
      }

      console.log(POLLING_KEY + ': ', job.data)

      const issueTxs = await getIssueTxs({
        sender: '3N5C7Yhegg6hYT98VXsaVH9w5sBjGAcgSns',
      })
      console.log(issueTxs)
    })
  }

  private _createPollingJob() {
    this._fetchQueue.add(POLLING_KEY, {}, {
      repeat: {
        every: config.pollingRepeatEvery,
      },
    })
  }
}
