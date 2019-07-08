//-----------  Imports  -----------//

import Styled       from './styles'

import React        from 'react'
import PropTypes    from 'prop-types'

import FieldWrapper from '@miro/core-ui/lib/forms/FieldWrapper'

//-----------  Helpers  -----------//

function getInputTag(id, type, props){
  switch (type){
    case 'textarea' : return <textarea id={id} {...props} />
    default         : return <input id={id} type={type} {...props} />
  }
}

//-----------  Component  -----------//

const FormField = ({ id, type, input, children, placeholder, ...props }) => (
  <Styled.FormField>
    {children}
    {getInputTag(id, type, { ...input, placeholder })}
  </Styled.FormField>
)

//-----------  Type Definitions  -----------//

FormField.propTypes = {
  id       : PropTypes.string.isRequired,
  type     : PropTypes.string.isRequired,
  input    : PropTypes.object.isRequired,
  children : PropTypes.node
}

//-----------  Export  -----------//

export default FieldWrapper(FormField)
