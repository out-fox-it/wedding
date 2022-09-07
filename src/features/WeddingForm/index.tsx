import { useTranslations } from 'next-intl'
import type { FC } from 'react'

import { Car } from '~/assets/FormIcons/Car'
import { Caravan } from '~/assets/FormIcons/Caravan'
import { PersonWalking } from '~/assets/FormIcons/PersonWalking'
import { Form } from '~/components/Form'

interface IWeddingFormResults {
  cost: string
  parking: string
  songs?: Array<{
    songTitle: string
    inputPlaceholder?: string
  }>
  notes: string
}

const initialNumberOfDisplayedSongs = 3

export const WeddingForm: FC = () => {
  const t = useTranslations('Forms.WeddingForm')

  const handleWeddingForm = (weddingFormResults: IWeddingFormResults): void => {
    // TODO: BACKEND <2
    // eslint-disable-next-line no-console
    console.log(weddingFormResults)
  }

  const songsArray = new Array(10).fill(null).map((_, index) => ({
    inputTitle: `song${index}`,
    inputPlaceholder: t('formInputs.songs.inputPlaceholder'),
  }))

  return (
    <Form
      formIdentifier="weddingForm"
      formTitle={t('formTitle')}
      actionOnSubmit={(formData) => {
        const weddingFormResults: IWeddingFormResults = {
          cost: formData.cost,
          parking: formData.parking,
          songs: songsArray.map(({ inputTitle }) => ({
            songTitle: formData[inputTitle],
          })),
          notes: formData.notes,
        }

        void handleWeddingForm(weddingFormResults)
      }}
      formInputs={[
        {
          typeOfInput: 'check',
          type: 'parking',
          identifier: 'parking',
          label: t('formInputs.parking.label'),
          placeholder: t('formInputs.parking.placeholder'),
          checkOptions: [
            {
              optionIdentifier: 'no',
              optionText: t.rich('formInputs.parking.checkOptions.noCar'),
              optionIcon: <PersonWalking />,
            },
            {
              optionIdentifier: 'car',
              optionText: t.rich('formInputs.parking.checkOptions.car'),
              optionIcon: <Car />,
            },
            {
              optionIdentifier: 'caravan',
              optionText: t.rich('formInputs.parking.checkOptions.caravan'),
              optionIcon: <Caravan />,
            },
          ],
          required: true,
        },
        {
          typeOfInput: 'inputsToArray',
          identifier: 'songs',
          label: t('formInputs.songs.label'),
          placeholderRich: t.rich('formInputs.songs.placeholder'),
          addMoreOptionsButtonText: t('formInputs.songs.addMoreSongsButton'),
          inputOptions: songsArray,
          initialNumberOfDisplayedOptions: initialNumberOfDisplayedSongs,
        },
        {
          typeOfInput: 'textarea',
          identifier: 'notes',
          label: t('formInputs.notes.label'),
          placeholder: t('formInputs.notes.placeholder'),
        },
      ]}
      submitButtonText={t('formButtonText')}
    />
  )
}
