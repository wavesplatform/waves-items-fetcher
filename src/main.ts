import { Fetcher } from './fetcher'
import { config } from './config/config'

const fetcher = new Fetcher({
  redisUrl: config.redisUrl,
})

fetcher.init()
fetcher.startPolling()
