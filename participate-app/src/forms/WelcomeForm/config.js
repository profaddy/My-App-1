//-----------  Imports  -----------//

import validator  from 'validator'

import FormField  from 'fields/FormField'

//-----------  Definitions  -----------//

export const form = 'welcome'

//-----------  Form Fields  -----------//

export default [{
  type        : 'email',
  name        : 'email',
  placeholder : 'email@address.com',
  validate    : [[validator.isEmail, 'Must be a valid email']],
  component   : FormField,
  required    : true,
  autoFocus   : true,
}]
