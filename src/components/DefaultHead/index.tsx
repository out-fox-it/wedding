import Head from 'next/head'
import type { FC } from 'react'

export const DefaultHead: FC = () => (
  <Head>
    <meta charSet="UTF-8" />
    <title>WeddinG</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" href="/favicon.ico" />
  </Head>
)
