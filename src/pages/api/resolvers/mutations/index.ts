import type { MutationResolvers } from '../resolvers.generated'
import { register } from './register'
import { updateProfile } from './update-profile'
import { login } from './login'
import { logout } from './logout'

export const Mutation: MutationResolvers = {
  register,
  updateProfile,
  login,
  logout,
}
