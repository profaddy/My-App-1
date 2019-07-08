//-----------  Imports  -----------//

import Styled    from './styles'

import React     from 'react'
import PropTypes from 'prop-types'

//-----------  Component  -----------//

const Stat = ({ icon: Icon , type, value, ...props }) => (
  <Styled.Stat>
    {Icon && <Icon />}
    {type && `${type}: `}
    {value || '–'}
  </Styled.Stat>
)

//-----------  Type Definitions  -----------//

Stat.propTypes = {
  icon  : PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
  type  : PropTypes.string,
  value : PropTypes.node,
}

//-----------  Export  -----------//

export default Stat
