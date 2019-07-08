//-----------  Imports  -----------//

import Styled       from './styles'

import React        from 'react'
import PropTypes    from 'prop-types'
import SignaturePad from 'react-signature-pad-wrapper'

import FieldWrapper from '@miro/core-ui/lib/forms/FieldWrapper'

import vars         from '@miro/core-ui/lib/styles/variables'

//-----------  Definitions  -----------//

const width  = 550
const height = 175

//-----------  Component  -----------//

class SignatureField extends React.PureComponent {

  constructor(props){
    super(props)

    this.signature = React.createRef()
  }

  //-----------  Event Handlers  -----------//

  clearSignature = () => {
    if (this.signature.current){
      this.signature.current.clear()
      this.props.input.onChange(null)
    }
  }

  handleChange = () => {
    if (this.signature.current)
      this.props.input.onChange(this.signature.current.toDataURL())
  }

  //-----------  HTML Render  -----------//

  render(){
    const { id, meta, label, invalid, children, ...props } = this.props

    return (
      <Styled.SignatureField isInvalid={invalid} style={{ maxWidth: width }}>
        {children}

        <Styled.Clear onClick={this.clearSignature}>
          Clear
        </Styled.Clear>

        <Styled.SignatureWrapper  isInvalid={invalid} style={{ width, height }}>
          <SignaturePad height={height} ref={this.signature} options={{ penColor: vars.blueBright, onEnd: this.handleChange }} />
        </Styled.SignatureWrapper>
      </Styled.SignatureField>
    )
  }
}

//-----------  Type Definitions  -----------//

SignatureField.propTypes = {
  id       : PropTypes.string.isRequired,
  meta     : PropTypes.object.isRequired,
  input    : PropTypes.object.isRequired,
  invalid  : PropTypes.bool,
  children : PropTypes.node,
}

//-----------  Export  -----------//

export default FieldWrapper(SignatureField)
