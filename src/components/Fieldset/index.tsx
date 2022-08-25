import type { FC, ReactElement, ReactNode } from 'react'

import { StyledFieldset } from './styled'

type FieldsetProps = {
  borderColor: string
  legendText?: string
  legendSvgComponent?: ReactElement
  children?: ReactNode
}

export const Fieldset: FC<FieldsetProps> = ({
  borderColor,
  children,
  legendText,
  legendSvgComponent,
}) => {
  return (
    // TODO: hasSVGLegend should have a better boolean logic!
    <StyledFieldset
      borderColor={borderColor}
      hasSvgLegend={legendSvgComponent ? true : false}
    >
      {legendText && <legend>{legendText}</legend>}
      {legendSvgComponent && <legend>{legendSvgComponent}</legend>}
      <section>{children}</section>
    </StyledFieldset>
  )
}
