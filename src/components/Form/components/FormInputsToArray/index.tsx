import type { FC } from 'react'
import { useState } from 'react'

import { Button } from '~/components/Button'
import { Fieldset } from '~/components/Fieldset'
import { colors } from '~/theme/colors'

import { StyledFormInputsToArrayLabel } from './styled'

import type { IFormInput } from '../..'

interface IFormInputsToArrayProps {
  identifier: string
  label: string
  placeholder?: IFormInput['placeholder']
  placeholderRich?: IFormInput['placeholderRich']
  inputOptions: IFormInput['inputOptions']
  addMoreOptionsButtonText: IFormInput['addMoreOptionsButtonText']
  onChange: (
    inputEvent:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
      | React.ChangeEvent<HTMLSelectElement>,
  ) => void
}

export const FormInputsToArray: FC<IFormInputsToArrayProps> = ({
  identifier,
  label,
  inputOptions,
  placeholder,
  placeholderRich,
  addMoreOptionsButtonText,
  onChange,
}) => {
  const [numberOfDisplayedOptions, setNumberOfDisplayedOptions] =
    useState<number>(3)

  const handleNumberOfDisplayedOptions = () => {
    if (!inputOptions) return

    if (inputOptions.length > numberOfDisplayedOptions) {
      setNumberOfDisplayedOptions((previousNumber) => previousNumber + 1)
    }
  }

  return (
    <StyledFormInputsToArrayLabel htmlFor={identifier}>
      <Fieldset
        borderColor={colors.accent.pink}
        borderThickness="slim"
        legendText={label}
      >
        {placeholder && <p>{placeholder}</p>}
        {placeholderRich && <p>{placeholderRich}</p>}
        {inputOptions &&
          inputOptions
            .slice(0, numberOfDisplayedOptions)
            .map(({ inputTitle, inputPlaceholder }, index) => (
              <div key={inputTitle}>
                <span>
                  {index < 9 && 0}
                  {index + 1}.
                </span>
                <input
                  autoComplete="off"
                  name={inputTitle}
                  type="text"
                  placeholder={inputPlaceholder}
                  onChange={onChange}
                />
              </div>
            ))}
        {inputOptions?.length !== numberOfDisplayedOptions && (
          <Button isClear onClick={handleNumberOfDisplayedOptions}>
            ~ {addMoreOptionsButtonText} ~
          </Button>
        )}
      </Fieldset>
    </StyledFormInputsToArrayLabel>
  )
}
