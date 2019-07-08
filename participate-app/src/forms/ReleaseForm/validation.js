//-----------  Imports  -----------//

import get from 'lodash/get'

//-----------  Validation  -----------//

const validate = ({ agree, participant_phone, participant_name, representative_signature, participant_signature,  ...values }, { canConsent }) => {
  let errors = {}

  if (!agree)
    errors.agree = 'Required'

  if (!participant_phone)
    errors.participant_phone = 'Required'

  if (!participant_name)
    errors.participant_name = 'Required'

  if (canConsent){

    if (!participant_signature)
      errors.participant_signature = 'Required'

  } else {

    if (!representative_signature)
      errors.representative_signature = 'Required'
  }

  return errors
}

//-----------  Exports  -----------//

export default validate