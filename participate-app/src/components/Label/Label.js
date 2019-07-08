//-----------  Imports  -----------//

import Styled    from './styles'

import React     from 'react'
import PropTypes from 'prop-types'

//-----------  Component  -----------//

const Label = ({ index, notes, children, ...props }) => children ? (
  <Styled.Label>
    {index && <Styled.Index>{index}.</Styled.Index>}
    {children}
    {notes && <Styled.Notes>{notes}</Styled.Notes>}
  </Styled.Label>
) : null

//-----------  Type Definitions  -----------//

Label.propTypes = {
  index    : PropTypes.number,
  notes    : PropTypes.any,
  children : PropTypes.any,
}

//-----------  Export  -----------//

export default Label
