import type { FC } from 'react'
import { useState } from 'react'

import { Button } from '~/components/Button'

import { StyledFormInputPasswordContainer } from './styled'

import { Eye } from '../../../../assets/FormIcons/Eye'

interface IFormInputPasswordProps {
  identifier: string
  placeholder?: string
  value: string | number
  onChange: (inputEvent: React.ChangeEvent<HTMLInputElement>) => void
}

export const FormInputPassword: FC<IFormInputPasswordProps> = ({
  identifier,
  placeholder,
  value,
  onChange,
}) => {
  const [isPasswordHidden, setIsPasswordHidden] = useState(true)

  const togglePassword = (): void => setIsPasswordHidden(!isPasswordHidden)

  return (
    <StyledFormInputPasswordContainer isButtonActive={isPasswordHidden}>
      <label htmlFor={identifier}>
        <input
          autoComplete="off"
          name={identifier}
          type={isPasswordHidden ? 'password' : 'text'}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
        />
      </label>
      <Button isClear onClick={togglePassword}>
        <Eye />
      </Button>
    </StyledFormInputPasswordContainer>
  )
}
