const ONE_DAY_MS = 86400 * 1000

export const config = {
  redisUrl: process.env.REDIS_URL || 'redis://127.0.0.1:6379',
  pollingRepeatEvery: 5000,
  pollingEnabled: true,
  issueLimit: 100,
  dataLimit: 100,
  pollingOffset: ONE_DAY_MS,
}
