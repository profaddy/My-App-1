//-----------  Imports  -----------//

import get               from 'lodash/get'

import Styled            from './styles'

import React             from 'react'
import PropTypes         from 'prop-types'

import FieldWrapper      from '@miro/core-ui/lib/forms/FieldWrapper'
import SelectorWrapper,
       { selectorShape } from 'fields/SelectorWrapper'

//-----------  Component  -----------//

const RadioFields = ({ id, input, invalid, options, children, ...props }) => {
  const selection = get(input, 'value')

  return (
    <Styled.RadioFields>
      {children}

      {N.map(({ value, label, ...option }) => {
        const selectorProps = {
          type     : 'radio',
          id       : [id, value].join('_'),
          key      : value,
          name     : get(input, 'name'),
          value    : value,
          label    : label,
          checked  : !!(selection && (value === selection)),
          onChange : get(input, 'onChange'),
          invalid  : invalid,
          input    : option.input,
        }

        return <SelectorWrapper {...selectorProps} />
      })}
    </Styled.RadioFields>
  )
}

//-----------  Type Definitions  -----------//

RadioFields.propTypes = {
  id       : PropTypes.string.isRequired,
  input    : PropTypes.object.isRequired,
  invalid  : PropTypes.bool,
  options  : PropTypes.arrayOf(PropTypes.shape(selectorShape)).isRequired,
  children : PropTypes.node,
}

//-----------  Export  -----------//

export default FieldWrapper(RadioFields)
