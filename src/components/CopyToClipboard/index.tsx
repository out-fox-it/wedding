import type { ButtonHTMLAttributes, FC, RefObject } from 'react'

import { Button } from '../Button'

interface ICopyToClipboardProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  copyRef: RefObject<HTMLElement>
}

const isNodeText = (node: Node): node is Text =>
  node.nodeType === Node.TEXT_NODE

const isNodeHTMLElement = (node: Node): node is HTMLElement =>
  node.nodeType === Node.ELEMENT_NODE && node instanceof HTMLElement

const getPseudoElementContent = (
  element: HTMLElement,
  pseudoElement: '::before' | '::after',
): string | null => {
  const pseudoElementContent = getComputedStyle(element, pseudoElement).content

  return pseudoElementContent !== 'none'
    ? pseudoElementContent.replaceAll('"', '')
    : null
}

const getElementCompleteText = (element: HTMLElement): string =>
  Array.from(element.childNodes)
    .reduce<string[]>((previousTexts, childNode) => {
      if (isNodeText(childNode)) {
        const text = childNode.wholeText
        return [...previousTexts, ...(text !== '' ? [text] : [])]
      }

      if (isNodeHTMLElement(childNode)) {
        const before = getPseudoElementContent(childNode, '::before')
        const text = getElementCompleteText(childNode)
        const after = getPseudoElementContent(childNode, '::after')

        return [
          ...previousTexts,
          ...(before ? [before] : []),
          ...(text !== '' ? [text] : []),
          ...(after ? [after] : []),
        ]
      }

      return previousTexts
    }, [])
    .join(' ')

export const CopyToClipboard: FC<ICopyToClipboardProps> = (props) => {
  const { copyRef, title, children } = props

  const copyToClipBoard = (): void => {
    const element = copyRef.current
    if (!element) return

    void navigator.clipboard.writeText(getElementCompleteText(element))
  }

  return (
    <Button isClear title={title} onClick={copyToClipBoard}>
      {children}
    </Button>
  )
}
