import Link from 'next/link'
import { useRouter } from 'next/router'
import type { FC } from 'react'

import { LocalesList } from './styled'

const locales = {
  en: '🇬🇧',
  cs: '🇨🇿',
}

export const LocalesSwitcher: FC = () => {
  const { route } = useRouter()

  return (
    <LocalesList>
      {Object.entries(locales).map(([locale, flag]) => (
        <li key={locale}>
          <Link href={route} locale={locale}>
            {flag}
          </Link>
        </li>
      ))}
    </LocalesList>
  )
}
