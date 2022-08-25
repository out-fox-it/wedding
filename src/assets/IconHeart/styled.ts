import styled from 'styled-components'
import { colors } from '~/theme/colors'

export const StyledIconHeart = styled.svg`
  & > g {
    color: ${colors.text.inverted};

    & > path.heart {
      fill: ${colors.accent.pink};
    }

    & > path.arrow--color {
      fill: ${colors.accent.yellow};
    }
  }

  @media (prefers-reduced-motion: no-preference) {
    @keyframes animation-spin {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }

    animation: animation-spin infinite 5s linear;
  }
`
