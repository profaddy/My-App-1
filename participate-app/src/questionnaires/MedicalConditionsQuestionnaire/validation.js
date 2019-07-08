//-----------  Imports  -----------//

import get          from 'lodash/get'
import isEmpty      from 'lodash/isEmpty'

import { hasPsych,
         hasNeuro,
         psychKey,
         neuroKey } from './config'

//-----------  Validation  -----------//

const validate = (values, props) => {
  const errors = {}

  if (!get(values, hasPsych))
    errors[hasPsych] = 'Required'

  if (!get(values, hasNeuro))
    errors[hasNeuro] = 'Required'

  if (props.hasPsych && isEmpty(get(values, psychKey)))
    errors[psychKey] = 'Required'

  if (props.hasNeuro && isEmpty(get(values, neuroKey)))
    errors[neuroKey] = 'Required'

  return errors
}

//-----------  Exports  -----------//

export default validate