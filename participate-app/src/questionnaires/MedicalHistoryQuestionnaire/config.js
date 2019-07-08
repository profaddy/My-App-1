//-----------  Imports  -----------//

import YesNoField     from 'fields/YesNoField'
import RadioFields    from 'fields/RadioFields'
import CheckboxFields from 'fields/CheckboxFields'

//-----------  Definitions  -----------//

export const form = 'medical_history'

//-----------  Form Fields  -----------//

export default [{
  name      : 'immuno_dx_cancer',
  label     : 'Cancer?',
  component : RadioFields,
  required  : true,
  options   : [
    { value: 'currently', label: 'Have cancer now' },
    { value: 'previously', label: 'Had cancer in the past' },
    { value: 'never', label: 'Have not had cancer' },
  ]
},{
  name      : 'has_uncorrected_hearing_loss',
  label     : 'Uncorrected hearing loss?',
  component : YesNoField,
  required  : true,
},{
  name      : 'has_uncorrected_vision_loss',
  label     : 'Uncorrected vision impairment?',
  component : YesNoField,
  required  : true,
},{
  name      : 'has_arthritis_hands',
  label     : 'Arthritis in the hands?',
  component : YesNoField,
  required  : true,
},{
  name      : 'has_fine_motor_dysfunction',
  label     : 'Trouble buttoning clothes?',
  component : YesNoField,
  required  : true,
},{
  name      : 'has_developmental_condition',
  label     : 'A developmental disorder?',
  component : YesNoField,
  required  : true,
},{
  name      : 'has_drinking_problem',
  label     : 'How many alcoholic drinks do you have per day?',
  component : RadioFields,
  required  : true,
  options   : [
    { value: '5+', label: '5+' },
    { value: '3-4', label: '3-4' },
    { value: '1-2', label: '1-2' },
    { value: '0', label: '0' },
  ]
},{
  name      : 'has_substance_problem',
  label     : 'How often do you use unprescribed herbs, drugs, or other substances?',
  component : RadioFields,
  required  : true,
  options   : [
    { value: 'daily', label: 'Once a day' },
    { value: 'weekly', label: 'Once a week' },
    { value: 'monthly', label: 'Once a month' },
    { value: 'yearly', label: 'Once a year' },
    { value: 'never', label: 'Never' },
  ]
},{
  name      : 'has_diminishing_function',
  label     : 'Have you noticed changes in your thinking, memory, or motor function that make you concerned about your brain health?',
  component : YesNoField,
  required  : true,
}]