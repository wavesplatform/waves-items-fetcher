import { DateTimeInput, Item, ItemCreateInput, prisma } from '../__generated__/prisma-client'
import { Item as WavesItem } from '@waves/types'
import { extractItemParamsList, toItemInput } from '../helpers/utils'
import { ItemParamsMap } from '../types'
import { ItemBuilder } from '../helpers/item-builder'
import { axiosHttp, config as wavesApiConfig, wavesApi } from '@waves/waves-rest'
import axios from 'axios'

const { getIssueTxs, getDataTxs } = wavesApi(wavesApiConfig.testnet, axiosHttp(axios))

interface DateRange {
  dateStart: DateTimeInput
  dateEnd?: DateTimeInput
}

/**
 * Take items for all specified creators
 * @param creators
 * @param timeStart
 */
export const takeItems = async (creators: string[], timeStart: number): Promise<WavesItem[]> => {
  const items = []
  for (const creator of creators) {
    const itemsForGame = await takeItemsForGame(creator, timeStart)
    items.push(...itemsForGame)
  }

  return items
}

/**
 * Get transactions from blockchain (Waves) and build item objects
 * @param creator
 * @param timeStart
 */
export const takeItemsForGame = async (creator: string, timeStart: number): Promise<WavesItem[]> => {
  const items: WavesItem[] = []

  // Get all issue txs
  const issueTxsChunks = getIssueTxs({
    limit: 1,
    sender: creator,
    timeStart,
  })
  const issueTxs = []
  for await (const chunk of issueTxsChunks) {
    issueTxs.push(...chunk)
  }
  const itemIds = issueTxs.map(tx => tx.id)

  // Get all data txs
  const dataTxsChunks = getDataTxs({
    sender: creator,
    timeStart,
  })
  const dataTxs = []
  for await (const chunk of dataTxsChunks) {
    dataTxs.push(...chunk)
  }

  // Extract item params list
  const itemParamsMap: ItemParamsMap<any> = {}
  for (const dataTx of dataTxs) {
    Object.assign(itemParamsMap, extractItemParamsList(dataTx, itemIds))
  }

  for (const issueTx of issueTxs) {
    try {
      const item: WavesItem = new ItemBuilder(issueTx)
        .setItemParams(itemParamsMap[issueTx.id])
        .build()

      items.push(item)
    } catch (err) {
      console.log(err)
      // The problem with build item
    }
  }

  return items
}

/**
 * Try overwrite items that stored in db
 * @param items
 * @param dateRange
 */
export const overwriteRange = async (items: WavesItem[], dateRange: DateRange): Promise<void> => {
  // Waves Id is Asset Id for database
  const assetIds = items.map(item => item.id)

  // Get current items for compare with input items
  const currentItemsMap: Record<string, Item> = (await prisma.items({
    where: {
      AND: [{
        timestamp_gt: dateRange.dateStart,
      }, {
        timestamp_lt: dateRange.dateEnd,
      }, {
        assetId_in: assetIds,
      }],
    },
  }))
    .reduce((prev, current) => ({ ...prev, [current.assetId]: current }), {})

  // Remove missing items
  await prisma.deleteManyItems({
    AND: [{
      timestamp_gt: dateRange.dateStart,
    }, {
      timestamp_lt: dateRange.dateEnd,
    }, {
      assetId_not_in: assetIds,
    }],
  })

  for (const item of items) {
    const itemInput: ItemCreateInput = toItemInput(item)

    if (currentItemsMap[item.id]) {
      // ... check changes
      continue
    }

    try {
      const upsertedItem = await prisma.upsertItem({
        where: {
          assetId: item.id,
        },
        create: itemInput,
        update: itemInput,
      })
      console.log(upsertedItem.assetId)
    } catch (err) {
      throw err
    }
  }
}

/**
 * Get last time of object that was added from blockchain
 */
export const getLastTime = async (): Promise<number> => {
  const lastItem = (await prisma.items({
    orderBy: 'timestamp_DESC',
    first: 1,
  }))[0]

  if (lastItem) {
    return (new Date(lastItem.timestamp)).getTime()
  } else {
    return 0
  }
}
