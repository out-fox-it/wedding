import type { FC } from 'react'

import { AddressFieldset } from './components/AddressFieldset'
import { DateFieldset } from './components/DateFieldset'
import { LoginFieldset } from './components/LoginFieldset'
import { FieldsetsContainer } from './styled'

export const HeaderFieldset: FC = () => (
  <FieldsetsContainer>
    <AddressFieldset />
    <DateFieldset />
    <LoginFieldset />
  </FieldsetsContainer>
)
