import type { GetStaticProps, NextPage } from 'next'

import { Footer } from '~/components/Footer'
import { Header } from '~/components/Header'
import { AuthForm } from '~/features/AuthForm'
import { WeddingForm } from '~/features/WeddingForm'
import { loadTranslations } from '~/utils/load-translations'

const Home: NextPage = () => (
  <>
    <Header />

    <main>
      <AuthForm />
      <WeddingForm />
    </main>

    <Footer />
  </>
)

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: { messages: locale ? await loadTranslations(locale) : {} },
})

export default Home
