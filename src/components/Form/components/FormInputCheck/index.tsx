import type { FC } from 'react'

import { Fieldset } from '~/components/Fieldset'
import { colors } from '~/theme/colors'

import { CheckInput } from './styled'

import type { IFormInput } from '../..'

interface IFormInputCheckProps {
  identifier: IFormInput['identifier']
  checkOptions: IFormInput['checkOptions']
  label: IFormInput['label']
  placeholder: IFormInput['placeholder']
  onChange: (inputEvent: React.ChangeEvent<HTMLInputElement>) => void
}

export const FormInputCheck: FC<IFormInputCheckProps> = ({
  identifier,
  label,
  checkOptions,
  placeholder,
  onChange,
}) => (
  <label htmlFor={identifier}>
    <Fieldset
      borderColor={colors.accent.pink}
      borderThickness="slim"
      legendText={label}
    >
      <p>{placeholder}</p>
      <CheckInput>
        {checkOptions &&
          checkOptions.map(({ optionIdentifier, optionText, optionIcon }) => (
            <div key={optionIdentifier}>
              <input
                type="radio"
                name={identifier}
                // eslint-disable-next-line react/forbid-dom-props
                id={optionIdentifier}
                value={optionIdentifier}
                onChange={onChange}
              />
              <label htmlFor={optionIdentifier}>
                <div>
                  {optionIcon}
                  {optionText}
                </div>
              </label>
            </div>
          ))}
      </CheckInput>
    </Fieldset>
  </label>
)
