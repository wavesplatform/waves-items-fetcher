// Code generated by Prisma (prisma@1.34.0). DO NOT EDIT.
// Please don't change this file manually but run `prisma generate` to update it.
// For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

import { DocumentNode } from "graphql";
import {
  makePrismaClientClass,
  BaseClientOptions,
  Model
} from "prisma-client-lib";
import { typeDefs } from "./prisma-schema";

export type AtLeastOne<T, U = { [K in keyof T]: Pick<T, K> }> = Partial<T> &
  U[keyof U];

export type Maybe<T> = T | undefined | null;

export interface Exists {
  item: (where?: ItemWhereInput) => Promise<boolean>;
  user: (where?: UserWhereInput) => Promise<boolean>;
}

export interface Node {}

export type FragmentableArray<T> = Promise<Array<T>> & Fragmentable;

export interface Fragmentable {
  $fragment<T>(fragment: string | DocumentNode): Promise<T>;
}

export interface Prisma {
  $exists: Exists;
  $graphql: <T = any>(
    query: string,
    variables?: { [key: string]: any }
  ) => Promise<T>;

  /**
   * Queries
   */

  item: (where: ItemWhereUniqueInput) => ItemNullablePromise;
  items: (args?: {
    where?: ItemWhereInput;
    orderBy?: ItemOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => FragmentableArray<Item>;
  itemsConnection: (args?: {
    where?: ItemWhereInput;
    orderBy?: ItemOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => ItemConnectionPromise;
  user: (where: UserWhereUniqueInput) => UserNullablePromise;
  users: (args?: {
    where?: UserWhereInput;
    orderBy?: UserOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => FragmentableArray<User>;
  usersConnection: (args?: {
    where?: UserWhereInput;
    orderBy?: UserOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => UserConnectionPromise;
  node: (args: { id: ID_Output }) => Node;

  /**
   * Mutations
   */

  createItem: (data: ItemCreateInput) => ItemPromise;
  updateItem: (args: {
    data: ItemUpdateInput;
    where: ItemWhereUniqueInput;
  }) => ItemPromise;
  updateManyItems: (args: {
    data: ItemUpdateManyMutationInput;
    where?: ItemWhereInput;
  }) => BatchPayloadPromise;
  upsertItem: (args: {
    where: ItemWhereUniqueInput;
    create: ItemCreateInput;
    update: ItemUpdateInput;
  }) => ItemPromise;
  deleteItem: (where: ItemWhereUniqueInput) => ItemPromise;
  deleteManyItems: (where?: ItemWhereInput) => BatchPayloadPromise;
  createUser: (data: UserCreateInput) => UserPromise;
  updateUser: (args: {
    data: UserUpdateInput;
    where: UserWhereUniqueInput;
  }) => UserPromise;
  updateManyUsers: (args: {
    data: UserUpdateManyMutationInput;
    where?: UserWhereInput;
  }) => BatchPayloadPromise;
  upsertUser: (args: {
    where: UserWhereUniqueInput;
    create: UserCreateInput;
    update: UserUpdateInput;
  }) => UserPromise;
  deleteUser: (where: UserWhereUniqueInput) => UserPromise;
  deleteManyUsers: (where?: UserWhereInput) => BatchPayloadPromise;

  /**
   * Subscriptions
   */

  $subscribe: Subscription;
}

export interface Subscription {
  item: (
    where?: ItemSubscriptionWhereInput
  ) => ItemSubscriptionPayloadSubscription;
  user: (
    where?: UserSubscriptionWhereInput
  ) => UserSubscriptionPayloadSubscription;
}

export interface ClientConstructor<T> {
  new (options?: BaseClientOptions): T;
}

/**
 * Types
 */

export type UserRole = "USER" | "GAME" | "MANAGER";

export type ItemOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "assetId_ASC"
  | "assetId_DESC"
  | "name_ASC"
  | "name_DESC"
  | "quantity_ASC"
  | "quantity_DESC"
  | "imageUrl_ASC"
  | "imageUrl_DESC"
  | "reissuable_ASC"
  | "reissuable_DESC"
  | "timestamp_ASC"
  | "timestamp_DESC"
  | "misc_ASC"
  | "misc_DESC"
  | "rawParams_ASC"
  | "rawParams_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC";

export type UserOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "address_ASC"
  | "address_DESC"
  | "name_ASC"
  | "name_DESC"
  | "email_ASC"
  | "email_DESC"
  | "role_ASC"
  | "role_DESC"
  | "image_ASC"
  | "image_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC";

export type MutationType = "CREATED" | "UPDATED" | "DELETED";

export type ItemWhereUniqueInput = AtLeastOne<{
  id: Maybe<ID_Input>;
  assetId?: Maybe<String>;
}>;

export interface ItemWhereInput {
  id?: Maybe<ID_Input>;
  id_not?: Maybe<ID_Input>;
  id_in?: Maybe<ID_Input[] | ID_Input>;
  id_not_in?: Maybe<ID_Input[] | ID_Input>;
  id_lt?: Maybe<ID_Input>;
  id_lte?: Maybe<ID_Input>;
  id_gt?: Maybe<ID_Input>;
  id_gte?: Maybe<ID_Input>;
  id_contains?: Maybe<ID_Input>;
  id_not_contains?: Maybe<ID_Input>;
  id_starts_with?: Maybe<ID_Input>;
  id_not_starts_with?: Maybe<ID_Input>;
  id_ends_with?: Maybe<ID_Input>;
  id_not_ends_with?: Maybe<ID_Input>;
  assetId?: Maybe<String>;
  assetId_not?: Maybe<String>;
  assetId_in?: Maybe<String[] | String>;
  assetId_not_in?: Maybe<String[] | String>;
  assetId_lt?: Maybe<String>;
  assetId_lte?: Maybe<String>;
  assetId_gt?: Maybe<String>;
  assetId_gte?: Maybe<String>;
  assetId_contains?: Maybe<String>;
  assetId_not_contains?: Maybe<String>;
  assetId_starts_with?: Maybe<String>;
  assetId_not_starts_with?: Maybe<String>;
  assetId_ends_with?: Maybe<String>;
  assetId_not_ends_with?: Maybe<String>;
  name?: Maybe<String>;
  name_not?: Maybe<String>;
  name_in?: Maybe<String[] | String>;
  name_not_in?: Maybe<String[] | String>;
  name_lt?: Maybe<String>;
  name_lte?: Maybe<String>;
  name_gt?: Maybe<String>;
  name_gte?: Maybe<String>;
  name_contains?: Maybe<String>;
  name_not_contains?: Maybe<String>;
  name_starts_with?: Maybe<String>;
  name_not_starts_with?: Maybe<String>;
  name_ends_with?: Maybe<String>;
  name_not_ends_with?: Maybe<String>;
  quantity?: Maybe<Int>;
  quantity_not?: Maybe<Int>;
  quantity_in?: Maybe<Int[] | Int>;
  quantity_not_in?: Maybe<Int[] | Int>;
  quantity_lt?: Maybe<Int>;
  quantity_lte?: Maybe<Int>;
  quantity_gt?: Maybe<Int>;
  quantity_gte?: Maybe<Int>;
  game?: Maybe<UserWhereInput>;
  imageUrl?: Maybe<String>;
  imageUrl_not?: Maybe<String>;
  imageUrl_in?: Maybe<String[] | String>;
  imageUrl_not_in?: Maybe<String[] | String>;
  imageUrl_lt?: Maybe<String>;
  imageUrl_lte?: Maybe<String>;
  imageUrl_gt?: Maybe<String>;
  imageUrl_gte?: Maybe<String>;
  imageUrl_contains?: Maybe<String>;
  imageUrl_not_contains?: Maybe<String>;
  imageUrl_starts_with?: Maybe<String>;
  imageUrl_not_starts_with?: Maybe<String>;
  imageUrl_ends_with?: Maybe<String>;
  imageUrl_not_ends_with?: Maybe<String>;
  reissuable?: Maybe<Boolean>;
  reissuable_not?: Maybe<Boolean>;
  timestamp?: Maybe<DateTimeInput>;
  timestamp_not?: Maybe<DateTimeInput>;
  timestamp_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  timestamp_not_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  timestamp_lt?: Maybe<DateTimeInput>;
  timestamp_lte?: Maybe<DateTimeInput>;
  timestamp_gt?: Maybe<DateTimeInput>;
  timestamp_gte?: Maybe<DateTimeInput>;
  createdAt?: Maybe<DateTimeInput>;
  createdAt_not?: Maybe<DateTimeInput>;
  createdAt_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  createdAt_not_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  createdAt_lt?: Maybe<DateTimeInput>;
  createdAt_lte?: Maybe<DateTimeInput>;
  createdAt_gt?: Maybe<DateTimeInput>;
  createdAt_gte?: Maybe<DateTimeInput>;
  updatedAt?: Maybe<DateTimeInput>;
  updatedAt_not?: Maybe<DateTimeInput>;
  updatedAt_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  updatedAt_not_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  updatedAt_lt?: Maybe<DateTimeInput>;
  updatedAt_lte?: Maybe<DateTimeInput>;
  updatedAt_gt?: Maybe<DateTimeInput>;
  updatedAt_gte?: Maybe<DateTimeInput>;
  AND?: Maybe<ItemWhereInput[] | ItemWhereInput>;
  OR?: Maybe<ItemWhereInput[] | ItemWhereInput>;
  NOT?: Maybe<ItemWhereInput[] | ItemWhereInput>;
}

export interface UserWhereInput {
  id?: Maybe<ID_Input>;
  id_not?: Maybe<ID_Input>;
  id_in?: Maybe<ID_Input[] | ID_Input>;
  id_not_in?: Maybe<ID_Input[] | ID_Input>;
  id_lt?: Maybe<ID_Input>;
  id_lte?: Maybe<ID_Input>;
  id_gt?: Maybe<ID_Input>;
  id_gte?: Maybe<ID_Input>;
  id_contains?: Maybe<ID_Input>;
  id_not_contains?: Maybe<ID_Input>;
  id_starts_with?: Maybe<ID_Input>;
  id_not_starts_with?: Maybe<ID_Input>;
  id_ends_with?: Maybe<ID_Input>;
  id_not_ends_with?: Maybe<ID_Input>;
  address?: Maybe<String>;
  address_not?: Maybe<String>;
  address_in?: Maybe<String[] | String>;
  address_not_in?: Maybe<String[] | String>;
  address_lt?: Maybe<String>;
  address_lte?: Maybe<String>;
  address_gt?: Maybe<String>;
  address_gte?: Maybe<String>;
  address_contains?: Maybe<String>;
  address_not_contains?: Maybe<String>;
  address_starts_with?: Maybe<String>;
  address_not_starts_with?: Maybe<String>;
  address_ends_with?: Maybe<String>;
  address_not_ends_with?: Maybe<String>;
  name?: Maybe<String>;
  name_not?: Maybe<String>;
  name_in?: Maybe<String[] | String>;
  name_not_in?: Maybe<String[] | String>;
  name_lt?: Maybe<String>;
  name_lte?: Maybe<String>;
  name_gt?: Maybe<String>;
  name_gte?: Maybe<String>;
  name_contains?: Maybe<String>;
  name_not_contains?: Maybe<String>;
  name_starts_with?: Maybe<String>;
  name_not_starts_with?: Maybe<String>;
  name_ends_with?: Maybe<String>;
  name_not_ends_with?: Maybe<String>;
  email?: Maybe<String>;
  email_not?: Maybe<String>;
  email_in?: Maybe<String[] | String>;
  email_not_in?: Maybe<String[] | String>;
  email_lt?: Maybe<String>;
  email_lte?: Maybe<String>;
  email_gt?: Maybe<String>;
  email_gte?: Maybe<String>;
  email_contains?: Maybe<String>;
  email_not_contains?: Maybe<String>;
  email_starts_with?: Maybe<String>;
  email_not_starts_with?: Maybe<String>;
  email_ends_with?: Maybe<String>;
  email_not_ends_with?: Maybe<String>;
  role?: Maybe<UserRole>;
  role_not?: Maybe<UserRole>;
  role_in?: Maybe<UserRole[] | UserRole>;
  role_not_in?: Maybe<UserRole[] | UserRole>;
  items_every?: Maybe<ItemWhereInput>;
  items_some?: Maybe<ItemWhereInput>;
  items_none?: Maybe<ItemWhereInput>;
  createdAt?: Maybe<DateTimeInput>;
  createdAt_not?: Maybe<DateTimeInput>;
  createdAt_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  createdAt_not_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  createdAt_lt?: Maybe<DateTimeInput>;
  createdAt_lte?: Maybe<DateTimeInput>;
  createdAt_gt?: Maybe<DateTimeInput>;
  createdAt_gte?: Maybe<DateTimeInput>;
  updatedAt?: Maybe<DateTimeInput>;
  updatedAt_not?: Maybe<DateTimeInput>;
  updatedAt_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  updatedAt_not_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  updatedAt_lt?: Maybe<DateTimeInput>;
  updatedAt_lte?: Maybe<DateTimeInput>;
  updatedAt_gt?: Maybe<DateTimeInput>;
  updatedAt_gte?: Maybe<DateTimeInput>;
  AND?: Maybe<UserWhereInput[] | UserWhereInput>;
  OR?: Maybe<UserWhereInput[] | UserWhereInput>;
  NOT?: Maybe<UserWhereInput[] | UserWhereInput>;
}

export type UserWhereUniqueInput = AtLeastOne<{
  id: Maybe<ID_Input>;
  address?: Maybe<String>;
}>;

export interface ItemCreateInput {
  id?: Maybe<ID_Input>;
  assetId: String;
  name: String;
  quantity: Int;
  game: UserCreateOneWithoutItemsInput;
  imageUrl: String;
  reissuable: Boolean;
  timestamp: DateTimeInput;
  misc?: Maybe<Json>;
  rawParams: Json;
}

export interface UserCreateOneWithoutItemsInput {
  create?: Maybe<UserCreateWithoutItemsInput>;
  connect?: Maybe<UserWhereUniqueInput>;
}

export interface UserCreateWithoutItemsInput {
  id?: Maybe<ID_Input>;
  address: String;
  name?: Maybe<String>;
  email?: Maybe<String>;
  role?: Maybe<UserRole>;
  image?: Maybe<Json>;
}

export interface ItemUpdateInput {
  assetId?: Maybe<String>;
  name?: Maybe<String>;
  quantity?: Maybe<Int>;
  game?: Maybe<UserUpdateOneRequiredWithoutItemsInput>;
  imageUrl?: Maybe<String>;
  reissuable?: Maybe<Boolean>;
  timestamp?: Maybe<DateTimeInput>;
  misc?: Maybe<Json>;
  rawParams?: Maybe<Json>;
}

export interface UserUpdateOneRequiredWithoutItemsInput {
  create?: Maybe<UserCreateWithoutItemsInput>;
  update?: Maybe<UserUpdateWithoutItemsDataInput>;
  upsert?: Maybe<UserUpsertWithoutItemsInput>;
  connect?: Maybe<UserWhereUniqueInput>;
}

export interface UserUpdateWithoutItemsDataInput {
  address?: Maybe<String>;
  name?: Maybe<String>;
  email?: Maybe<String>;
  role?: Maybe<UserRole>;
  image?: Maybe<Json>;
}

export interface UserUpsertWithoutItemsInput {
  update: UserUpdateWithoutItemsDataInput;
  create: UserCreateWithoutItemsInput;
}

export interface ItemUpdateManyMutationInput {
  assetId?: Maybe<String>;
  name?: Maybe<String>;
  quantity?: Maybe<Int>;
  imageUrl?: Maybe<String>;
  reissuable?: Maybe<Boolean>;
  timestamp?: Maybe<DateTimeInput>;
  misc?: Maybe<Json>;
  rawParams?: Maybe<Json>;
}

export interface UserCreateInput {
  id?: Maybe<ID_Input>;
  address: String;
  name?: Maybe<String>;
  email?: Maybe<String>;
  role?: Maybe<UserRole>;
  items?: Maybe<ItemCreateManyWithoutGameInput>;
  image?: Maybe<Json>;
}

export interface ItemCreateManyWithoutGameInput {
  create?: Maybe<ItemCreateWithoutGameInput[] | ItemCreateWithoutGameInput>;
  connect?: Maybe<ItemWhereUniqueInput[] | ItemWhereUniqueInput>;
}

export interface ItemCreateWithoutGameInput {
  id?: Maybe<ID_Input>;
  assetId: String;
  name: String;
  quantity: Int;
  imageUrl: String;
  reissuable: Boolean;
  timestamp: DateTimeInput;
  misc?: Maybe<Json>;
  rawParams: Json;
}

export interface UserUpdateInput {
  address?: Maybe<String>;
  name?: Maybe<String>;
  email?: Maybe<String>;
  role?: Maybe<UserRole>;
  items?: Maybe<ItemUpdateManyWithoutGameInput>;
  image?: Maybe<Json>;
}

export interface ItemUpdateManyWithoutGameInput {
  create?: Maybe<ItemCreateWithoutGameInput[] | ItemCreateWithoutGameInput>;
  delete?: Maybe<ItemWhereUniqueInput[] | ItemWhereUniqueInput>;
  connect?: Maybe<ItemWhereUniqueInput[] | ItemWhereUniqueInput>;
  set?: Maybe<ItemWhereUniqueInput[] | ItemWhereUniqueInput>;
  disconnect?: Maybe<ItemWhereUniqueInput[] | ItemWhereUniqueInput>;
  update?: Maybe<
    | ItemUpdateWithWhereUniqueWithoutGameInput[]
    | ItemUpdateWithWhereUniqueWithoutGameInput
  >;
  upsert?: Maybe<
    | ItemUpsertWithWhereUniqueWithoutGameInput[]
    | ItemUpsertWithWhereUniqueWithoutGameInput
  >;
  deleteMany?: Maybe<ItemScalarWhereInput[] | ItemScalarWhereInput>;
  updateMany?: Maybe<
    ItemUpdateManyWithWhereNestedInput[] | ItemUpdateManyWithWhereNestedInput
  >;
}

export interface ItemUpdateWithWhereUniqueWithoutGameInput {
  where: ItemWhereUniqueInput;
  data: ItemUpdateWithoutGameDataInput;
}

export interface ItemUpdateWithoutGameDataInput {
  assetId?: Maybe<String>;
  name?: Maybe<String>;
  quantity?: Maybe<Int>;
  imageUrl?: Maybe<String>;
  reissuable?: Maybe<Boolean>;
  timestamp?: Maybe<DateTimeInput>;
  misc?: Maybe<Json>;
  rawParams?: Maybe<Json>;
}

export interface ItemUpsertWithWhereUniqueWithoutGameInput {
  where: ItemWhereUniqueInput;
  update: ItemUpdateWithoutGameDataInput;
  create: ItemCreateWithoutGameInput;
}

export interface ItemScalarWhereInput {
  id?: Maybe<ID_Input>;
  id_not?: Maybe<ID_Input>;
  id_in?: Maybe<ID_Input[] | ID_Input>;
  id_not_in?: Maybe<ID_Input[] | ID_Input>;
  id_lt?: Maybe<ID_Input>;
  id_lte?: Maybe<ID_Input>;
  id_gt?: Maybe<ID_Input>;
  id_gte?: Maybe<ID_Input>;
  id_contains?: Maybe<ID_Input>;
  id_not_contains?: Maybe<ID_Input>;
  id_starts_with?: Maybe<ID_Input>;
  id_not_starts_with?: Maybe<ID_Input>;
  id_ends_with?: Maybe<ID_Input>;
  id_not_ends_with?: Maybe<ID_Input>;
  assetId?: Maybe<String>;
  assetId_not?: Maybe<String>;
  assetId_in?: Maybe<String[] | String>;
  assetId_not_in?: Maybe<String[] | String>;
  assetId_lt?: Maybe<String>;
  assetId_lte?: Maybe<String>;
  assetId_gt?: Maybe<String>;
  assetId_gte?: Maybe<String>;
  assetId_contains?: Maybe<String>;
  assetId_not_contains?: Maybe<String>;
  assetId_starts_with?: Maybe<String>;
  assetId_not_starts_with?: Maybe<String>;
  assetId_ends_with?: Maybe<String>;
  assetId_not_ends_with?: Maybe<String>;
  name?: Maybe<String>;
  name_not?: Maybe<String>;
  name_in?: Maybe<String[] | String>;
  name_not_in?: Maybe<String[] | String>;
  name_lt?: Maybe<String>;
  name_lte?: Maybe<String>;
  name_gt?: Maybe<String>;
  name_gte?: Maybe<String>;
  name_contains?: Maybe<String>;
  name_not_contains?: Maybe<String>;
  name_starts_with?: Maybe<String>;
  name_not_starts_with?: Maybe<String>;
  name_ends_with?: Maybe<String>;
  name_not_ends_with?: Maybe<String>;
  quantity?: Maybe<Int>;
  quantity_not?: Maybe<Int>;
  quantity_in?: Maybe<Int[] | Int>;
  quantity_not_in?: Maybe<Int[] | Int>;
  quantity_lt?: Maybe<Int>;
  quantity_lte?: Maybe<Int>;
  quantity_gt?: Maybe<Int>;
  quantity_gte?: Maybe<Int>;
  imageUrl?: Maybe<String>;
  imageUrl_not?: Maybe<String>;
  imageUrl_in?: Maybe<String[] | String>;
  imageUrl_not_in?: Maybe<String[] | String>;
  imageUrl_lt?: Maybe<String>;
  imageUrl_lte?: Maybe<String>;
  imageUrl_gt?: Maybe<String>;
  imageUrl_gte?: Maybe<String>;
  imageUrl_contains?: Maybe<String>;
  imageUrl_not_contains?: Maybe<String>;
  imageUrl_starts_with?: Maybe<String>;
  imageUrl_not_starts_with?: Maybe<String>;
  imageUrl_ends_with?: Maybe<String>;
  imageUrl_not_ends_with?: Maybe<String>;
  reissuable?: Maybe<Boolean>;
  reissuable_not?: Maybe<Boolean>;
  timestamp?: Maybe<DateTimeInput>;
  timestamp_not?: Maybe<DateTimeInput>;
  timestamp_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  timestamp_not_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  timestamp_lt?: Maybe<DateTimeInput>;
  timestamp_lte?: Maybe<DateTimeInput>;
  timestamp_gt?: Maybe<DateTimeInput>;
  timestamp_gte?: Maybe<DateTimeInput>;
  createdAt?: Maybe<DateTimeInput>;
  createdAt_not?: Maybe<DateTimeInput>;
  createdAt_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  createdAt_not_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  createdAt_lt?: Maybe<DateTimeInput>;
  createdAt_lte?: Maybe<DateTimeInput>;
  createdAt_gt?: Maybe<DateTimeInput>;
  createdAt_gte?: Maybe<DateTimeInput>;
  updatedAt?: Maybe<DateTimeInput>;
  updatedAt_not?: Maybe<DateTimeInput>;
  updatedAt_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  updatedAt_not_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  updatedAt_lt?: Maybe<DateTimeInput>;
  updatedAt_lte?: Maybe<DateTimeInput>;
  updatedAt_gt?: Maybe<DateTimeInput>;
  updatedAt_gte?: Maybe<DateTimeInput>;
  AND?: Maybe<ItemScalarWhereInput[] | ItemScalarWhereInput>;
  OR?: Maybe<ItemScalarWhereInput[] | ItemScalarWhereInput>;
  NOT?: Maybe<ItemScalarWhereInput[] | ItemScalarWhereInput>;
}

export interface ItemUpdateManyWithWhereNestedInput {
  where: ItemScalarWhereInput;
  data: ItemUpdateManyDataInput;
}

export interface ItemUpdateManyDataInput {
  assetId?: Maybe<String>;
  name?: Maybe<String>;
  quantity?: Maybe<Int>;
  imageUrl?: Maybe<String>;
  reissuable?: Maybe<Boolean>;
  timestamp?: Maybe<DateTimeInput>;
  misc?: Maybe<Json>;
  rawParams?: Maybe<Json>;
}

export interface UserUpdateManyMutationInput {
  address?: Maybe<String>;
  name?: Maybe<String>;
  email?: Maybe<String>;
  role?: Maybe<UserRole>;
  image?: Maybe<Json>;
}

export interface ItemSubscriptionWhereInput {
  mutation_in?: Maybe<MutationType[] | MutationType>;
  updatedFields_contains?: Maybe<String>;
  updatedFields_contains_every?: Maybe<String[] | String>;
  updatedFields_contains_some?: Maybe<String[] | String>;
  node?: Maybe<ItemWhereInput>;
  AND?: Maybe<ItemSubscriptionWhereInput[] | ItemSubscriptionWhereInput>;
  OR?: Maybe<ItemSubscriptionWhereInput[] | ItemSubscriptionWhereInput>;
  NOT?: Maybe<ItemSubscriptionWhereInput[] | ItemSubscriptionWhereInput>;
}

export interface UserSubscriptionWhereInput {
  mutation_in?: Maybe<MutationType[] | MutationType>;
  updatedFields_contains?: Maybe<String>;
  updatedFields_contains_every?: Maybe<String[] | String>;
  updatedFields_contains_some?: Maybe<String[] | String>;
  node?: Maybe<UserWhereInput>;
  AND?: Maybe<UserSubscriptionWhereInput[] | UserSubscriptionWhereInput>;
  OR?: Maybe<UserSubscriptionWhereInput[] | UserSubscriptionWhereInput>;
  NOT?: Maybe<UserSubscriptionWhereInput[] | UserSubscriptionWhereInput>;
}

export interface NodeNode {
  id: ID_Output;
}

export interface Item {
  id: ID_Output;
  assetId: String;
  name: String;
  quantity: Int;
  imageUrl: String;
  reissuable: Boolean;
  timestamp: DateTimeOutput;
  misc?: Json;
  rawParams: Json;
  createdAt: DateTimeOutput;
  updatedAt: DateTimeOutput;
}

export interface ItemPromise extends Promise<Item>, Fragmentable {
  id: () => Promise<ID_Output>;
  assetId: () => Promise<String>;
  name: () => Promise<String>;
  quantity: () => Promise<Int>;
  game: <T = UserPromise>() => T;
  imageUrl: () => Promise<String>;
  reissuable: () => Promise<Boolean>;
  timestamp: () => Promise<DateTimeOutput>;
  misc: () => Promise<Json>;
  rawParams: () => Promise<Json>;
  createdAt: () => Promise<DateTimeOutput>;
  updatedAt: () => Promise<DateTimeOutput>;
}

export interface ItemSubscription
  extends Promise<AsyncIterator<Item>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  assetId: () => Promise<AsyncIterator<String>>;
  name: () => Promise<AsyncIterator<String>>;
  quantity: () => Promise<AsyncIterator<Int>>;
  game: <T = UserSubscription>() => T;
  imageUrl: () => Promise<AsyncIterator<String>>;
  reissuable: () => Promise<AsyncIterator<Boolean>>;
  timestamp: () => Promise<AsyncIterator<DateTimeOutput>>;
  misc: () => Promise<AsyncIterator<Json>>;
  rawParams: () => Promise<AsyncIterator<Json>>;
  createdAt: () => Promise<AsyncIterator<DateTimeOutput>>;
  updatedAt: () => Promise<AsyncIterator<DateTimeOutput>>;
}

export interface ItemNullablePromise
  extends Promise<Item | null>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  assetId: () => Promise<String>;
  name: () => Promise<String>;
  quantity: () => Promise<Int>;
  game: <T = UserPromise>() => T;
  imageUrl: () => Promise<String>;
  reissuable: () => Promise<Boolean>;
  timestamp: () => Promise<DateTimeOutput>;
  misc: () => Promise<Json>;
  rawParams: () => Promise<Json>;
  createdAt: () => Promise<DateTimeOutput>;
  updatedAt: () => Promise<DateTimeOutput>;
}

export interface User {
  id: ID_Output;
  address: String;
  name?: String;
  email?: String;
  role?: UserRole;
  image?: Json;
  createdAt: DateTimeOutput;
  updatedAt: DateTimeOutput;
}

export interface UserPromise extends Promise<User>, Fragmentable {
  id: () => Promise<ID_Output>;
  address: () => Promise<String>;
  name: () => Promise<String>;
  email: () => Promise<String>;
  role: () => Promise<UserRole>;
  items: <T = FragmentableArray<Item>>(args?: {
    where?: ItemWhereInput;
    orderBy?: ItemOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => T;
  image: () => Promise<Json>;
  createdAt: () => Promise<DateTimeOutput>;
  updatedAt: () => Promise<DateTimeOutput>;
}

export interface UserSubscription
  extends Promise<AsyncIterator<User>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  address: () => Promise<AsyncIterator<String>>;
  name: () => Promise<AsyncIterator<String>>;
  email: () => Promise<AsyncIterator<String>>;
  role: () => Promise<AsyncIterator<UserRole>>;
  items: <T = Promise<AsyncIterator<ItemSubscription>>>(args?: {
    where?: ItemWhereInput;
    orderBy?: ItemOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => T;
  image: () => Promise<AsyncIterator<Json>>;
  createdAt: () => Promise<AsyncIterator<DateTimeOutput>>;
  updatedAt: () => Promise<AsyncIterator<DateTimeOutput>>;
}

export interface UserNullablePromise
  extends Promise<User | null>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  address: () => Promise<String>;
  name: () => Promise<String>;
  email: () => Promise<String>;
  role: () => Promise<UserRole>;
  items: <T = FragmentableArray<Item>>(args?: {
    where?: ItemWhereInput;
    orderBy?: ItemOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => T;
  image: () => Promise<Json>;
  createdAt: () => Promise<DateTimeOutput>;
  updatedAt: () => Promise<DateTimeOutput>;
}

export interface ItemConnection {
  pageInfo: PageInfo;
  edges: ItemEdge[];
}

export interface ItemConnectionPromise
  extends Promise<ItemConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<ItemEdge>>() => T;
  aggregate: <T = AggregateItemPromise>() => T;
}

export interface ItemConnectionSubscription
  extends Promise<AsyncIterator<ItemConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<ItemEdgeSubscription>>>() => T;
  aggregate: <T = AggregateItemSubscription>() => T;
}

export interface PageInfo {
  hasNextPage: Boolean;
  hasPreviousPage: Boolean;
  startCursor?: String;
  endCursor?: String;
}

export interface PageInfoPromise extends Promise<PageInfo>, Fragmentable {
  hasNextPage: () => Promise<Boolean>;
  hasPreviousPage: () => Promise<Boolean>;
  startCursor: () => Promise<String>;
  endCursor: () => Promise<String>;
}

export interface PageInfoSubscription
  extends Promise<AsyncIterator<PageInfo>>,
    Fragmentable {
  hasNextPage: () => Promise<AsyncIterator<Boolean>>;
  hasPreviousPage: () => Promise<AsyncIterator<Boolean>>;
  startCursor: () => Promise<AsyncIterator<String>>;
  endCursor: () => Promise<AsyncIterator<String>>;
}

export interface ItemEdge {
  node: Item;
  cursor: String;
}

export interface ItemEdgePromise extends Promise<ItemEdge>, Fragmentable {
  node: <T = ItemPromise>() => T;
  cursor: () => Promise<String>;
}

export interface ItemEdgeSubscription
  extends Promise<AsyncIterator<ItemEdge>>,
    Fragmentable {
  node: <T = ItemSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface AggregateItem {
  count: Int;
}

export interface AggregateItemPromise
  extends Promise<AggregateItem>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateItemSubscription
  extends Promise<AsyncIterator<AggregateItem>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface UserConnection {
  pageInfo: PageInfo;
  edges: UserEdge[];
}

export interface UserConnectionPromise
  extends Promise<UserConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<UserEdge>>() => T;
  aggregate: <T = AggregateUserPromise>() => T;
}

export interface UserConnectionSubscription
  extends Promise<AsyncIterator<UserConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<UserEdgeSubscription>>>() => T;
  aggregate: <T = AggregateUserSubscription>() => T;
}

export interface UserEdge {
  node: User;
  cursor: String;
}

export interface UserEdgePromise extends Promise<UserEdge>, Fragmentable {
  node: <T = UserPromise>() => T;
  cursor: () => Promise<String>;
}

export interface UserEdgeSubscription
  extends Promise<AsyncIterator<UserEdge>>,
    Fragmentable {
  node: <T = UserSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface AggregateUser {
  count: Int;
}

export interface AggregateUserPromise
  extends Promise<AggregateUser>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateUserSubscription
  extends Promise<AsyncIterator<AggregateUser>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface BatchPayload {
  count: Long;
}

export interface BatchPayloadPromise
  extends Promise<BatchPayload>,
    Fragmentable {
  count: () => Promise<Long>;
}

export interface BatchPayloadSubscription
  extends Promise<AsyncIterator<BatchPayload>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Long>>;
}

export interface ItemSubscriptionPayload {
  mutation: MutationType;
  node: Item;
  updatedFields: String[];
  previousValues: ItemPreviousValues;
}

export interface ItemSubscriptionPayloadPromise
  extends Promise<ItemSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = ItemPromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = ItemPreviousValuesPromise>() => T;
}

export interface ItemSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<ItemSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = ItemSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = ItemPreviousValuesSubscription>() => T;
}

export interface ItemPreviousValues {
  id: ID_Output;
  assetId: String;
  name: String;
  quantity: Int;
  imageUrl: String;
  reissuable: Boolean;
  timestamp: DateTimeOutput;
  misc?: Json;
  rawParams: Json;
  createdAt: DateTimeOutput;
  updatedAt: DateTimeOutput;
}

export interface ItemPreviousValuesPromise
  extends Promise<ItemPreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  assetId: () => Promise<String>;
  name: () => Promise<String>;
  quantity: () => Promise<Int>;
  imageUrl: () => Promise<String>;
  reissuable: () => Promise<Boolean>;
  timestamp: () => Promise<DateTimeOutput>;
  misc: () => Promise<Json>;
  rawParams: () => Promise<Json>;
  createdAt: () => Promise<DateTimeOutput>;
  updatedAt: () => Promise<DateTimeOutput>;
}

export interface ItemPreviousValuesSubscription
  extends Promise<AsyncIterator<ItemPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  assetId: () => Promise<AsyncIterator<String>>;
  name: () => Promise<AsyncIterator<String>>;
  quantity: () => Promise<AsyncIterator<Int>>;
  imageUrl: () => Promise<AsyncIterator<String>>;
  reissuable: () => Promise<AsyncIterator<Boolean>>;
  timestamp: () => Promise<AsyncIterator<DateTimeOutput>>;
  misc: () => Promise<AsyncIterator<Json>>;
  rawParams: () => Promise<AsyncIterator<Json>>;
  createdAt: () => Promise<AsyncIterator<DateTimeOutput>>;
  updatedAt: () => Promise<AsyncIterator<DateTimeOutput>>;
}

export interface UserSubscriptionPayload {
  mutation: MutationType;
  node: User;
  updatedFields: String[];
  previousValues: UserPreviousValues;
}

export interface UserSubscriptionPayloadPromise
  extends Promise<UserSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = UserPromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = UserPreviousValuesPromise>() => T;
}

export interface UserSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<UserSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = UserSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = UserPreviousValuesSubscription>() => T;
}

export interface UserPreviousValues {
  id: ID_Output;
  address: String;
  name?: String;
  email?: String;
  role?: UserRole;
  image?: Json;
  createdAt: DateTimeOutput;
  updatedAt: DateTimeOutput;
}

export interface UserPreviousValuesPromise
  extends Promise<UserPreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  address: () => Promise<String>;
  name: () => Promise<String>;
  email: () => Promise<String>;
  role: () => Promise<UserRole>;
  image: () => Promise<Json>;
  createdAt: () => Promise<DateTimeOutput>;
  updatedAt: () => Promise<DateTimeOutput>;
}

