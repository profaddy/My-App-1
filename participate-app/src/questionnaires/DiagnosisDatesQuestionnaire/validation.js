//-----------  Imports  -----------//

import get                   from 'lodash/get'
import set                   from 'lodash/set'

import { validateMonthYear } from 'utilities/validation'

//-----------  Validation  -----------//

const validate = (values) => {
  const errors = {}

  Object.keys(values).forEach(type => {
    Object.keys(values[type]).forEach(condition => {
      const { label, symptoms_date, diagnosis_date } = get(values, [type, condition], {})

      if (!label)
        set(errors, [type, condition, 'label'], 'Required')

      if (!validateMonthYear(symptoms_date))
        set(errors, [type, condition, 'symptoms_date'], 'Required')

      if (!validateMonthYear(diagnosis_date))
        set(errors, [type, condition, 'diagnosis_date'], 'Required')
    })
  })

  return errors
}

//-----------  Exports  -----------//

export default validate