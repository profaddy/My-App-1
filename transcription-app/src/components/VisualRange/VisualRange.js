//-----------  Imports  -----------//

import Styled    from './styles'

import React     from 'react'
import PropTypes from 'prop-types'

//-----------  Component  -----------//

const VisualRange = ({ color, value, ...props }) => (
  <Styled.VisualRange color={color} width={value}>
    <input type='range' value={value} min={0} max={1} step='any' {...props} />
  </Styled.VisualRange>
)

//-----------  Type Definitions  -----------//

VisualRange.propTypes = {
  value: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
}

//-----------  Export  -----------//

export default VisualRange
