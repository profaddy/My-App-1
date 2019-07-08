//-----------  Imports  -----------//

import reduce from 'lodash/reduce';

import validator from 'validator';
import { defaultMemoize } from 'reselect';

import { gloablFields } from 'containers/TestWrapper';

//-----------  Definitions  -----------//

export const formID = 1;
export const formTitle = 'MoCA : Montreal Cognitive Assessment';

export const visualList = [
  'alternate_trail_making',
  'cube_drawing',
  'clock',
  'naming',
];

//-----------  Calculations  -----------//

export const calculateTotals = defaultMemoize(values => {
  return reduce(
    values,
    (sum, val, key) => {
      return (sum += !gloablFields.includes(key) && parseInt(val));
    },
    0,
  );
});

//-----------  Form Fields  -----------//

const fields = [
  {
    type: 'switch',
    name: 'is_blind',
    label: 'Blind Test',
  },
  {
    type: 'number',
    name: 'alternate_trail_making',
    label: 'Alternate Trail Making',
    validate: [
      [
        validator.isInt,
        'Acceptable input is either 0 or 1',
        { min: 0, max: 1 },
      ],
    ],
    required: true,
  },
  {
    type: 'number',
    name: 'cube_drawing',
    label: 'Cube Drawing',
    validate: [
      [
        validator.isInt,
        'Acceptable input is either 0 or 1',
        { min: 0, max: 1 },
      ],
    ],
    required: true,
  },
  {
    type: 'number',
    name: 'clock',
    label: 'Clock',
    validate: [
      [
        validator.isInt,
        'Acceptable range is between 0 and 3',
        { min: 0, max: 3 },
      ],
    ],
    required: true,
  },
  {
    type: 'number',
    name: 'naming',
    label: 'Naming',
    validate: [
      [
        validator.isInt,
        'Acceptable range is between 0 and 3',
        { min: 0, max: 3 },
      ],
    ],
    required: true,
  },
  {
    type: 'number',
    name: 'immediate_memory',
    label: 'Immediate Memory',
    validate: [[validator.equals, 'Must be 0', '0']],
    required: true,
    disabled: true,
  },
  {
    type: 'number',
    name: 'attention',
    label: 'Attention',
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
    name: 'vigilance',
    label: 'Vigilance',
    validate: [
      [
        validator.isInt,
        'Acceptable input is either 0 or 1',
        { min: 0, max: 1 },
      ],
    ],
    required: true,
  },
  {
    type: 'number',
    name: 'serial_sevens',
    label: 'Serial Sevens',
    validate: [
      [
        validator.isInt,
        'Acceptable range is between 0 and 3',
        { min: 0, max: 3 },
      ],
    ],
    required: true,
  },
  {
    type: 'number',
    name: 'sentence_repetition',
    label: 'Sentence Repetition',
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
    name: 'verbal_fluency',
    label: 'Verbal Fluency',
    validate: [
      [
        validator.isInt,
        'Acceptable input is either 0 or 1',
        { min: 0, max: 1 },
      ],
    ],
    required: true,
  },
  {
    type: 'number',
    name: 'abstraction',
    label: 'Abstraction',
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
    name: 'delayed_recall',
    label: 'Delayed Recall',
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
    name: 'orienation',
    label: 'Orienation',
    validate: [
      [
        validator.isInt,
        'Acceptable range is between 0 and 6',
        { min: 0, max: 6 },
      ],
    ],
    required: true,
  },
  {
    type: 'number',
    name: 'education',
    label: 'Education',
    validate: [
      [
        validator.isInt,
        'Acceptable input is either 0 or 1',
        { min: 0, max: 1 },
      ],
    ],
    notes: '(1 point if ≤ 12 years)',
    required: true,
  },
];

//-----------  Exports  -----------//

export default fields;
