import type { AbstractIntlMessages } from 'next-intl'
import { NextIntlProvider } from 'next-intl'
import type { AppProps as NextAppProps } from 'next/app'

import { DefaultHead } from '~/components/DefaultHead'
import { GlobalStyle } from '~/theme/global'

type AppProps<TPageProps = NextAppProps['pageProps']> = {
  pageProps: TPageProps
} & Omit<NextAppProps<TPageProps>, 'pageProps'>

// Global variables
export const weddingDate = new Intl.DateTimeFormat('cs-CS', {
  day: '2-digit',
  month: '2-digit',
  year: 'numeric',
}).format(new Date(2023, 7, 19)) // 19th August 2023

function MyApp({
  Component,
  pageProps,
}: AppProps<{ messages?: AbstractIntlMessages }>) {
  return (
    <NextIntlProvider
      messages={pageProps.messages}

      // TODO: Could the formatting be set here as 'formats' attribute?

      // formats={{
      //   dateTime: {
      //     defaultDate: 'cs-CS', {
      //       day: '2-digit',
      //       month: '2-digit',
      //       year: 'numeric',
      //     }
      //   }
      // }}

      // further usage in translations would be:
      // "date": "{weddingDate, date, defaultDate}"

      // further usage in pages and components would stay the same:
      // {t('date', {weddingDate: weddingDate})}

      // I can make it work with just day, month etc. (see props for other options), but 'cs-CS' is the most important to also keep symbols in the date correct (19. 08. 2023)

      // Alternatively, we could set up utils function that always formats dates with "Intl.DateTimeFormat" showns in the weddingDate variable

      // Docs on DateTime:
      // https://next-intl-docs.vercel.app/docs/usage/dates-times

      // Docs on Global Formats:
      // https://next-intl-docs.vercel.app/docs/usage/configuration#global-formats
    >
      <GlobalStyle />
      <DefaultHead />
      <Component {...pageProps} />
    </NextIntlProvider>
  )
}

export default MyApp
