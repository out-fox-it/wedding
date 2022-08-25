import styled from 'styled-components'
import { colors } from '~/theme/colors'
import { mq } from '~/theme/mq'
import { typography } from '~/theme/typography'

export const StyledButton = styled.button`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: baseline;
  color: ${colors.text.base};
  background-color: ${colors.accent.pink};
  border: none;
  cursor: pointer;
  padding: 1rem;
  transition: letter-spacing 1s ease-in-out;

  &::before,
  &::after {
    ${typography.label.small}
    content: '∗';
    line-height: 0;
    padding: 0 0.5rem;
  }

  &:hover,
  &:focus {
    background-color: ${colors.accent.purple};

    ${mq.medium} {
      letter-spacing: 0.5rem;
    }
  }

  &.gradient-hover {
    &:hover {
      background-image: repeating-linear-gradient(
        -45deg,
        transparent,
        transparent 2rem,
        ${colors.accent.pink} 2rem,
        ${colors.accent.pink} 4rem
      );
    }
  }

  &.clear {
    background-color: transparent;
    transition: none;
    letter-spacing: normal;

    &::before,
    &::after {
      content: '';
    }

    &:hover {
      background-color: transparent;
    }
  }
`
