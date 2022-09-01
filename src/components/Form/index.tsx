import { useState } from 'react'
import type { FC, InputHTMLAttributes } from 'react'

import { Car } from '~/assets/FormIcons/Car'
import { colors } from '~/theme/colors'
import { StyledLabel } from '~/theme/typography'

import { FormInputPassword } from './components/FormInputPassword'
import { CheckInput, StyledForm } from './styled'

import { Button } from '../Button'
import { Fieldset } from '../Fieldset'

export interface IFormInput extends InputHTMLAttributes<HTMLInputElement> {
  typeOfInput: 'text' | 'password' | 'textarea' | 'check'
  identifier: string
  label: string
  checkOptions?: Array<{
    optionTitle: string
  }>
}

export interface IFormDataType {
  [key: IFormInput['identifier']]: string
}

interface IFormProps {
  actionOnSubmit:
    | ((formData: IFormDataType) => Promise<void>)
    | ((formData: IFormDataType) => void)
  formIdentifier: string
  formTitle: string
  formInputs: IFormInput[]
  submitButtonText?: string
}

export const Form: FC<IFormProps> = ({
  actionOnSubmit,
  formIdentifier,
  formTitle,
  formInputs,
  submitButtonText,
}) => {
  const [formData, setFormData] = useState<IFormDataType>({})

  const clearFormData = () => void setFormData({})

  const handleFormData = async (): Promise<void> => {
    await actionOnSubmit(formData)
    clearFormData()
  }

  const handleInputChange = (
    inputEvent:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
      | React.ChangeEvent<HTMLSelectElement>,
  ): void => {
    const { name, value } = inputEvent.target

    setFormData((previousFormData) => ({
      ...previousFormData,
      [name]: value.toLocaleString(),
    }))
  }

  return (
    <StyledForm
      autoComplete="off"
      id={formIdentifier}
      onSubmit={(formEvent) => {
        formEvent.preventDefault()

        void handleFormData()
      }}
    >
      <StyledLabel labelIsBold labelFontSize="medium">
        {formTitle}
      </StyledLabel>
      {formInputs.map(
        ({ typeOfInput, identifier, type, placeholder, checkOptions }) => (
          <div className="form__children" key={identifier}>
            {typeOfInput === 'text' && (
              <label htmlFor={identifier}>
                <input
                  autoComplete="off"
                  name={identifier}
                  type={type}
                  value={formData.identifier}
                  placeholder={placeholder}
                  onChange={handleInputChange}
                />
              </label>
            )}
            {typeOfInput === 'password' && (
              <FormInputPassword
                identifier={identifier}
                value={formData.identifier}
                placeholder={placeholder}
                onChange={handleInputChange}
              />
            )}
            {typeOfInput === 'check' && (
              <label htmlFor={identifier}>
                <Fieldset
                  borderColor={colors.accent.pink}
                  borderThickness="slim"
                  legendText="Parking"
                >
                  <CheckInput>
                    {checkOptions &&
                      checkOptions.map(({ optionTitle }) => (
                        <div key={optionTitle}>
                          <input
                            type="radio"
                            name={identifier}
                            // eslint-disable-next-line react/forbid-dom-props
                            id={optionTitle}
                            value={optionTitle}
                            onChange={handleInputChange}
                          />
                          <label htmlFor={optionTitle}>
                            <Car />
                            {optionTitle}
                          </label>
                        </div>
                      ))}
                  </CheckInput>
                </Fieldset>
              </label>
            )}
            {typeOfInput === 'textarea' && (
              <label htmlFor={identifier}>
                <textarea
                  name={identifier}
                  value={formData.identifier}
                  placeholder={placeholder}
                  rows={4}
                  onChange={handleInputChange}
                />
              </label>
            )}
          </div>
        ),
      )}
      {submitButtonText && (
        <Button type="submit" form={formIdentifier}>
          {submitButtonText}
        </Button>
      )}
    </StyledForm>
  )
}
