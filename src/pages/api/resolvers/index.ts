import { EmailAddressResolver, UUIDResolver } from 'graphql-scalars'

import type { Resolvers } from './resolvers.generated'
import { PasswordResolver } from './password'
import { Query } from './queries'
import { Mutation } from './mutations'

export const resolvers: Resolvers = {
  UUID: UUIDResolver,
  EmailAddress: EmailAddressResolver,
  Password: PasswordResolver,
  Query,
  Mutation,
}
