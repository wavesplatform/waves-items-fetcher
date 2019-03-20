import { DataTransaction } from '@waves/waves-rest'
import { ItemParamsMap } from '../types'
import { ItemParams } from '@waves/types'

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
    ? dataTx.data.filter(entry => keys.indexOf(entry.key))
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
