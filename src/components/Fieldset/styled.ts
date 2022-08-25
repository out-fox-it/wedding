import styled from 'styled-components'
import { colors } from '~/theme/colors'
import { typography } from '~/theme/typography'

interface FieldsetProps {
  borderColor: string
  hasSvgLegend: boolean
}

export const StyledFieldset = styled.fieldset<FieldsetProps>`
  background-color: ${colors.background};
  border: 0.35rem solid ${(props) => props.borderColor};

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
