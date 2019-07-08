//-----------  Imports  -----------//

import get     from 'lodash/get'
import set     from 'lodash/set'
import isEmpty from 'lodash/isEmpty'

//-----------  Validation  -----------//

const validate = (values) => {
  const errors = {}

  Object.keys(values).forEach(type => {
    Object.keys(values[type]).forEach(condition => {
      const { label, ...field } = get(values, [type, condition], {})

      if (!label)
        set(errors, [type, condition, 'label'], 'Required')

      if (isEmpty(field))
        set(errors, [type, condition, 'label'], 'Selection Required')
    })
  })

  return errors
}

//-----------  Exports  -----------//

export default validate