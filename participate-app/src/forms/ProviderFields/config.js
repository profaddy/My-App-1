//-----------  Imports  -----------//

import FormField from 'fields/FormField'

//-----------  Form Fields  -----------//

export default [{
  type      : 'text',
  name      : 'provider_name',
  label     : 'Medical Provider Name',
  component : FormField,
  required  : true,
},{
  type      : 'text',
  name      : 'provider_practice_name',
  label     : 'Practice Name',
  component : FormField,
  required  : true,
},{
  type      : 'email',
  name      : 'provider_email',
  label     : 'Email',
  component : FormField,
  required  : true,
},{
  type      : 'tel',
  name      : 'provider_phone',
  label     : 'Phone',
  component : FormField,
  required  : true,
},{
  type        : 'textarea',
  name        : 'provider_address',
  label       : 'Address',
  component   : FormField,
  placeholder : '123 Main St,\nBuilding A\nNew York, NY, 12345',
  required    : true,
}]