//-----------  Imports  -----------//

import PropTypes from 'prop-types'

//-----------  Type Definitions  -----------//

export const rankingsShape = {
  id      : PropTypes.number.isRequired,
  name    : PropTypes.string.isRequired,
  time    : PropTypes.number.isRequired,
  avatar  : PropTypes.string.isRequired,
  ranking : PropTypes.number.isRequired,
}
