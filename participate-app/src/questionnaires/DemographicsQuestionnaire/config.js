//-----------  Imports  -----------//

import MonthField            from 'fields/MonthField'
import YesNoField            from 'fields/YesNoField'
import RadioFields           from 'fields/RadioFields'
import CheckboxFields        from 'fields/CheckboxFields'

import { OTHER }             from 'utilities/constants'
import { validateMonthYear } from 'utilities/validation'

//-----------  Definitions  -----------//

export const form = 'demographics'
export const dob  = 'dob'

//-----------  Form Fields  -----------//

export default [{
  name      : dob,
  label     : 'Date of Birth',
  notes     : '(month & year only)',
  validate  : [[validateMonthYear, 'Required']],
  component : MonthField,
  required  : true,
},{
  name      : 'hand_dominant',
  label     : 'Dominant Hand?',
  component : RadioFields,
  required  : true,
  options   : [
    { value: 'right', label: 'Right' },
    { value: 'left', label: 'Left' },
    { value: 'ambidextrous', label: 'Ambidextrous' },
  ]
},{
  name      : 'sex',
  label     : 'Sex?',
  component : RadioFields,
  required  : true,
  options   : [
    { value: 'female', label: 'Female' },
    { value: 'male', label: 'Male' },
    { value: 'intersex', label: 'Intersex' },
  ]
},{
  name      : 'sexual_orientation',
  label     : 'Sexual Orientation?',
  component : RadioFields,
  required  : true,
  options   : [
    { value: 'heterosexual', label: 'Heterosexual' },
    { value: 'homosexual', label: 'Homosexual' },
    { value: OTHER, label: 'Other', input: true },
    { value: 'no_answer', label: 'Prefer not to answer' },
  ]
},{
  name      : 'gender_identity',
  label     : 'Gender Identity?',
  notes     : '(optional)',
  component : RadioFields,
  options   : [
    { value: 'female', label: 'Female' },
    { value: 'male', label: 'Male' },
    { value: 'f_to_m', label: 'F to M' },
    { value: 'm_to_f', label: 'M to F' },
    { value: OTHER, label: 'Other', input: true  },
  ]
},{
  name      : 'ethnicity',
  label     : 'What is your Ethnicity?',
  component : CheckboxFields,
  required  : true,
  options   : [
    { value: 'african', label: 'African or African American', input: true },
    { value: 'asian', label: 'Asian or Asian American', options: [
      { value: 'chinese', label: 'Chinese or Chinese American' },
      { value: 'filipino', label: 'Filipino or Filipino American' },
      { value: 'japanese', label: 'Japanese or Japanese American' },
      { value: 'korean', label: 'Korean or Korean American' },
      { value: 'vietnamese', label: 'Vietnamese or Vietnamese American' },
      { value: 'cambodian', label: 'Cambodian or Cambodian American' },
      { value: 'hmong', label: 'Hmong or Hmong American' },
      { value: 'laotian', label: 'Laotian or Laotian American' },
      { value: 'thai', label: 'Thai or Thai American' },
      { value: 'mongolian', label: 'Mongolian or Mongolian American' },
      { value: OTHER, label: 'Other', input: true }
    ]},
    { value: 'caucasian', label: 'Caucasian', input: true },
    { value: 'indian/pakistani/bangladeshi', label: 'Indian, Pakistani, or Bangladeshi', input: true },
    { value: 'latin', label: 'Latina / Latino', options: [
      { value: 'mexican', label: 'Mexican or Mexican American' },
      { value: 'puerto_rican', label: 'Puerto Rican or Puerto Rican American' },
      { value: 'cuban', label: 'Cuban or Cuban American' },
      { value: OTHER, label: 'Other', input: true },
    ]},
    { value: 'middle_eastern', label: 'Middle Eastern', options: [
      { value: 'arab', label: 'Arab' },
      { value: 'jew', label: 'Jew' },
      { value: 'turk', label: 'Turk' },
      { value: OTHER, label: 'Other', input: true },
    ]},
    { value: 'native', label: 'Native American or Native Alaskan', options: [
      { value: 'hawaiian', label: 'Hawaiian Native' },
      { value: 'guamanian/chamorro', label: 'Guamanian or Chamorro' },
      { value: 'samoan', label: 'Samoan' },
      { value: OTHER, label: 'Other', input: true },
    ]},
    { value: 'pacific_islander', label: 'Pacific Islander' },
    { value: OTHER, label: 'Other', input: true },
  ],
},{
  name      : 'language_primary',
  label     : 'Is English your first language?',
  component : YesNoField,
  required  : true,
},{
  name      : 'education',
  label     : 'Education',
  component : RadioFields,
  required  : true,
  options   : [
    { value: '0', label: 'Don\'t Know' },
    { value: '1', label: 'Less than High School' },
    { value: '12', label: 'High School Graduate' },
    { value: '11', label: 'Some College, but No Degree' },
    { value: '14', label: 'Associate\'s Degree' },
    { value: '16', label: 'Bachelor\'s Degree' },
    { value: '17', label: 'Some Graduate Study, but No Degree' },
    { value: '18', label: 'Master\'s Degree' },
    { value: '20', label: 'Doctorate or Professional Degree' },
    { value: OTHER, label: 'Other', input: true },
  ]
}]