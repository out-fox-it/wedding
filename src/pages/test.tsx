import { useQuery } from '@apollo/client'
import type { GetServerSideProps, NextPage } from 'next'

import { client, Hello } from '~/graphql'

const Test: NextPage<{ hello: string }> = ({ hello }) => {
  const {
    data,
    loading: isLoading,
    error,
  } = useQuery(Hello, {
    variables: { name: 'Client' },
  })

  if (error) return <div>{error.message}</div>

  // if (isLoading) return <div>Loading...</div>

  return <h1>{isLoading ? hello : data?.hello}</h1>
}

export const getServerSideProps: GetServerSideProps = async () => {
  const { data } = await client.query({
    query: Hello,
    fetchPolicy: 'cache-first',
    variables: { name: 'Server' },
  })

  return { props: { hello: data.hello } }
}

export default Test
