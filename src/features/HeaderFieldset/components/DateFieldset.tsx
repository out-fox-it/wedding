import { useTranslations } from 'next-intl'
import type { FC } from 'react'

import { IconHeart } from '~/assets/IconHeart/IconHeart'
import { Fieldset } from '~/components/Fieldset'
import { colors } from '~/theme/colors'
import { StyledLabel } from '~/theme/layout'

const weddingDate = new Date('2023-08-19') // 19th August 2023

const formattedWeddingDate = new Intl.DateTimeFormat('cs-CS', {
  day: '2-digit',
  month: '2-digit',
  year: 'numeric',
}).format(weddingDate)

export const DateFieldset: FC = () => {
  const t = useTranslations('HeaderFieldset.DateFieldset')

  return (
    <Fieldset
      borderColor={colors.accent.pink}
      legendSvgComponent={<IconHeart />}
    >
      <StyledLabel labelIsBold labelFontSize="small">
        {t('title')}
      </StyledLabel>
      <StyledLabel labelFontSize="large" labelTextColor={colors.accent.yellow}>
        {formattedWeddingDate}
      </StyledLabel>
    </Fieldset>
  )
}
