import type { AbstractIntlMessages } from 'next-intl'
import { NextIntlProvider } from 'next-intl'
import type { AppProps as NextAppProps } from 'next/app'

import { DefaultHead } from '~/components/DefaultHead'
import { UserProvider } from '~/contexts/User'
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
    <UserProvider>
      <GlobalStyle />
      <DefaultHead />
      <Component {...pageProps} />
    </UserProvider>
  </NextIntlProvider>
)

export default MyApp
