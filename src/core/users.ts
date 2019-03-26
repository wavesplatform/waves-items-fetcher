import { prisma, User } from '../__generated__/prisma-client'

export const getGameAddresses = async (): Promise<string[]> => {
  const games: User[] = await prisma.users({
    // TODO: will be added filter for game role
    where: {},
  })

  return games.map(game => game.address)
}
