import { Prisma } from './__generated__/prisma-client'
import { ItemParams } from '../common/types'

export interface Context {
  prisma: Prisma
}

export type ItemParamsMap<T> = Record<string, ItemParams<T>>
