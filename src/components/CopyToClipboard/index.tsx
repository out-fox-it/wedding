import type { ButtonHTMLAttributes, FC } from 'react'

import { Button } from '../Button'

interface ICopyToClipboardProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  copyRef?: string
}

export const CopyToClipboard: FC<ICopyToClipboardProps> = (props) => {
  const { copyRef, title, children } = props

  const copyToClipBoard = () =>
    copyRef && void navigator.clipboard.writeText(copyRef)

  return (
    <Button isClear title={title} onClick={copyToClipBoard}>
      {children}
    </Button>
  )
}
