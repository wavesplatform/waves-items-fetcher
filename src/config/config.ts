export const config = {
  fetcherRepeatEvery: 5000,
  fetcherRedisUrl: process.env.REDIS_URL || 'redis://127.0.0.1:6379',
}