export interface UserPreviousValuesSubscription
  extends Promise<AsyncIterator<UserPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  address: () => Promise<AsyncIterator<String>>;
  name: () => Promise<AsyncIterator<String>>;
  email: () => Promise<AsyncIterator<String>>;
  role: () => Promise<AsyncIterator<UserRole>>;
  image: () => Promise<AsyncIterator<Json>>;
  createdAt: () => Promise<AsyncIterator<DateTimeOutput>>;
  updatedAt: () => Promise<AsyncIterator<DateTimeOutput>>;
}

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number;
export type ID_Output = string;

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string;

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. 
*/
export type Int = number;

/*
DateTime scalar input type, allowing Date
*/
export type DateTimeInput = Date | string;

/*
DateTime scalar output type, which is always a string
*/
export type DateTimeOutput = string;

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean;

export type Json = any;

export type Long = string;

/**
 * Model Metadata
 */

export const models: Model[] = [
  {
    name: "User",
    embedded: false
  },
  {
    name: "Item",
    embedded: false
  },
  {
    name: "UserRole",
    embedded: false
  }
];

/**
 * Type Defs
 */

export const Prisma = makePrismaClientClass<ClientConstructor<Prisma>>({
  typeDefs,
  models,
  endpoint: `http://${process.env["PRISMA_HOST"]}:4466`
});
export const prisma = new Prisma();
