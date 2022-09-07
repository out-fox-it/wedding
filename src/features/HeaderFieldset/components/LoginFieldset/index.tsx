import { useTranslations } from 'next-intl'
import type { FC } from 'react'

import { Button } from '~/components/Button'
import { Fieldset } from '~/components/Fieldset'
import { colors } from '~/theme/colors'

export const LoginFieldset: FC = () => {
  const t = useTranslations('Fieldsets.LogInFieldset')

  return (
    <Fieldset borderColor={colors.accent.purple} legendText={t('legendText')}>
      <span>{t('instructions')}</span>

      <Button>{t('buttonSignUp')}</Button>
      <Button hasGradientOnHover>{t('buttonLogIn')}</Button>
    </Fieldset>
  )
}
