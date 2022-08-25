import { useTranslations } from 'next-intl'
import type { FC } from 'react'

import { HeaderFieldset } from '~/features/HeaderFieldset'

import { StyledH1 } from './styled'

import { LocalesSwitcher } from '../LocalesSwitcher'

export const Header: FC = () => {
  const t = useTranslations('Global')

  return (
    <header>
      <nav>
        <LocalesSwitcher />
      </nav>
      <StyledH1 isHtmlTagOpen>{t('title')}</StyledH1>
      <HeaderFieldset />
    </header>
  )
}
