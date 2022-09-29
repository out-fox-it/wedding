import { ApolloProvider } from '@apollo/client'
import type { AbstractIntlMessages } from 'next-intl'
import { NextIntlProvider } from 'next-intl'
import type { AppProps as NextAppProps } from 'next/app'

import { DefaultHead } from '~/components/DefaultHead'
import { UserProvider } from '~/contexts/User'
import { client } from '~/graphql'
import { GlobalStyle } from '~/theme/global'

type AppProps<TPageProps = NextAppProps['pageProps']> = {
  pageProps: TPageProps
} & Omit<NextAppProps<TPageProps>, 'pageProps'>

const MyApp = ({
  Component,
  pageProps,
}: AppProps<{ messages?: AbstractIntlMessages }>) => (
  <NextIntlProvider
    messages={pageProps.messages}
    defaultTranslationValues={{
      breakingLine: (children) => (
        <>
          <br />
          <br />
          {children}
        </>
      ),
      bold: (children) => <b>{children}</b>,
    }}
  >
    <ApolloProvider client={client}>
      <UserProvider>
        <GlobalStyle />
        <DefaultHead />
        <Component {...pageProps} />
      </UserProvider>
    </ApolloProvider>
  </NextIntlProvider>
)

export default MyApp
