//-----------  Imports  -----------//

import PropTypes from 'prop-types'

//-----------  Type Definitions  -----------//

export const studyShape = {
  sponsor      : PropTypes.string.isRequired,
  approvalDate : PropTypes.string.isRequired,
  studyID      : PropTypes.string,
  irbNumber    : PropTypes.string.isRequired,
  title        : PropTypes.string.isRequired,
  PIs          : PropTypes.arrayOf(PropTypes.string).isRequired,
  address      : PropTypes.string.isRequired,
  phone        : PropTypes.string.isRequired,
  consents     : PropTypes.string.isRequired,
}

export const consentShape = {
  title   : PropTypes.string.isRequired,
  content : PropTypes.object.isRequired,
}