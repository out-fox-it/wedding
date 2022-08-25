import Link from 'next/link'
import { useRouter } from 'next/router'
import type { FC } from 'react'

import { LocalesList, StyledLi } from './styled'

const locales = {
  en: '🇬🇧',
  cs: '🇨🇿',
}

export const LocalesSwitcher: FC = () => {
  const { locale, route } = useRouter()
  const currentLanguage = locale

  return (
    <LocalesList>
      {Object.entries(locales).map(([locale, flag]) => (
        <StyledLi key={locale} isCurrentLanguage={locale === currentLanguage}>
          <Link href={route} locale={locale}>
            {flag}
          </Link>
        </StyledLi>
      ))}
    </LocalesList>
  )
}
