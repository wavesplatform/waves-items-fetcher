import { DateTimeInput, Item, ItemCreateInput, prisma } from '../__generated__/prisma-client'
import { Item as WavesItem } from '@waves/types'
import { toItemInput } from '../helpers/utils'

interface DateRange {
  dateStart: DateTimeInput
  dateEnd?: DateTimeInput
}

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
