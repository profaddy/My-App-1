//-----------  Imports  -----------//

import RadioFields from 'fields/RadioFields'

//-----------  Definitions  -----------//

export const form = 'mobile'

//-----------  Form Fields  -----------//

export default [{
  name      : 'device_skill_level',
  label     : 'What is your familiarity with mobile devices?',
  component : RadioFields,
  required  : true,
  options   : [
    { value: 'not_familiar', label: 'I\'m not familiar with mobile devices' },
    { value: 'beginner', label: 'I\'m a beginner' },
    { value: 'comfortable', label: 'I\'m comfortable using a touchscreen' },
    { value: 'expert', label: 'It\'s like second nature' },
  ]
}]