import { GraphQLYogaError } from '@graphql-yoga/node'

import config from '~/config'

import type { MutationResolvers } from '../resolvers.generated'
import { toGqlCompleteUser } from '../types/user'

export const updateProfile: MutationResolvers['updateProfile'] = async (
  _,
  { profile },
  { prisma, currentUser },
) => {
  const userId = currentUser.id

  if (profile.playlist.length <= 0) {
    return await Promise.reject(
      new GraphQLYogaError('At least one song to the playlist is required'),
    )
  }

  if (profile.playlist.length > config.maxNumberOfSongs) {
    return await Promise.reject(
      new GraphQLYogaError(
        `You can not submit more than ${config.maxNumberOfSongs} songs`,
      ),
    )
  }

  const user = await prisma.user.update({
    where: { id: userId },
    data: {
      profile: {
        upsert: {
          create: profile,
          update: profile,
        },
      },
    },
    include: { profile: true },
  })

  if (!user.profile) {
    return await Promise.reject(
      new GraphQLYogaError('Failed to update profile'),
    )
  }

  return toGqlCompleteUser(user, user.profile)
}
