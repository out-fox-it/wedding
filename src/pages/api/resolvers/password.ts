import { RegularExpression } from 'graphql-scalars'

export const PasswordResolver = new RegularExpression(
  'Password',
  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/u,
  {
    errorMessage: () =>
      'Password must be at least 8 characters long and must contain at least one upper case letter, one lower case letter and one number',
  },
)
