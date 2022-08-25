import type { GetStaticProps, NextPage } from 'next'

import { Footer } from '~/components/Footer'
import { Header } from '~/components/Header'
import { loadTranslations } from '~/utils/load-translations'

const Home: NextPage = () => {
  return (
    <>
      <Header />

      <main>content page</main>

      <Footer />
    </>
  )
}

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: { messages: locale ? await loadTranslations(locale) : {} },
})

export default Home
