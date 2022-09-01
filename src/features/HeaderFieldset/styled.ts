import styled from 'styled-components'
import { mq } from '~/theme/mq'
import { typography } from '~/theme/typography'

export const FieldsetsContainer = styled.section`
  width: 90%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  flex: 1;
  min-width: 0;
  justify-content: space-evenly;
  padding-top: 3rem;
  gap: 5rem;

  ${mq.smallOnly} {
    flex-direction: column;
  }

  & > fieldset {
    flex: 1 1 0;
    display: flex;
    flex-direction: column;
    min-width: 0;
    justify-content: center;
    align-items: center;

    & > * {
      gap: 1.5rem 0;
      text-align: center;
    }

    & * article {
      ${typography.paragraph}
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }
`
