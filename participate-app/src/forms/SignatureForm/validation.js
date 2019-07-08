//-----------  Imports  -----------//

import get        from 'lodash/get'

import { over18 } from './config'
import { OTHER }      from 'utilities/constants'

//-----------  Validation  -----------//

const validate = ({ agreeBill,agree,Hipaa_participant_name,participant_name, representative_name, representative_signature, participant_signature,Hipaa_participant_signature, representative_relationship, representative_relationship_other, ...values }, { canConsent }) => {
  let errors = {}

  if (!get(values, over18))
    errors[over18] = 'Required'  

  if (!agree)
    errors.agree = 'Required'
    
    if (!agreeBill)
    errors.agreeBill = 'Required'

  if (!participant_name)
    errors.participant_name = 'Required'

  if (!Hipaa_participant_name)
  errors.Hipaa_participant_name = 'Required'


  if (canConsent){

    if (!participant_signature)
      errors.participant_signature = 'Required'
    
    if (!Hipaa_participant_signature)
    errors.Hipaa_participant_signature = 'Required'

  } else {

    if (!representative_name)
      errors.representative_name = 'Required'

    if (!representative_relationship)
      errors.representative_relationship = 'Required'

    if (!representative_signature)
      errors.representative_signature = 'Required'

    if (OTHER === representative_relationship && !representative_relationship_other)
      errors.representative_relationship_other = 'Required'
  }

  return errors
}

//-----------  Exports  -----------//

export default validate