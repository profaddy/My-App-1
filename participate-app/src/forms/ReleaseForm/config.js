//-----------  Imports  -----------//

import FormField      from 'fields/FormField'
import CheckboxField  from 'fields/CheckboxField'
import SignatureField from 'fields/SignatureField'

//-----------  Definitions  -----------//

export const form = 'release'

//-----------  Form Fields  -----------//

export const baseFields = [{
  type      : 'tel',
  name      : 'participant_phone',
  label     : 'Participant Phone Number',
  component : FormField,
  required  : true,
}]

export const participantFields = [{
  type      : 'checkbox',
  name      : 'agree',
  label     : 'I agree and understand and have had my questions answered.',
  component : CheckboxField,
  required  : true,
},{
  type      : 'text',
  name      : 'participant_name',
  label     : 'Participant Name',
  component : FormField,
  required  : true,
},{
  type      : 'signature',
  name      : 'participant_signature',
  label     : 'Participant Signature',
  component : SignatureField,
  required  : true,
}]

export const representativeFields = [{
  type      : 'checkbox',
  name      : 'agree',
  label     : 'I agree and understand and have had my questions answered.',
  component : CheckboxField,
  required  : true,
},{
  type      : 'text',
  name      : 'participant_name',
  label     : 'Participant Name',
  component : FormField,
  required  : true,
},{
  type      : 'text',
  name      : 'representative_name',
  label     : 'Name of Person Obtaining Consent',
  component : FormField,
  required  : true,
},{
  type      : 'signature',
  name      : 'representative_signature',
  label     : 'Signature of Person Obtaining Consent',
  component : SignatureField,
  required  : true,
}]
