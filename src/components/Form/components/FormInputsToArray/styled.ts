import styled from 'styled-components'
import { colors } from '~/theme/colors'
import { mq } from '~/theme/mq'
import { typography } from '~/theme/typography'

export const StyledFormInputsToArrayLabel = styled.label`
  &:focus-within::before,
  &:focus-within::after {
    content: '';
  }

  & * div {
    width: 100%;
    position: relative;

    &:last-child {
      margin-bottom: 1rem;
    }

    & > span {
      ${typography.label.small}
      position: absolute;
      top: 0;
      bottom: 0;
      display: flex;
      align-items: center;
      opacity: 0.2;

      ${mq.smallOnly} {
        display: none;
      }
    }

    & > input {
      ${mq.smallOnly} {
        padding-left: 1rem;
      }

      ${mq.medium} {
        padding-left: 3rem;
      }

      ${mq.large} {
        padding-left: 4rem;
      }

      width: 100%;
      border: none;
      border-bottom: 0.4rem double rgba(255, 255, 255, 0.2);
    }
  }

  & * button {
    padding-top: 3rem;
    font-weight: bold;
    color: ${colors.accent.purple};
  }
`
