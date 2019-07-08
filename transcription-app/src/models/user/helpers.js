//-----------  Imports  -----------//

import PropTypes from 'prop-types'

//-----------  Type Definitions  -----------//

export const userShape = {
  id                        : PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  email                     : PropTypes.string,
  last_name                 : PropTypes.string,
  first_name                : PropTypes.string,
  is_transcriber            : PropTypes.bool,
  is_transcription_reviewer : PropTypes.bool,
  _name                     : PropTypes.string,
  _stats                    : PropTypes.shape(userStatsShape),
  _avatar                   : PropTypes.string,
}

export const userStatsShape = {
  totalMins     : PropTypes.number.isRequired,
  totalFiles    : PropTypes.number.isRequired,
  totalSubjects : PropTypes.number.isRequired,
}
