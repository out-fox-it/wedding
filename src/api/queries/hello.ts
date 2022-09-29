import { graphql } from '~/graphql'

export const helloQuery = graphql(`
  query Hello($name: String!) {
    hello(name: $name)
  }
`)
