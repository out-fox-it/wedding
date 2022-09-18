import {
  EmailAddressResolver,
  UUIDResolver,
  VoidResolver,
} from 'graphql-scalars'

import type { Resolvers } from './resolvers.generated'
import { PasswordResolver } from './password'
import { Query } from './queries'
import { Mutation } from './mutations'

export const resolvers: Resolvers = {
  UUID: UUIDResolver,
  EmailAddress: EmailAddressResolver,
  Password: PasswordResolver,
  Void: VoidResolver,
  Query,
  Mutation,
}
