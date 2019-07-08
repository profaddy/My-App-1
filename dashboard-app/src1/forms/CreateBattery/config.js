//-----------  Imports  -----------//

import validator from 'validator';
import { defaultMemoize } from 'reselect';

//-----------  Form Fields  -----------//

const required = value =>
  value || typeof value === 'number' ? undefined : 'Required';

const maxLength = value => (value.length < 255 ? undefined : 'Max length 255');

export default [
  {
    type: 'text',
    name: 'name',
    label: 'Battery Name',
    required: true,
    validate: [required],
  },
  {
    type: 'textarea',
    name: 'description',
    label: 'Description',
    required: true,
    validate: [required, maxLength],
  },
];
