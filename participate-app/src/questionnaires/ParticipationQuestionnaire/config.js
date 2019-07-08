//-----------  Imports  -----------//

import YesNoField from 'fields/YesNoField'

//-----------  Definitions  -----------//

export const form = 'participation'

//-----------  Form Fields  -----------//

export default [{
  name      : 'has_participated_last_30',
  label     : 'Have you participated in an investigational drug trial within the last 30 days?',
  component : YesNoField,
  required  : true,
},{
  name      : 'has_participated_two_or_more',
  label     : 'Have you participated in two or more investigational drug trials?',
  component : YesNoField,
  required  : true,
}]