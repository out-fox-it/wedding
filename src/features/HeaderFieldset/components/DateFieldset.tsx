import { useTranslations } from 'next-intl'
import type { FC } from 'react'

import { IconHeart } from '~/assets/IconHeart/IconHeart'
import { Fieldset } from '~/components/Fieldset'
import { weddingDate } from '~/pages/_app'
import { colors } from '~/theme/colors'
import { StyledLabel } from '~/theme/typography'

export const DateFieldset: FC = () => {
  // TODO: I don't know how to use multiple objects in one hook. :(
  // Better explained in Address Fieldset!
  const tGlobal = useTranslations('Global')
  const tDate = useTranslations('HeaderFieldset.DateFieldset')

  return (
    <Fieldset
      borderColor={colors.accent.pink}
      legendSvgComponent={<IconHeart />}
    >
      <StyledLabel labelIsBold labelFontSize="small">
        {tDate('title')}
      </StyledLabel>
      <StyledLabel labelFontSize="large" labelTextColor={colors.accent.yellow}>
        {tGlobal('date', { weddingDate: weddingDate })}
      </StyledLabel>
    </Fieldset>
  )
}
