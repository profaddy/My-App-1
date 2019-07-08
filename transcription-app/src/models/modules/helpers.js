//-----------  Imports  -----------//

import PropTypes                from 'prop-types'

import { audioAssignmentShape } from 'models/assignments/helpers'

//-----------  Type Definitions  -----------//

export const moduleShape = {
  records          : PropTypes.number,
  activity         : PropTypes.shape(activityShape).isRequired,
  totalTime        : PropTypes.number,
  completed        : PropTypes.number.isRequired,
  started          : PropTypes.bool.isRequired,
  audioAssignments : PropTypes.arrayOf(PropTypes.shape(audioAssignmentShape)),
}

export const activityShape = {
  id   : PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  name : PropTypes.string.isRequired
}