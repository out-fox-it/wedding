import type { FC } from 'react'
import { useState } from 'react'

import { Button } from '~/components/Button'

import { StyledFormInputPasswordLabel } from './styled'

import { Eye } from '../../../../assets/FormIcons/Eye'

interface IFormInputPasswordProps {
  identifier: string
  placeholder?: string
  value: string | number
  onChange: (
    inputEvent:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
      | React.ChangeEvent<HTMLSelectElement>,
  ) => void
}

export const FormInputPassword: FC<IFormInputPasswordProps> = ({
  identifier,
  placeholder,
  value,
  onChange,
}) => {
  const [isPasswordHidden, setIsPasswordHidden] = useState<boolean>(true)

  const togglePassword: () => void = () =>
    setIsPasswordHidden(!isPasswordHidden)

  return (
    <StyledFormInputPasswordLabel
      isButtonActive={isPasswordHidden}
      htmlFor={identifier}
    >
      <input
        autoComplete="off"
        name={identifier}
        type={isPasswordHidden ? 'password' : 'text'}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
      <Button isClear onClick={togglePassword}>
        <Eye />
      </Button>
    </StyledFormInputPasswordLabel>
  )
}
