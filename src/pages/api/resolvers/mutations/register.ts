import { compare, hash } from 'bcrypt'
import { GraphQLYogaError } from '@graphql-yoga/node'

import { authentication } from '~/config'

import type { MutationResolvers } from '../resolvers.generated'
import { toGqlPendingUser, toGqlUser } from '../types/user'

export const register: MutationResolvers['register'] = async (
  _,
  { user: { code, email, password } },
  { prisma, session },
) => {
  const codeExists = (await prisma.code.count({ where: { code } })) > 0

  if (!codeExists) {
    return await Promise.reject(
      new GraphQLYogaError('Invalid registration code'),
    )
  }

  const existingUser = await prisma.user.findFirst({
    where: {
      OR: [
        { email: { equals: email, mode: 'insensitive' } },
        { code: { equals: code, mode: 'insensitive' } },
      ],
    },
    include: { profile: true },
  })

  if (existingUser) {
    if (
      existingUser.email === email &&
      existingUser.code === code &&
      (await compare(password, existingUser.password))
    ) {
      session.user = { id: existingUser.id }
      await session.save()

      return toGqlUser(existingUser)
    }

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

  return toGqlPendingUser(user)
}
