import { useTranslations } from 'next-intl'
import type { FC } from 'react'

import { Form } from '~/components/Form'

export const AuthForm: FC = () => {
  const t = useTranslations('Form.AuthForm')

  const handleAuthForm = (authFormResults: {
    invitationCode: string
    username: string
    password: string
  }): void => {
    // TODO: BACKEND <2
    // eslint-disable-next-line no-console
    console.log(authFormResults)
  }

  return (
    <Form
      formIdentifier="authForm"
      formTitle={t('formTitle')}
      actionOnSubmit={(formData) => {
        const authFormResults = {
          invitationCode: formData.invitationCode,
          username: formData.username,
          password: formData.password,
        }

        void handleAuthForm(authFormResults)
      }}
      formInputs={[
        {
          typeOfInput: 'text',
          identifier: 'invitationCode',
          label: 'invitationCode',
          placeholder: t('formInputs.invitationCode'),
          required: true,
        },
        {
          typeOfInput: 'text',
          identifier: 'username',
          label: 'username',
          placeholder: t('formInputs.username'),
          required: true,
        },
        {
          typeOfInput: 'password',
          identifier: 'password',
          label: 'password',
          placeholder: t('formInputs.password'),
          required: true,
        },
      ]}
      submitButtonText={t('formButtonText')}
    />
  )
}
