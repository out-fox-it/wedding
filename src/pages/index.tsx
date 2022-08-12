import type { GetStaticProps, NextPage } from 'next'
import { useTranslations } from 'next-intl'

import { LocalesSwitcher } from '~/components/LocalesSwitcher'
import { loadTranslations } from '~/utils/load-translations'

const Home: NextPage = () => {
  const t = useTranslations('Home')

  return (
    <>
      <h1>{t('title')}</h1>
      <LocalesSwitcher />
    </>
  )
}

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: { messages: locale ? await loadTranslations(locale) : {} },
})

export default Home
