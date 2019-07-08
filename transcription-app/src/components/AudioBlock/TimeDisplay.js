//-----------  Imports  -----------//

import Styled    from './styles'

import React     from 'react'
import PropTypes from 'prop-types'

//-----------  Helpers  -----------//

function format(seconds){
  const date = new Date(seconds * 1000)
  const hh = date.getUTCHours()
  const mm = date.getUTCMinutes()
  const ss = pad(date.getUTCSeconds())

  if (hh)
    return `${hh}:${pad(mm)}:${ss}`
  else
    return `${mm}:${ss}`
}

function pad(string){
  return ('0' + string).slice(-2)
}

//-----------  Component  -----------//

const TimeDisplay = ({ seconds, ...props }) => (
  <Styled.TimeDisplay dateTime={`P${Math.round(seconds)}S`}>
    {format(seconds)}
  </Styled.TimeDisplay>
)

//-----------  Type Definitions  -----------//

TimeDisplay.propTypes = {
  seconds: PropTypes.number.isRequired
}

//-----------  Export  -----------//

export default TimeDisplay
