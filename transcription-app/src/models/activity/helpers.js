//-----------  Imports  -----------//

import PropTypes from 'prop-types'

//-----------  Type Definitions  -----------//

export const activityShape = {
  id        : PropTypes.number.isRequired,
  color     : PropTypes.string.isRequired,
  title     : PropTypes.string.isRequired,
  createdAt : PropTypes.instanceOf(Date).isRequired,
}
