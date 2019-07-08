//-----------  Imports  -----------//

import React       from 'react'

import YesNoField  from 'fields/YesNoField'
import RadioFields from 'fields/RadioFields'

//-----------  Definitions  -----------//

export const form = 'capacity'

//-----------  Form Fields  -----------//

export default [{
  name      : 'study_purpose',
  label     : 'The purpose of the study is to evaluate new tests for brain health.',
  component : YesNoField,
  required  : true,
},{
  name      : 'new_treatment',
  label     : 'This study will provide me with a new treatment for my medical condition.',
  component : YesNoField,
  required  : true,
},{
  name      : 'false_statements',
  label     : (<span>Select the <strong>FALSE</strong> statement:</span>),
  component : RadioFields,
  required  : true,
  options   : [
    { value: 'details', label: 'I will provide details about my health information to the researchers.' },
    { value: 'blood', label: 'I will have to give a blood sample.' },
    { value: 'data', label: 'The data from my tests will be used for research.' }
  ],
},{
  name      : 'participation_risks',
  label     : (<span>Select the <strong>RISK</strong> of participation:</span>),
  component : RadioFields,
  required  : true,
  options   : [
    { value: 'confidentiality', label: 'Risk of loss of confidentiality' },
    { value: 'bruising', label: 'Bruising from blood draws' },
    { value: 'stomach', label: 'Stomach Pain' }
  ],
},{
  name      : 'participation_benefits',
  label     : 'Will you benefit from study participation?',
  component : RadioFields,
  required  : true,
  options   : [
    { value: 'contribution', label: 'There is no direct benefit to my participation in this study, but my participation may contribute to improving science or helping research.' },
    { value: 'health', label: 'I will benefit from the study because my brain health might improve. ' },
  ]
},{
  name      : 'contact_researchers',
  label     : 'I can contact the researchers with questions any time before, during, or after participating in this study.',
  component : YesNoField,
  required  : true,
},{
  name      : 'withdraw_anytime',
  label     : 'This study is voluntary and I can withdraw at any time.',
  component : YesNoField,
  required  : true,
}]