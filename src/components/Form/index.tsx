import { useRef, useState } from 'react'
import type { FC, InputHTMLAttributes, ReactElement, ReactNode } from 'react'

import { colors } from '~/theme/colors'
import { StyledLabel } from '~/theme/layout'

import { FormInputCheck } from './components/FormInputCheck'
import { FormInputPassword } from './components/FormInputPassword'
import { FormInputsToArray } from './components/FormInputsToArray'
import { StyledForm } from './styled'

import { Button } from '../Button'

export interface IFormInput extends InputHTMLAttributes<HTMLInputElement> {
  typeOfInput: 'text' | 'password' | 'textarea' | 'check' | 'inputsToArray'
  identifier: string
  initialNumberOfDisplayedOptions?: number
  label: string
  checkOptions?: Array<{
    optionIdentifier: string
    optionText: string | ReactElement | Iterable<ReactNode>
    optionIcon: JSX.Element
  }>
  inputOptions?: Array<{
    inputTitle: string
    inputPlaceholder?: string
  }>
  addMoreOptionsButtonText?: string
  // "placeholderRich" adheres to intl-next library typing of rich translations
  // deprecatted, any and default types were ommited
  placeholderRich?: string | ReactElement | Iterable<ReactNode>
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
  const formRef = useRef<HTMLFormElement>(null)

  const clearFormData = () => formRef.current?.reset()

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
      ref={formRef}
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
        ({
          typeOfInput,
          identifier,
          initialNumberOfDisplayedOptions,
          label,
          placeholder,
          placeholderRich,
          inputOptions,
          checkOptions,
          addMoreOptionsButtonText,
        }) => (
          <div className="form__children" key={identifier}>
            {typeOfInput === 'text' && (
              <label htmlFor={identifier}>
                <input
                  autoComplete="off"
                  name={identifier}
                  type="text"
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
            {typeOfInput === 'inputsToArray' && (
              <FormInputsToArray
                label={label}
                onChange={handleInputChange}
                identifier={identifier}
                initialNumberOfDisplayedOptions={
                  initialNumberOfDisplayedOptions
                }
                inputOptions={inputOptions}
                placeholderRich={placeholderRich}
                addMoreOptionsButtonText={addMoreOptionsButtonText}
              />
            )}
            {typeOfInput === 'check' && (
              <FormInputCheck
                identifier={identifier}
                checkOptions={checkOptions}
                label={label}
                placeholder={placeholder}
                onChange={handleInputChange}
              />
            )}
            {typeOfInput === 'textarea' && (
              <label htmlFor={identifier}>
                <StyledLabel labelTextColor={colors.accent.purple} labelIsBold>
                  {label}
                </StyledLabel>
                <textarea
                  name={identifier}
                  value={formData.identifier}
                  placeholder={placeholder}
                  rows={5}
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
