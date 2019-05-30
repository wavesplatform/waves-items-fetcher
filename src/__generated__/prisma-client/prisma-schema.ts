// Code generated by Prisma (prisma@1.34.0). DO NOT EDIT.
  // Please don't change this file manually but run `prisma generate` to update it.
  // For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

export const typeDefs = /* GraphQL */ `type AggregateItem {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type BatchPayload {
  count: Long!
}

scalar DateTime

type Item {
  id: ID!
  assetId: String!
  name: String!
  quantity: Int!
  game: User!
  imageUrl: String!
  reissuable: Boolean!
  timestamp: DateTime!
  misc: Json
  rawParams: Json!
  createdAt: DateTime!
  updatedAt: DateTime!
}

type ItemConnection {
  pageInfo: PageInfo!
  edges: [ItemEdge]!
  aggregate: AggregateItem!
}

input ItemCreateInput {
  id: ID
  assetId: String!
  name: String!
  quantity: Int!
  game: UserCreateOneWithoutItemsInput!
  imageUrl: String!
  reissuable: Boolean!
  timestamp: DateTime!
  misc: Json
  rawParams: Json!
}

input ItemCreateManyWithoutGameInput {
  create: [ItemCreateWithoutGameInput!]
  connect: [ItemWhereUniqueInput!]
}

input ItemCreateWithoutGameInput {
  id: ID
  assetId: String!
  name: String!
  quantity: Int!
  imageUrl: String!
  reissuable: Boolean!
  timestamp: DateTime!
  misc: Json
  rawParams: Json!
}

type ItemEdge {
  node: Item!
  cursor: String!
}

enum ItemOrderByInput {
  id_ASC
  id_DESC
  assetId_ASC
  assetId_DESC
  name_ASC
  name_DESC
  quantity_ASC
  quantity_DESC
  imageUrl_ASC
  imageUrl_DESC
  reissuable_ASC
  reissuable_DESC
  timestamp_ASC
  timestamp_DESC
  misc_ASC
  misc_DESC
  rawParams_ASC
  rawParams_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type ItemPreviousValues {
  id: ID!
  assetId: String!
  name: String!
  quantity: Int!
  imageUrl: String!
  reissuable: Boolean!
  timestamp: DateTime!
  misc: Json
  rawParams: Json!
  createdAt: DateTime!
  updatedAt: DateTime!
}

input ItemScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  assetId: String
  assetId_not: String
  assetId_in: [String!]
  assetId_not_in: [String!]
  assetId_lt: String
  assetId_lte: String
  assetId_gt: String
  assetId_gte: String
  assetId_contains: String
  assetId_not_contains: String
  assetId_starts_with: String
  assetId_not_starts_with: String
  assetId_ends_with: String
  assetId_not_ends_with: String
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  quantity: Int
  quantity_not: Int
  quantity_in: [Int!]
  quantity_not_in: [Int!]
  quantity_lt: Int
  quantity_lte: Int
  quantity_gt: Int
  quantity_gte: Int
  imageUrl: String
  imageUrl_not: String
  imageUrl_in: [String!]
  imageUrl_not_in: [String!]
  imageUrl_lt: String
  imageUrl_lte: String
  imageUrl_gt: String
  imageUrl_gte: String
  imageUrl_contains: String
  imageUrl_not_contains: String
  imageUrl_starts_with: String
  imageUrl_not_starts_with: String
  imageUrl_ends_with: String
  imageUrl_not_ends_with: String
  reissuable: Boolean
  reissuable_not: Boolean
  timestamp: DateTime
  timestamp_not: DateTime
  timestamp_in: [DateTime!]
  timestamp_not_in: [DateTime!]
  timestamp_lt: DateTime
  timestamp_lte: DateTime
  timestamp_gt: DateTime
  timestamp_gte: DateTime
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  AND: [ItemScalarWhereInput!]
  OR: [ItemScalarWhereInput!]
  NOT: [ItemScalarWhereInput!]
}

type ItemSubscriptionPayload {
  mutation: MutationType!
  node: Item
  updatedFields: [String!]
  previousValues: ItemPreviousValues
}

input ItemSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: ItemWhereInput
  AND: [ItemSubscriptionWhereInput!]
  OR: [ItemSubscriptionWhereInput!]
  NOT: [ItemSubscriptionWhereInput!]
}

input ItemUpdateInput {
  assetId: String
  name: String
  quantity: Int
  game: UserUpdateOneRequiredWithoutItemsInput
  imageUrl: String
  reissuable: Boolean
  timestamp: DateTime
  misc: Json
  rawParams: Json
}

input ItemUpdateManyDataInput {
  assetId: String
  name: String
  quantity: Int
  imageUrl: String
  reissuable: Boolean
  timestamp: DateTime
  misc: Json
  rawParams: Json
}

input ItemUpdateManyMutationInput {
  assetId: String
  name: String
  quantity: Int
  imageUrl: String
  reissuable: Boolean
  timestamp: DateTime
  misc: Json
  rawParams: Json
}

input ItemUpdateManyWithoutGameInput {
  create: [ItemCreateWithoutGameInput!]
  delete: [ItemWhereUniqueInput!]
  connect: [ItemWhereUniqueInput!]
  set: [ItemWhereUniqueInput!]
  disconnect: [ItemWhereUniqueInput!]
  update: [ItemUpdateWithWhereUniqueWithoutGameInput!]
  upsert: [ItemUpsertWithWhereUniqueWithoutGameInput!]
  deleteMany: [ItemScalarWhereInput!]
  updateMany: [ItemUpdateManyWithWhereNestedInput!]
}

input ItemUpdateManyWithWhereNestedInput {
  where: ItemScalarWhereInput!
  data: ItemUpdateManyDataInput!
}

input ItemUpdateWithoutGameDataInput {
  assetId: String
  name: String
  quantity: Int
  imageUrl: String
  reissuable: Boolean
  timestamp: DateTime
  misc: Json
  rawParams: Json
}

input ItemUpdateWithWhereUniqueWithoutGameInput {
  where: ItemWhereUniqueInput!
  data: ItemUpdateWithoutGameDataInput!
}

input ItemUpsertWithWhereUniqueWithoutGameInput {
  where: ItemWhereUniqueInput!
  update: ItemUpdateWithoutGameDataInput!
  create: ItemCreateWithoutGameInput!
}

input ItemWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  assetId: String
  assetId_not: String
  assetId_in: [String!]
  assetId_not_in: [String!]
  assetId_lt: String
  assetId_lte: String
  assetId_gt: String
  assetId_gte: String
  assetId_contains: String
  assetId_not_contains: String
  assetId_starts_with: String
  assetId_not_starts_with: String
  assetId_ends_with: String
  assetId_not_ends_with: String
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  quantity: Int
  quantity_not: Int
  quantity_in: [Int!]
  quantity_not_in: [Int!]
  quantity_lt: Int
  quantity_lte: Int
  quantity_gt: Int
  quantity_gte: Int
  game: UserWhereInput
  imageUrl: String
  imageUrl_not: String
  imageUrl_in: [String!]
  imageUrl_not_in: [String!]
  imageUrl_lt: String
  imageUrl_lte: String
  imageUrl_gt: String
  imageUrl_gte: String
  imageUrl_contains: String
  imageUrl_not_contains: String
  imageUrl_starts_with: String
  imageUrl_not_starts_with: String
  imageUrl_ends_with: String
  imageUrl_not_ends_with: String
  reissuable: Boolean
  reissuable_not: Boolean
  timestamp: DateTime
  timestamp_not: DateTime
  timestamp_in: [DateTime!]
  timestamp_not_in: [DateTime!]
  timestamp_lt: DateTime
  timestamp_lte: DateTime
  timestamp_gt: DateTime
  timestamp_gte: DateTime
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  AND: [ItemWhereInput!]
  OR: [ItemWhereInput!]
  NOT: [ItemWhereInput!]
}

input ItemWhereUniqueInput {
  id: ID
  assetId: String
}

scalar Json

scalar Long

type Mutation {
  createItem(data: ItemCreateInput!): Item!
  updateItem(data: ItemUpdateInput!, where: ItemWhereUniqueInput!): Item
  updateManyItems(data: ItemUpdateManyMutationInput!, where: ItemWhereInput): BatchPayload!
  upsertItem(where: ItemWhereUniqueInput!, create: ItemCreateInput!, update: ItemUpdateInput!): Item!
  deleteItem(where: ItemWhereUniqueInput!): Item
  deleteManyItems(where: ItemWhereInput): BatchPayload!
  createUser(data: UserCreateInput!): User!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateManyUsers(data: UserUpdateManyMutationInput!, where: UserWhereInput): BatchPayload!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  deleteUser(where: UserWhereUniqueInput!): User
  deleteManyUsers(where: UserWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Query {
  item(where: ItemWhereUniqueInput!): Item
  items(where: ItemWhereInput, orderBy: ItemOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Item]!
  itemsConnection(where: ItemWhereInput, orderBy: ItemOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ItemConnection!
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  node(id: ID!): Node
}

type Subscription {
  item(where: ItemSubscriptionWhereInput): ItemSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
}

type User {
  id: ID!
  address: String!
  name: String
  email: String
  role: UserRole
  items(where: ItemWhereInput, orderBy: ItemOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Item!]
  image: Json
  createdAt: DateTime!
  updatedAt: DateTime!
}

type UserConnection {
  pageInfo: PageInfo!
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  id: ID
  address: String!
  name: String
  email: String
  role: UserRole
  items: ItemCreateManyWithoutGameInput
  image: Json
}

input UserCreateOneWithoutItemsInput {
  create: UserCreateWithoutItemsInput
  connect: UserWhereUniqueInput
}

input UserCreateWithoutItemsInput {
  id: ID
  address: String!
  name: String
  email: String
  role: UserRole
  image: Json
}

type UserEdge {
  node: User!
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  address_ASC
  address_DESC
  name_ASC
  name_DESC
  email_ASC
  email_DESC
  role_ASC
  role_DESC
  image_ASC
  image_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type UserPreviousValues {
  id: ID!
  address: String!
  name: String
  email: String
  role: UserRole
  image: Json
  createdAt: DateTime!
  updatedAt: DateTime!
}

enum UserRole {
  USER
  GAME
  MANAGER
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: UserWhereInput
  AND: [UserSubscriptionWhereInput!]
  OR: [UserSubscriptionWhereInput!]
  NOT: [UserSubscriptionWhereInput!]
}

input UserUpdateInput {
  address: String
  name: String
  email: String
  role: UserRole
  items: ItemUpdateManyWithoutGameInput
  image: Json
}

input UserUpdateManyMutationInput {
  address: String
  name: String
  email: String
  role: UserRole
  image: Json
}

input UserUpdateOneRequiredWithoutItemsInput {
  create: UserCreateWithoutItemsInput
  update: UserUpdateWithoutItemsDataInput
  upsert: UserUpsertWithoutItemsInput
  connect: UserWhereUniqueInput
}

input UserUpdateWithoutItemsDataInput {
  address: String
  name: String
  email: String
  role: UserRole
  image: Json
}

input UserUpsertWithoutItemsInput {
  update: UserUpdateWithoutItemsDataInput!
  create: UserCreateWithoutItemsInput!
}

input UserWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  address: String
  address_not: String
  address_in: [String!]
  address_not_in: [String!]
  address_lt: String
  address_lte: String
  address_gt: String
  address_gte: String
  address_contains: String
  address_not_contains: String
  address_starts_with: String
  address_not_starts_with: String
  address_ends_with: String
  address_not_ends_with: String
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  role: UserRole
  role_not: UserRole
  role_in: [UserRole!]
  role_not_in: [UserRole!]
  items_every: ItemWhereInput
  items_some: ItemWhereInput
  items_none: ItemWhereInput
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  AND: [UserWhereInput!]
  OR: [UserWhereInput!]
  NOT: [UserWhereInput!]
}

input UserWhereUniqueInput {
  id: ID
  address: String
}
`