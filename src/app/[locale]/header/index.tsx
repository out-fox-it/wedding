import Image, { type ImageProps } from 'next/image'

import { getScopedI18n } from '~/locales/server'

import Address from './components/address'
import BackgroundImage from './components/background-image'
import ButtonLink from './components/button-link'
import HeaderBox from './components/header-box'
import LocaleSwitcher from './components/locale-switcher'
import WeddingDate from './components/wedding-date'

type Props = {
  title: string
  icon: ImageProps['src']
}

export default async function Header({ title, icon }: Props) {
  const t = await getScopedI18n('Header')

  return (
    <header className="grid grid-cols-[1fr]">
      <nav className="navbar flex-wrap justify-center gap-8 py-8 pb-16">
        <div className="flex-1 max-sm:hidden" />
        <h1 className="text-center text-5xl font-bold before:pr-2 before:content-['<'] after:pl-2 after:content-['>']">
          {title}
        </h1>
        <LocaleSwitcher className="flex justify-center sm:flex-1 sm:justify-end" />
      </nav>
      <section className="col-[1] flex justify-around gap-12 px-8 uppercase max-lg:flex-col sm:px-24 lg:row-start-2 lg:row-end-4 lg:gap-20 lg:px-20">
        <HeaderBox
          legend={t('address')}
          header={t('where')}
          className="z-10 border-secondary"
        >
          <Address className="text-lg italic" />
        </HeaderBox>
        <HeaderBox
          legend={
            <Image
              className="motion-safe:animate-spin-slow"
              src={icon}
              alt="icon"
            />
          }
          header={t('announcement')}
          className="z-10 -mt-4 border-primary"
        >
          <WeddingDate className="whitespace-nowrap text-4xl text-accent" />
        </HeaderBox>
        <HeaderBox legend={t('gallery')} className="z-10 border-secondary">
          <ButtonLink
            className="hover:btn-secondary"
            link="https://photos.app.goo.gl/JvktZ1mk5HJQtUnX7"
          >
            {t('photos')}
          </ButtonLink>
          <ButtonLink
            className="from-primary to-secondary hover:border-none hover:bg-gradient-stripe"
            link="https://youtu.be/vbqAoUjFLg4"
          >
            {t('video')}
          </ButtonLink>
        </HeaderBox>
      </section>
      <section className="col-[1] max-lg:pt-16 lg:row-start-3 lg:row-end-6">
        <BackgroundImage />
      </section>
    </header>
  )
}
