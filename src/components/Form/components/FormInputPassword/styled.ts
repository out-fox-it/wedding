import styled from 'styled-components'
import { colors } from '~/theme/colors'

interface StyledFormInputPasswordLabelProps {
  isButtonActive: boolean
}

export const StyledFormInputPasswordLabel = styled.label<StyledFormInputPasswordLabelProps>`
  display: grid !important;
  grid-template-rows: 1fr;
  grid-template-columns: 93% 7%;
  justify-items: center;

  & > input {
    grid-row: 1;
    grid-column: 1 / 3;
  }

  & > button {
    width: initial;
    grid-row: 1;
    grid-column: 1;
    justify-self: right;
    align-self: center;
    opacity: ${(props) => (props.isButtonActive ? '0.2' : '1')};
    color: ${(props) =>
      props.isButtonActive ? colors.text.base : colors.accent.yellow};

    &:hover {
      opacity: 1;
    }
  }
`
