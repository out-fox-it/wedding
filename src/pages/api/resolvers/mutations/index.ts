import type { MutationResolvers } from '../resolvers.generated'
import { register } from './register'
import { login } from './login'
import { logout } from './logout'

export const Mutation: MutationResolvers = {
  register,
  login,
  logout,
}
