import { useTranslations } from 'next-intl'
import Link from 'next/link'
import type { FC } from 'react'

import { CopyToClipboard } from '~/components/CopyToClipboard'
import { Fieldset } from '~/components/Fieldset'
import { colors } from '~/theme/colors'
import { StyledLink } from '~/theme/typography'

import { LinksContainer, StyledAddressContainer } from '../styled'

export const AddressFieldset: FC = () => {
  // TODO: Our solution falls apart when we want to access multiple objects through the useTranslation hook. It looks overcomplicated and is very hard to read.

  // I would prefer solution that's used without itnl-next libray:
  // https://react.i18next.com/latest/usetranslation-hook

  // const { t } = useTranslation({ key1, key2 })
  // t('title', { ns: 'key2' })

  // However, I couldn't make this work over the documented error where
  // TypeScript will lose the literal value, and it will infer the key as string (!):
  // https://react.i18next.com/latest/typescript#type-errors

  // Or maybe we just set up nesting in our JSON files wrong?
  // Docs: https://www.i18next.com/translation-function/nesting

  const t = useTranslations('HeaderFieldset.AddressFieldset')
  const tAddressLinks = 'headerFieldsetLinks'

  // TODO: We should be able to get full address from children of CopyToClipboard component.
  // Or at least get it from useTranslation hook BUT HOW CAN WE SPREAD THE DAMN OBJECT?!
  // WHY DOESN'T {...tAddress} OR EVEN JSON.STRINGIFY() WORK :( :( :(

  const fullAddress = 'Address :/'

  return (
    <Fieldset borderColor={colors.accent.purple} legendText={t('legendText')}>
      {/* TODO: Only show address AFTER log in. :) */}
      <CopyToClipboard
        title="Both addresses are valid and lead to the same house! :) No. 794 is a bit easier to spot."
        copyRef={fullAddress}
      >
        <StyledAddressContainer>
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
          <StyledLink>{t(`${tAddressLinks}.map`)}</StyledLink>
        </Link>
        <Link href="/" passHref>
          <StyledLink>{t(`${tAddressLinks}.parking`)}</StyledLink>
        </Link>
        <Link href="/" passHref>
          <StyledLink>{t(`${tAddressLinks}.hotels`)}</StyledLink>
        </Link>
      </LinksContainer>
    </Fieldset>
  )
}
