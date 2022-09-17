export const typeDefs = /* GraphQL */ `
  scalar UUID
  scalar EmailAddress
  scalar Password

  type Query {
    hello: String!
  }

  type Mutation {
    register(user: UserInput!): User!
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
