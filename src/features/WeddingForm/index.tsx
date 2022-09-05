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
}

export const WeddingForm: FC = () => {
  const t = useTranslations('Form.WeddingForm')

  const handleWeddingForm = (weddingFormResults: IWeddingFormResults): void => {
    // TODO: BACKEND <2
    // eslint-disable-next-line no-console
    console.log(weddingFormResults)
  }

  const songsArray = new Array(10).fill(null).map((_, index) => {
    return {
      inputTitle: `song${index}`,
      inputPlaceholder: t('formInputs.songs.inputPlaceholder'),
    }
  })

  return (
    <Form
      formIdentifier="weddingForm"
      formTitle={t('formTitle')}
      actionOnSubmit={(formData) => {
        const weddingFormResults: IWeddingFormResults = {
          cost: formData.cost,
          parking: formData.parking,
          songs: [
            { songTitle: formData.song0 },
            { songTitle: formData.song1 },
            { songTitle: formData.song2 },
            { songTitle: formData.song3 },
            { songTitle: formData.song4 },
            { songTitle: formData.song5 },
            { songTitle: formData.song6 },
            { songTitle: formData.song7 },
            { songTitle: formData.song8 },
            { songTitle: formData.song9 },
          ],
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
        },
      ]}
      submitButtonText={t('formButtonText')}
    />
  )
}
