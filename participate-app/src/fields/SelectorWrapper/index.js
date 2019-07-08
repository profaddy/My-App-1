//-----------  Imports  -----------//

import PropTypes       from 'prop-types'

import SelectorWrapper from './SelectorWrapper'

//-----------  Type Definitions  -----------//

export const selectorShape = {
  value   : PropTypes.any.isRequired,
  label   : PropTypes.node,
  options : PropTypes.arrayOf(PropTypes.object),
  input   : PropTypes.bool,
}

//-----------  Exports  -----------//

export default SelectorWrapper
