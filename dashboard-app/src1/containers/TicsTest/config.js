//-----------  Imports  -----------//

import path from 'lodash/fp/path';
import reduce from 'lodash/reduce';

import validator from 'validator';
import { defaultMemoize } from 'reselect';

//-----------  Definitions  -----------//

export const formID = 21;
export const formTitle = 'TICS : Telephone Interview for Cognitive Status';

//-----------  Calculations  -----------//

export const calculateTotals = defaultMemoize(values => {
  const countableFields = fields.map(path('name'));

  return reduce(
    values,
    (sum, val, key) => {
      return (sum += countableFields.includes(key) && parseInt(val));
    },
    0,
  );
});

//-----------  Form Fields  -----------//

const fields = [
  {
    type: 'number',
    name: 'full_name',
    label: 'Full Name',
    validate: [
      [
        validator.isInt,
        'Acceptable range is between 0 and 2',
        { min: 0, max: 2 },
      ],
    ],
    required: true,
  },
  {
    type: 'number',
    name: 'todays_date',
    label: "Today's Date",
    validate: [
      [
        validator.isInt,
        'Acceptable range is between 0 and 5',
        { min: 0, max: 5 },
      ],
    ],
    required: true,
  },
  {
    type: 'number',
    name: 'where_are_you',
    label: 'Where Are You?',
    validate: [
      [
        validator.isInt,
        'Acceptable range is between 0 and 5',
        { min: 0, max: 5 },
      ],
    ],
    required: true,
  },
  {
    type: 'number',
    name: 'count_backwards',
    label: 'Count Backwards',
    validate: [
      [
        validator.isInt,
        'Acceptable range is between 0 and 2',
        { min: 0, max: 2 },
      ],
    ],
    required: true,
  },
  {
    type: 'number',
    name: '10_words',
    label: '10 Words',
    validate: [
      [
        validator.isInt,
        'Acceptable range is between 0 and 10',
        { min: 0, max: 10 },
      ],
    ],
    required: true,
  },
  {
    type: 'number',
    name: 'subtract_7s',
    label: 'Subtract Sevens',
    validate: [
      [
        validator.isInt,
        'Acceptable range is between 0 and 5',
        { min: 0, max: 5 },
      ],
    ],
    required: true,
  },
  {
    type: 'number',
    name: 'simple_questions',
    label: 'Simple Questions',
    validate: [
      [
        validator.isInt,
        'Acceptable range is between 0 and 4',
        { min: 0, max: 4 },
      ],
    ],
    required: true,
  },
  {
    type: 'number',
    name: 'phrase_repeat',
    label: 'Phrase Repeat',
    validate: [
      [
        validator.isInt,
        'Acceptable range is between 0 and 2',
        { min: 0, max: 2 },
      ],
    ],
    required: true,
  },
  {
    type: 'number',
    name: 'heads_of_state',
    label: 'Heads of State',
    validate: [
      [
        validator.isInt,
        'Acceptable range is between 0 and 2',
        { min: 0, max: 2 },
      ],
    ],
    required: true,
  },
  {
    type: 'number',
    name: 'phone_tap',
    label: 'Phone Tap',
    validate: [
      [
        validator.isInt,
        'Acceptable range is between 0 and 2',
        { min: 0, max: 2 },
      ],
    ],
    required: true,
  },
  {
    type: 'number',
    name: 'opposite_word',
    label: 'Opposite Word',
    validate: [
      [
        validator.isInt,
        'Acceptable range is between 0 and 2',
        { min: 0, max: 2 },
      ],
    ],
    required: true,
  },
];

//-----------  Exports  -----------//

export default fields;
