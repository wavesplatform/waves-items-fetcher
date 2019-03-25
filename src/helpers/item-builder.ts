import { IssueTransaction } from '@waves/waves-rest'
import { Item as WavesItem, ItemParams } from '@waves/types'

export class ItemBuilder {
  private _issueTx: IssueTransaction
  private _itemParams: ItemParams<any>

  constructor(issueTx: IssueTransaction) {
    this._issueTx = issueTx
  }

  setItemParams(itemParams: ItemParams<any>): ItemBuilder {
    this._itemParams = itemParams
    return this
  }

  build(): WavesItem {
    if (!this._itemParams) {
      throw Error('Item params not set')
    }

    const { name, imageUrl, misc } = this._itemParams
    const { id, sender, quantity, reissuable, timestamp } = this._issueTx

    return {
      id,
      gameId: sender,
      name,
      imageUrl,
      quantity,
      reissuable,
      misc,
      rawParams: this._itemParams,
      timestamp,
    }
  }
}
