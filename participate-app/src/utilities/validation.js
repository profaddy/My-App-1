//-----------  Imports  -----------//

import isArray    from 'lodash/isArray'
import isFunction from 'lodash/isFunction'

import validator  from 'validator'

//-----------  General Validation  -----------//

export const validate = (fields, validation) => (values, props) => {
  let errors = {}

  if (isFunction(validation))
    errors = validation(values, props)

  fields.forEach(({ name, required, validate }) => {

    if (!!required && !values[name]){
      errors[name] = 'Required'
    } else if (isArray(validate)){
      for (let [test, message, opts] of validate){
        if (!test(values[name], opts)){
          errors[name] = message
          break
        }
      }
    }
  })

  return errors
}

//-----------  Month/Year Validation  -----------//

export function validateMonthYear(value){

  if (!value) return false

  const [ month, year ] = value.split('/')

  const hasMonth = validator.isInt(month || "", { min: 1, max: 12 })
  const hasYear  = validator.isInt(year  || "", { min: 1898, max: 2018 })

  return (hasMonth && hasYear)
}

//-----------  Exports  -----------//

export default validate