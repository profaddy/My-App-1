//-----------  Imports  -----------//

import FormField      from 'fields/FormField';
import YesNoField     from 'fields/YesNoField';
import RadioFields    from 'fields/RadioFields';
import CheckboxField  from 'fields/CheckboxField';
import SignatureField from 'fields/SignatureField';
import ImageField     from 'fields/ImageField';
import IdSidebar      from './IdSidebar'
import SelfieSidebar  from './SelfieSidebar'

import { OTHER }      from 'utilities/constants'

//-----------  Definitions  -----------//

export const form   = 'signature'
export const over18 = 'over_18'

//-----------  Form Fields  -----------//

export const ageFields = [{
  name      : over18,
  label     : 'Are you 18 or over?',
  component : YesNoField,
  required  : true,
}]

export const baseFields = [{
  type      : 'checkbox',
  name      : 'agree',
  label     : 'I agree and understand and have had my questions answered.',
  component : CheckboxField,
  required  : true,
}]

export const agreeBill =[{
  type      : 'checkbox',
  name      : 'agreeBill',
  label     : 'I agree and understand and have had my questions answered.',
  component : CheckboxField,
  required  : true,
}]

export const signatureFields = [{
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

  export const billFields = [{
    type      : 'text',
    name      : 'Bill_participant_name',
    label     : 'Participant Name',
    component : FormField,
    required  : true,
  },{
    type      : 'signature',
    name      : 'Bill_participant_signature',
    label     : 'Participant Signature',
    component : SignatureField,
    required  : true,
  }]

  export const hipaaFields = [{
    type      : 'text',
    name      : 'Hipaa_participant_name',
    label     : 'Participant Name',
    component : FormField,
    required  : true,
  },{
    type      : 'signature',
    name      : 'Hipaa_participant_signature',
    label     : 'Participant Signature',
    component : SignatureField,
    required  : true,
  }]

  export const hipaaRepesentativeFields = [{
    type      : 'text',
    name      : 'Hipaa_representative_name',
    label     : 'Participant Name',
    component : FormField,
    required  : true,
  },{
    type      : 'signature',
    name      : 'Hipaa_representative_signature',
    label     : 'Participant Signature',
    component : SignatureField,
    required  : true,
  }]

export const takeSelfie = [{
  type      : 'file',
  name      : 'participant_selfie',
  label     : 'Take a selfie',
  props     : { sidebar: SelfieSidebar },
  component : ImageField,
  required  : true,
}]

export const takeIdPhoto = [{
  type      : 'file',
  name      : 'participant_govid',
  label     : 'Take a photo ID Picture',
  props     : { sidebar: IdSidebar },
  component : ImageField,
  required  : true,
}]

export const participantFields = [{
  type      : 'file',
  name      : 'participant_selfie',
  label     : 'Take a selfie',
  component : ImageField,
  required  : true,
},{
  type      : 'file',
  name      : 'participant_govid',
  label     : 'Take a photo ID Picture',
  component : ImageField,
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
  type      : 'text',
  name      : 'representative_relationship',
  label     : 'Relationship of Person Obtaining Consent to Participant',
  component : RadioFields,
  required  : true,
  options   : [
    { value: 'health_care_agent', label: 'Health Care Agent' },
    { value: 'legal_guardian', label: 'Legal Guardian' },
    { value: 'spouse', label: 'Spouse' },
    { value: 'adult_child', label: 'Adult Child' },
    { value: 'parent', label: 'Parent' },
    { value: 'adult_sibling', label: 'Adult Sibling' },
    { value: OTHER, label: 'Other', input: true },
  ]
},{
  type      : 'text',
  name      : 'representative_reason',
  label     : 'Why are you acting as the Participant\'s health care decision-maker?',
  component : FormField,
},{
  type      : 'signature',
  name      : 'representative_signature',
  label     : 'Signature of Person Obtaining Consent',
  component : SignatureField,
  required  : true,
}]