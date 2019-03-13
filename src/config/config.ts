export const config = {
  redisUrl: process.env.REDIS_URL || 'redis://127.0.0.1:6379',
  pollingRepeatEvery: 5000,
  pollingActivated: true,
}
