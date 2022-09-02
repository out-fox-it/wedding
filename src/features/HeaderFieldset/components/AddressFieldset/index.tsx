import { useTranslations } from 'next-intl'
import Image from 'next/image'
import Link from 'next/link'
import type { FC } from 'react'
import { useRef } from 'react'

import { CopyToClipboard } from '~/components/CopyToClipboard'
import { Fieldset } from '~/components/Fieldset'
import { useUser } from '~/contexts/User'
import { colors } from '~/theme/colors'
import { StyledLink } from '~/theme/layout'

import { LinksContainer, StyledAddressContainer } from './styled'

import keepYourSecretsMeme from '../../../../assets/Memes/keepYourSecrets.gif'

export const AddressFieldset: FC = () => {
  const t = useTranslations('HeaderFieldset.AddressFieldset')
  const fullAddressRef = useRef<HTMLElement>(null)

  const { user } = useUser()

  return (
    <Fieldset borderColor={colors.accent.purple} legendText={t('legendText')}>
      {user !== null ? (
        <>
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
        </>
      ) : (
        <Image
          alt="Alright then... Keep your secrets!"
          src={keepYourSecretsMeme}
        />
      )}
    </Fieldset>
  )
}
