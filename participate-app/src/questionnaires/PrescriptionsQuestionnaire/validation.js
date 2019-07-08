//-----------  Imports  -----------//

import get from 'lodash/get'
import set from 'lodash/set'

//-----------  Validation  -----------//

const validate = (values) => {
  const errors = {}

  Object.keys(values).forEach(type => {
    Object.keys(values[type]).forEach(condition => {
      const { label, using_medication } = get(values, [type, condition], {})

      if (!label)
        set(errors, [type, condition, 'label'], 'Required')

      if (!using_medication)
        set(errors, [type, condition, 'label'], 'Required')
    })
  })

  return errors
}

//-----------  Exports  -----------//

export default validate