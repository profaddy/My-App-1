//-----------  Imports  -----------//

import React        from 'react'
import PropTypes    from 'prop-types'

import FieldWrapper from '@miro/core-ui/lib/forms/FieldWrapper'

//-----------  Component  -----------//

class HiddenField extends React.Component {

  componentDidMount(){
    this.updateValue(this.props)
  }

  componentDidUpdate(prevProps){
    if (prevProps.value !== this.props.value)
      this.updateValue(this.props)
  }

  //-----------  Event Handlers  -----------//

  updateValue({ input, value }){
    input.onChange(value)
  }

  //-----------  HTML Render  -----------//

  render(){
    const { children } = this.props

    return children
  }
}

//-----------  Type Definitions  -----------//

HiddenField.propTypes = {
  input    : PropTypes.object.isRequired,
  value    : PropTypes.any.isRequired,
  children : PropTypes.node,
}

//-----------  Export  -----------//

export default FieldWrapper(HiddenField)
