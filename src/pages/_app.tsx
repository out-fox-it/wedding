import type { AppProps } from 'next/app'

import { DefaultHead } from '~/components/DefaultHead'
import { GlobalStyle } from '~/theme/global'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <DefaultHead />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
