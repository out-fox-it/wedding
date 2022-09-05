import styled from 'styled-components'
import { colors } from '~/theme/colors'
import { mq } from '~/theme/mq'
import { typography } from '~/theme/typography'

interface LiProps {
  isCurrentLanguage: boolean
}

export const LocalesList = styled.ul`
  display: flex;
  gap: 1rem;
  margin: 0;
  justify-content: end;

  ${mq.smallOnly} {
    justify-content: center;
    padding-bottom: 1.5rem;
  }
`

export const StyledLi = styled.li<LiProps>`
  border: 0.15rem solid
    ${(props) => (props.isCurrentLanguage ? colors.text.base : 'transparent')};
  border-radius: 15%;
  padding: 0.2rem 0.6rem;
  ${(props) => !props.isCurrentLanguage && 'filter: grayscale(70%);'};

  & > a {
    ${typography.label.medium}
    text-decoration: none;
  }
`
