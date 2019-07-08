//-----------  Imports  -----------//

import moment  from 'moment'

import { dob } from './config'

//-----------  Definitions  -----------//

// const cutoff

//-----------  Validation  -----------//

const validate = (values, { over18 }) => {
  const errors = {}

  if (values[dob]){
    const age = Math.abs(moment(values[dob], 'M/Y').endOf('month').diff(moment(), 'years'))

    if (over18 && (18 > age))
      errors[dob] = 'Does not match your previous selection of "Over 18"'

    if (!over18 && (18 <= age))
      errors[dob] = 'Does not match your previous selection of "Under 18"'
  }

  return errors
}

//-----------  Exports  -----------//

export default validate