//-----------  Imports  -----------//

import get       from 'lodash/get'

import { share } from './config'

//-----------  Validation  -----------//

const validate = ({ can_contact, agree_to_share, provider_name, provider_email, participant_signature, representative_signature, ...values }, { willShare, canConsent }) => {
  let errors = {}

  if (!get(values, share))
    errors[share] = 'Required'

  if (!can_contact)
    errors.can_contact = 'Required'

  if (!agree_to_share)
    errors.agree_to_share = 'Required'

  if ('yes' === get(values, share)){

    if (!provider_name)
      errors.provider_name = 'Required'

    if (!provider_email)
      errors.provider_email = 'Required'
  }

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