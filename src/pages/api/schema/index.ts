export const typeDefs = /* GraphQL */ `
  directive @auth on FIELD_DEFINITION

  scalar UUID
  scalar EmailAddress
  scalar Password
  scalar Void

  type Query {
    me: User
    hello(name: String!): String!
  }

  type Mutation {
    register(user: UserInput!): User!
    login(email: EmailAddress!, password: Password!): User!
    logout: Void
  }

  input UserInput {
    code: String!
    email: EmailAddress!
    password: Password!
  }

  type User {
    id: UUID!
    email: EmailAddress!
  }
`
