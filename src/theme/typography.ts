import { css } from 'styled-components'

const allHeadingsStyle = css`
  font-weight: bold;
`

export const typography = {
  heading: {
    h1: css`
      ${allHeadingsStyle}
      font-size: 5rem;
    `,
    h2: css`
      ${allHeadingsStyle}
      font-size: 3.2rem;
    `,
    h3: css`
      ${allHeadingsStyle}
      font-size: 2.4rem;
    `,
    h4: css`
      ${allHeadingsStyle}
      font-size: 1.8rem;
    `,
  },
  label: {
    small: css`
      font-size: 1.8rem;
    `,
    medium: css`
      font-size: 2.4rem;
    `,
    large: css`
      font-size: 4.5rem;
    `,
  },
  paragraph: css`
    font-size: 1.6rem;
  `,
}
