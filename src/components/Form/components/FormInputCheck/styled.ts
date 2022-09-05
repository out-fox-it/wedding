import styled from 'styled-components'
import { colors } from '~/theme/colors'
import { mq } from '~/theme/mq'

export const CheckInput = styled.div`
  display: flex;
  gap: 2rem;
  flex-direction: row;
  align-items: top;

  ${mq.smallOnly} {
    flex-direction: column;
  }

  & > div {
    flex: 1 1 0;
  }

  & > div > input {
    position: absolute;
    width: 1px;
    height: 1px;
    opacity: 0;
    overflow: hidden;
  }

  & > div > label {
    display: flex;
    cursor: pointer;
    opacity: 0.2;

    &:hover {
      opacity: 1;
    }

    & > div {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
    }
  }

  & > div > input[type='radio']:checked + label {
    color: ${colors.accent.yellow};
    opacity: 1;
  }
`
