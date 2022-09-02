import type { FC } from 'react'

import { Car } from '~/assets/FormIcons/Car'
import { Fieldset } from '~/components/Fieldset'
import { colors } from '~/theme/colors'

import { CheckInput } from './styled'

import type { IFormInput } from '../..'

interface IFormInputCheckProps {
  identifier: IFormInput['identifier']
  checkOptions: IFormInput['checkOptions']
  label: IFormInput['label']
  placeholder: IFormInput['placeholder']
  onChange: (
    inputEvent:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
      | React.ChangeEvent<HTMLSelectElement>,
  ) => void
}

export const FormInputCheck: FC<IFormInputCheckProps> = ({
  identifier,
  label,
  checkOptions,
  placeholder,
  onChange,
}) => {
  return (
    <label htmlFor={identifier}>
      <Fieldset
        borderColor={colors.accent.pink}
        borderThickness="slim"
        legendText={label}
      >
        <p>{placeholder}</p>
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
                  onChange={onChange}
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
  )
}
