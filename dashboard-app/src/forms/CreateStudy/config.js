//-----------  Imports  -----------//

import validator from 'validator';
import { defaultMemoize } from 'reselect';

//-----------  Form Fields  -----------//
const required = value =>
  value || typeof value === 'number' ? undefined : 'Required';

const maxLength = value =>
  validator.isLength(value, { min: 1, max: 255 })
    ? undefined
    : 'Max 255 characters are allowed';

// const maxLength = value => (value.length < 255 ? undefined : 'Max length 255');

export default [
  {
    type: 'text',
    name: 'name',
    label: 'Study Name',
    required: true,
    validate: [required, maxLength],
  },
  {
    type: 'text',
    name: 'irb_no',
    label: 'Approved IRB Number',
    required: true,
    validate: [required, maxLength],
  },
  {
    type: 'text',
    name: 'sponsor',
    label: 'Sponsor',
    required: false,
    validate: [],
  },
  {
    type: 'textarea',
    name: 'description',
    label: 'Study Description',
    required: true,
    validate: [required, maxLength],
  },
];
