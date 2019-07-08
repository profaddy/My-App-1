//-----------  Imports  -----------//

import PropTypes from 'prop-types'

//-----------  Definitions  -----------//

export const modalProps = {
  title   : 'Thank you for your time',
  message : 'Your data has been deleted from our system.'
}

//-----------  Type Definitions  -----------//

export const userShape = {
  email    : PropTypes.string,
  over_18  : PropTypes.bool,
  attempts : PropTypes.number,
  passed   : PropTypes.bool.isRequired,
}