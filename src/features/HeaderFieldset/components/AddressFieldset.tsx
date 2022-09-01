import { useTranslations } from 'next-intl'
import Link from 'next/link'
import type { FC } from 'react'
import { useRef } from 'react'

import { CopyToClipboard } from '~/components/CopyToClipboard'
import { Fieldset } from '~/components/Fieldset'
import { colors } from '~/theme/colors'
import { StyledLink } from '~/theme/layout'

import { LinksContainer, StyledAddressContainer } from '../styled'

export const AddressFieldset: FC = () => {
  const t = useTranslations('HeaderFieldset.AddressFieldset')
  const fullAddressRef = useRef<HTMLElement>(null)

  return (
    <Fieldset borderColor={colors.accent.purple} legendText={t('legendText')}>
      {/* TODO: Only show address AFTER log in. :) */}
      <CopyToClipboard
        title="Both addresses are valid and lead to the same house! :) No. 794 is a bit easier to spot."
        copyRef={fullAddressRef}
      >
        <StyledAddressContainer ref={fullAddressRef}>
          <span
            className="address-animation"
            data-address-1={`${t('street')} ${t('streetNumber.0')}`}
            data-address-2={`${t('street')} ${t('streetNumber.1')}`}
          />
          <span>{t('town')}</span>
          <span>{t('postalCode')}</span>
        </StyledAddressContainer>
      </CopyToClipboard>

      {/* TODO: Add links content! */}
      <LinksContainer>
        <Link href="/" passHref>
          <StyledLink>{t('headerFieldsetLinks.map')}</StyledLink>
        </Link>
        <Link href="/" passHref>
          <StyledLink>{t('headerFieldsetLinks.parking')}</StyledLink>
        </Link>
        <Link href="/" passHref>
          <StyledLink>{t('headerFieldsetLinks.hotels')}</StyledLink>
        </Link>
      </LinksContainer>
    </Fieldset>
  )
}
