import { compare } from 'bcrypt'
import { GraphQLYogaError } from '@graphql-yoga/node'

import type { MutationResolvers } from '../resolvers.generated'
import { toGqlUser } from '../types/user'

export const login: MutationResolvers['login'] = async (
  _,
  { email, password },
  { prisma, session },
) => {
  const user = await prisma.user.findFirst({
    where: { email: { equals: email, mode: 'insensitive' } },
    include: { profile: true },
  })

  if (!user) {
    return await Promise.reject(new GraphQLYogaError('Invalid credentials'))
  }

  const passwordMatches = await compare(password, user.password)

  if (!passwordMatches) {
    return await Promise.reject(new GraphQLYogaError('Invalid credentials'))
  }

  session.user = { id: user.id }
  await session.save()

  return toGqlUser(user)
}
