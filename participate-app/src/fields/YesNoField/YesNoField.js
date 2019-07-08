//-----------  Imports  -----------//

import noop         from 'lodash/noop'

import Styled       from './styles'

import React        from 'react'
import PropTypes    from 'prop-types'

import FieldWrapper from '@miro/core-ui/lib/forms/FieldWrapper'

//-----------  Component  -----------//

const YesNoField = ({ meta, input, invalid, children, ...props }) => {
  const onMouseOut  = (meta.submitFailed) ? input.onBlur  : noop
  const onMouseOver = (meta.submitFailed) ? input.onFocus : noop

  return (
    <Styled.YesNoField invalid={invalid} onMouseOver={onMouseOver} onMouseOut={onMouseOut}>
      {children}
      <Styled.YesNo onClick={() => input.onChange('yes')} selected={('yes' === input.value)}>
        Yes
      </Styled.YesNo>
      <Styled.YesNo onClick={() => input.onChange('no')} selected={('no' === input.value)}>
        No
      </Styled.YesNo>
    </Styled.YesNoField>
  )
}

//-----------  Type Definitions  -----------//

YesNoField.propTypes = {
  meta     : PropTypes.object.isRequired,
  input    : PropTypes.object.isRequired,
  invalid  : PropTypes.bool,
  children : PropTypes.node,
}

//-----------  Export  -----------//

export default FieldWrapper(YesNoField)
