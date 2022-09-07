import type { FC, ReactElement, ReactNode } from 'react'

import { StyledFieldset } from './styled'

type FieldsetProps = {
  borderColor: string
  borderThickness?: 'slim' | 'normal' | 'thick'
  legendText?: string
  legendSvgComponent?: ReactElement
  children?: ReactNode
}

export const Fieldset: FC<FieldsetProps> = ({
  borderColor,
  borderThickness,
  children,
  legendText,
  legendSvgComponent,
}) => (
  <StyledFieldset
    borderColor={borderColor}
    borderThickness={borderThickness}
    hasSvgLegend={!!legendSvgComponent}
  >
    {legendText && <legend>{legendText}</legend>}
    {legendSvgComponent && <legend>{legendSvgComponent}</legend>}
    <section>{children}</section>
  </StyledFieldset>
)
