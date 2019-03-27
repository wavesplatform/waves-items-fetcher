import { createLogger, transports, format, config as winstonConfig } from 'winston'
import { config } from '../config/config'

const { combine, timestamp, printf } = format

const messageFormat = printf(
  ({ level, message, meta, label, timestamp }) => {
    return `${timestamp} [${level}] ${message}`
  }
)

const usedTransports = {
  console: new transports.Console({ level: config.consoleLevel }),
}

export const logger = createLogger({
  format: combine(
    format.colorize(),
    format.splat(),
    format.simple(),
    timestamp(),
    messageFormat
  ),
  levels: winstonConfig.syslog.levels,
  transports: [
    usedTransports.console,
  ],
})
