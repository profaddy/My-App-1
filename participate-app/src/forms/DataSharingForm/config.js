//-----------  Imports  -----------//

import YesNoField     from 'fields/YesNoField'
import SignatureField from 'fields/SignatureField'

//-----------  Definitions  -----------//

export const form  = 'data_sharing'
export const share = 'share_results'

//-----------  Form Fields  -----------//

export const baseFields = [{
  type      : 'boolean',
  name      : 'agree_to_share',
  label     : 'I agree to share the Clinical and Cognitive Data collected as part of this study.',
  component : YesNoField,
  required  : true,
},{
  type      : 'boolean',
  name      : 'can_contact',
  label     : 'We would like your permission to contact you about other studies that you may be eligible for in the future.',
  component : YesNoField,
  required  : true,
},{
  type      : 'boolean',
  name      : share,
  label     : 'If you wish, the results of the testing will be given to you and/or your physicians or other care-providers.',
  component : YesNoField,
  required  : true,
}]

export const participantFields = [{
  name      : 'participant_signature',
  label     : 'Participant Signature',
  component : SignatureField,
  required  : true,
}]

export const representativeFields = [{
  name      : 'representative_signature',
  label     : 'Signature of Person Obtaining Consent',
  component : SignatureField,
  required  : true,
}]