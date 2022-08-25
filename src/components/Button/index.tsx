import type { ButtonHTMLAttributes, FC } from 'react'

import { StyledButton } from './styled'

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  form?: string
  isClear?: boolean
  hasGradientOnHover?: boolean
}

export const Button: FC<IProps> = (props) => {
  const { className, isClear, children, hasGradientOnHover } = props

  return (
    <StyledButton
      type="button"
      {...props}
      className={`${hasGradientOnHover && 'gradient-hover'} ${
        isClear && 'clear'
      } ${className}`}
    >
      {children}
    </StyledButton>
  )
}
