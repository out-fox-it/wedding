import { useTranslations } from 'next-intl'
import type { FC } from 'react'

import { StyledHtmlTagLookalike } from './styled'

export const Footer: FC = () => {
  const t = useTranslations('Global')

  return (
    <footer>
      <StyledHtmlTagLookalike isHtmlTagOpen={false}>
        {t('title')}
      </StyledHtmlTagLookalike>
    </footer>
  )
}
