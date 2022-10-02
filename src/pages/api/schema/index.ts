export const typeDefs = /* GraphQL */ `
  directive @auth on FIELD_DEFINITION

  scalar UUID
  scalar EmailAddress
  scalar Password
  scalar Void
  scalar NonEmptyString

  type Query {
    me: User
    hello(name: String!): String!
  }

  type Mutation {
    register(user: UserInput!): User!
    login(email: EmailAddress!, password: Password!): User!
    logout: Void
    updateProfile(profile: ProfileInput!): CompleteUser! @auth
  }

  enum Parking {
    NO
    YES
    SLEEPING
  }

  input UserInput {
    code: String!
    email: EmailAddress!
    password: Password!
  }

  input ProfileInput {
    parking: Parking!
    playlist: [NonEmptyString!]!
    notes: String
  }

  interface BaseUser {
    id: UUID!
    email: EmailAddress!
    complete: Boolean!
  }

  type PendingUser implements BaseUser {
    id: UUID!
    email: EmailAddress!
    complete: Boolean!
  }

  type CompleteUser implements BaseUser {
    id: UUID!
    email: EmailAddress!
    complete: Boolean!
    parking: Parking!
    playlist: [NonEmptyString!]!
    notes: String
  }

  union User = PendingUser | CompleteUser
`
