import { getI18n } from '~/locales/server'

import Footer from './footer'
import Header from './header'
import icon from './icon.svg'

export default async function Home() {
  const t = await getI18n()

  return (
    <main className="min-h-screen">
      {/* eslint-disable-next-line @typescript-eslint/no-unsafe-assignment */}
      <Header title={t('title')} icon={icon} />
      <Footer title={t('title')} />
    </main>
  )
}
