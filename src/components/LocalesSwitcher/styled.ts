import styled from 'styled-components'
import { colors } from '~/theme/colors'

interface LiProps {
  isCurrentLanguage: boolean
}

export const LocalesList = styled.ul`
  display: flex;
  gap: 1rem;
  margin: 0;
  justify-content: end;
`

export const StyledLi = styled.li<LiProps>`
  border: 0.15rem solid
    ${(props) => (props.isCurrentLanguage ? colors.text.base : 'transparent')};
  border-radius: 15%;
  padding: 0.2rem 0.6rem;
  ${(props) => !props.isCurrentLanguage && 'filter: grayscale(70%);'};

  & > a {
    text-decoration: none;
    font-size: 2.5rem;
  }
`
