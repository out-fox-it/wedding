import styled from 'styled-components'
import { colors } from '~/theme/colors'
import { typography } from '~/theme/typography'

interface FieldsetProps {
  borderColor: string
  borderThickness?: 'slim' | 'normal' | 'thick'
  hasSvgLegend: boolean
}

export const StyledFieldset = styled.fieldset<FieldsetProps>`
  background-color: ${colors.background};
  border-color: ${(props) => props.borderColor};
  border-style: solid;
  border-width: ${(props) => {
    switch (props.borderThickness) {
      case 'slim':
        return '1px'
      case 'normal':
        return '0.35rem'
      case 'thick':
        return '1rem'
      default:
        return '0.35rem'
    }
  }};

  & > legend {
    ${typography.label.medium}
    font-weight: bold;
    text-transform: uppercase;
    margin: 0 auto;
    padding: 0 2rem;
    text-align: center;
    ${(props) => props.hasSvgLegend && 'margin-top: -1.5rem;'}
  }

  & > section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2rem;

    & > * p {
      padding: 0;
    }
  }
`
