import styled from 'styled-components'
import { colors } from '~/theme/colors'
import { mq } from '~/theme/mq'
import { typography } from '~/theme/typography'

export const StyledForm = styled.form`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  width: 100%;
  gap: 1.5rem;
  margin: 0 auto;
  text-transform: uppercase;

  & * p {
    font-style: italic;
    padding-bottom: 2rem;
  }

  & > div {
    width: 100%;
  }

  ${mq.smallOnly} {
    width: 100%;
  }

  ${mq.medium} {
    width: 80%;
  }

  ${mq.large} {
    width: 60%;
  }

  & * label {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    position: relative;
    flex-direction: column;

    ${mq.medium} {
      @keyframes rotating-stars {
        to {
          transform: rotate(360deg);
        }
      }

      &:focus-within::before,
      &:focus-within::after {
        content: '*';
        position: absolute;
        ${typography.label.medium}
        line-height: 0;
        padding-top: 1rem;
        animation: rotating-stars 1s ease-in-out infinite alternate;
      }

      &:focus-within::before {
        right: 2rem;
      }

      &:focus-within::after {
        left: 2rem;
      }
    }
  }

  & fieldset > legend {
    color: ${colors.accent.purple};
  }

  & input,
  & textarea {
    ${mq.smallOnly} {
      width: 90%;
    }

    ${mq.medium} {
      width: 85%;
    }

    min-height: 3.5rem;
    padding: 1.5rem 2rem;
    background-color: transparent;
    border: 1px solid ${colors.accent.pink};
    color: ${colors.text.base};
    outline: none;

    /* Hack to override yellow :autofill background!
       Docs: https://developer.mozilla.org/en-US/docs/Web/CSS/:autofill
       Solution: https://stackoverflow.com/a/19426087 */
    &:-webkit-autofill {
      box-shadow: 0 0 0 1000px ${colors.background} inset;
    }

    &:focus {
      border-color: ${colors.text.base};
    }

    &::placeholder {
      color: ${colors.accent.yellow};
      opacity: 1;
    }
  }

  & textarea {
    resize: none;
    min-height: 10rem;
    padding: 2rem;
  }

  & > button,
  & * fieldset {
    ${mq.smallOnly} {
      width: 90%;
    }

    ${mq.medium} {
      width: 85%;
    }

    text-transform: uppercase;
  }
`
