import styled, { css } from "styled-components"
import { colors } from "./colors"
import { typography } from "./typography"

export const StyledLink = styled.a`
  text-transform: uppercase;
  color: ${colors.accent.purple};
  text-decoration: none;
  font-weight: bold;
  text-align: center;
  padding: 0 1rem;

  &:hover {
    color: ${colors.accent.pink};
  }
`

interface StyledLabelProps {
  labelFontSize?: 'small' | 'medium' | 'large'
  labelTextColor?: string
  labelIsBold?: boolean
}

export const StyledLabel = styled.span<StyledLabelProps>`
  padding: 0.5rem 0;
  font-weight: ${(props) => (props.labelIsBold ? 'bold' : 'normal')};
  color: ${(props) =>
    props.labelTextColor ? props.labelTextColor : colors.text.base};
  ${(props) => {
    switch (props.labelFontSize) {
      case 'small':
        return typography.label.small
      case 'medium':
        return typography.label.medium
      case 'large':
        return typography.label.large
      default:
        return typography.label.medium
    }
  }}
`

interface HtmlTagLookalikeProps {
  isHtmlTagOpen: boolean
}

export const htmlTagLookalike = css<HtmlTagLookalikeProps>`
  display: block;
  margin: 0;
  padding: 1rem 0;
  text-align: center;
  font-weight: bold;

  &::before {
    content: ${(props) => (props.isHtmlTagOpen ? `'<'` : `'</'`)};
    padding-right: 1rem;
  }
  &::after {
    content: '>';
    padding-left: 1rem;
  }
`