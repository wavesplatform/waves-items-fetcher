import { DataTransaction } from '@waves/waves-rest'
import { ItemParamsMap } from '../types'
import { Item as WavesItem, ItemParams } from '@waves/types'
import { ItemCreateInput } from '../__generated__/prisma-client'

export const isItemParams = (params: any) => {
  return (
    'version' in params &&
    'name' in params &&
    'imageUrl' in params &&
    'misc' in params
  )
}

export const extractItemParamsList = <T = any>(dataTx: DataTransaction, keys?: string[]): ItemParamsMap<T> => {
  const itemParamsMap: Record<string, ItemParams<T>> = {}

  const dataEntries = keys
    ? dataTx.data.filter(entry => keys.indexOf(entry.key) > -1)
    : dataTx.data

  for (const entry of dataEntries) {
    if (typeof entry.value === 'string') {
      let params: any = {}
      try {
        params = JSON.parse(entry.value)
      } catch (err) {
        continue
      }

      if (isItemParams(params)) {
        itemParamsMap[entry.key] = params
      }
    }
  }

  return itemParamsMap
}

export const toItemInput = (item: WavesItem): ItemCreateInput => {
  const { name, quantity, imageUrl, reissuable, timestamp, misc, rawParams, gameId } = item
  return {
    assetId: item.id,
    name,
    quantity: quantity as number,
    game: { connect: { address: gameId } },
    imageUrl,
    reissuable,
    timestamp: new Date(timestamp),
    misc,
    rawParams,
  }
}
