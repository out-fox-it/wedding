import { createGlobalStyle } from 'styled-components'
import 'sanitize.css'

import { colors } from './colors'
import { typography } from './typography'

export const GlobalStyle = createGlobalStyle`
  html {
    font-size: 62.5%;
  }

  /* Allow 'font-smooth' */
  /* stylelint-disable property-no-unknown */
  body {
    ${typography.paragraph}
    font-family: 'Oxygen', sans-serif;
    background: ${colors.background};
    color: ${colors.text.base};
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-smooth: always;
  }

  #__next {
    min-height: 100vh;
    height: inherit;
    display: flex;
    flex-direction: column;
    padding: 2rem;

    & > main {
      flex-grow: 1;
      display: flex;
      flex-direction: column;
      gap: 3rem;
      padding: 3rem 0;
    }
  }

  h1, h2, h3, h4 {
    text-align: center;
  }
`
