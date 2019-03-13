import * as Bull from 'bull'
import { config } from './config/config'

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
    this._createJob()
  }

  private _initQueue() {
    this._fetchQueue = new Bull(FETCH_QUEUE_KEY, this._redisUrl)

    // Remove all previous jobs if exist
    // this._fetchQueue.empty()

    this._fetchQueue.process(POLLING_KEY, async (job: Bull.Job) => {
      // console.log('process', job.data)
    })
  }

  private _createJob() {
    this._fetchQueue.add(POLLING_KEY, {
      foo: 'test',
    }, {
      repeat: {
        every: config.fetcherRepeatEvery,
      },
    })
  }
}
