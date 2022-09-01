import type { FC } from 'react'

import { Form } from '~/components/Form'

export const WeddingForm: FC = () => {
  // HANDLE ADDING ITEMS
  const handleWeddingForm = (weddingFormResults: {
    cost: string
    parking: string
  }): void => {
    // TODO: BACKEND <2
    // eslint-disable-next-line no-console
    console.log(weddingFormResults)
  }

  return (
    <Form
      formIdentifier="weddingForm"
      formTitle="Wedding Form"
      actionOnSubmit={(formData) => {
        const weddingFormResults = {
          cost: formData.cost,
          parking: formData.parking,
        }

        void handleWeddingForm(weddingFormResults)
      }}
      formInputs={[
        {
          typeOfInput: 'text',
          type: 'cost',
          identifier: 'cost',
          label: '',
          placeholder: 'ENTER NUMBER OR LEAVE EMPTY.',
          required: true,
        },
        {
          typeOfInput: 'check',
          type: 'parking',
          identifier: 'parking',
          label: '',
          placeholder: "I WILL/WON'T NEED A PLACE TO PARK",
          checkOptions: [
            {
              optionTitle: 'yes',
            },
            {
              optionTitle: 'no',
            },
          ],
          required: true,
        },
      ]}
      submitButtonText="Wedding!"
    />
  )
}
