import { Fetcher } from './fetcher'
import { config } from './config/config'

const fetcher = new Fetcher({
  redisUrl: config.fetcherRedisUrl,
})

fetcher.init()
fetcher.startPolling()
