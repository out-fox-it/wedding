import { hash } from 'bcrypt'
import { GraphQLYogaError } from '@graphql-yoga/node'

import { authentication } from '~/config'

import type { MutationResolvers } from '../resolvers.generated'

export const register: MutationResolvers['register'] = async (
  _,
  { user: { code, email, password } },
  { prisma, session },
) => {
  const userExists =
    (await prisma.user.count({
      where: {
        OR: [
          { email: { equals: email, mode: 'insensitive' } },
          { code: { equals: code, mode: 'insensitive' } },
        ],
      },
    })) > 0

  if (userExists) {
    return await Promise.reject(
      new GraphQLYogaError('User with such code or email already exists'),
    )
  }

  const passwordHash = await hash(password, authentication.saltRounds)

  const user = await prisma.user.create({
    data: { code, email, password: passwordHash },
  })

  session.user = { id: user.id }
  await session.save()

  return user
}
