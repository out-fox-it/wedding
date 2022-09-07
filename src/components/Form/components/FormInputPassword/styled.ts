import styled from 'styled-components'
import { colors } from '~/theme/colors'

interface StyledFormInputPasswordContainerProps {
  isButtonActive: boolean
}

export const StyledFormInputPasswordContainer = styled.div<StyledFormInputPasswordContainerProps>`
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 93% 7%;
  justify-items: center;

  & > label {
    grid-row: 1;
    grid-column: 1 / 3;

    & > input {
      grid-row: 1;
      grid-column: 1 / 3;
    }
  }

  & > button {
    z-index: 1;
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
