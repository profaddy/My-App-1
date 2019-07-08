//-----------  Imports  -----------//

import get             from 'lodash/get'

import Styled          from './styles'

import React           from 'react'
import PropTypes       from 'prop-types'

import FieldWrapper    from '@miro/core-ui/lib/forms/FieldWrapper'
import SelectorWrapper from 'fields/SelectorWrapper'

//-----------  Component  -----------//

const CheckboxField = ({ id, label, input, invalid, children, ...props }) => {
  const selectorProps = {
    type     : 'checkbox',
    id       : id,
    name     : input.name,
    value    : true,
    label    : label,
    checked  : (true == input.value),
    onChange : input.onChange,
    invalid  : invalid,
  }

  return (
    <Styled.CheckboxField>
      {children}
      <SelectorWrapper {...selectorProps} />
    </Styled.CheckboxField>
  )
}

//-----------  Type Definitions  -----------//

CheckboxField.propTypes = {
  value    : PropTypes.string,
  children : PropTypes.node
}

//-----------  Export  -----------//

export default FieldWrapper(CheckboxField, false)
