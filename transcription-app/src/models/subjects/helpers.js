//-----------  Imports  -----------//

import PropTypes from 'prop-types'

//-----------  Type Definitions  -----------//

export const subjectShape = {
  user       : PropTypes.any,
  subject_id : PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
}
