import * as Bull from 'bull'
import { config } from './config/config'
import { getLastTime, overwriteRange, takeItems } from './core/items'
import { getGameAddresses } from './core/users'
import { logger } from './logger'

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

  init(): void {
    logger.info('Fetcher initialization...')
    this._initQueue()
  }

  async startPolling(): Promise<void> {
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
        logger.error(err)
        throw err
      }
    })

    // ...
  }

  private async _processPolling() {
    // Adding items in realtime
    await this._assignNewItems()
  }

  private async _firstInitItems() {
    logger.debug('_firstInitItems()')

    try {
      const timeStart = await getLastTime()
      const gameAddresses = await getGameAddresses()
      const items = await takeItems(gameAddresses, timeStart)

      overwriteRange(items, { dateStart: new Date(timeStart) })
    } catch (err) {
      logger.error(err)
    }
  }

  /**
   * Get last issues & data transactions and build/store items.
   * @private
   */
  private async _assignNewItems() {
    logger.debug('_assignNewItems()')

    const timeStart = Date.now() - config.pollingOffset
    const gameAddresses = await getGameAddresses()
    const items = await takeItems(gameAddresses, timeStart)

    overwriteRange(items, { dateStart: new Date(timeStart) })
  }

  private async _addPollingJob() {
    logger.debug('_addPollingJob()')
    await this._fetchQueue.add(POLLING_KEY, {}, {
      repeat: {
        every: config.pollingRepeatEvery,
      },
    })
  }

  private async _removePollingJob() {
    logger.debug('_removePollingJob()')
    await this._fetchQueue.removeRepeatable(POLLING_KEY, {
      every: config.pollingRepeatEvery,
    })
  }
}
