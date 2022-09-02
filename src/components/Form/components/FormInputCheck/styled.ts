import styled from 'styled-components'
import { colors } from '~/theme/colors'

export const CheckInput = styled.div`
  display: flex;
  gap: 2rem;

  & > div > input {
    position: absolute;
    width: 1px;
    height: 1px;
    opacity: 0;
    overflow: hidden;
  }

  & > div > label {
    display: flex;
    flex-direction: column;
    cursor: pointer;
    opacity: 0.2;

    &:hover {
      opacity: 1;
    }
  }

  & > div > input[type='radio']:checked + label {
    color: ${colors.accent.yellow};
    opacity: 1;
  }
`
