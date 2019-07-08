//-----------  Imports  -----------//

import Styled from './styles';
import React from 'react';
import SignaturePad from 'react-signature-pad-wrapper';
import FieldError from 'forms/FieldError';
import vars from 'styles/variables';

//-----------  Definitions  -----------//

const width = 550;
const height = 175;

//-----------  Component  -----------//

class SignatureField extends React.PureComponent {
  constructor(props) {
    super(props);

    this.signature = React.createRef();
  }

  //-----------  Event Handlers  -----------//

  clearSignature = () => {
    if (this.signature.current) this.signature.current.clear();
  };

  handleChange = () => {
    if (this.signature.current)
      this.props.input.onChange(this.signature.current.toData());
  };

  //-----------  HTML Render  -----------//

  render() {
    const { meta, input, correct, required, ...props } = this.props;

    const id = props.id || input.name;
    const label = props.label || 'PARTICIPANT SIGNATURE';
    const invalid = !!(meta.touched && meta.error);

    return (
      <Styled.SignatureField isInvalid={invalid} style={{ maxWidth: width }}>
        <Styled.FieldLabel htmlFor={id} isInvalid={invalid}>
          {label}
          {!!label && props.required && <sup>*</sup>}
        </Styled.FieldLabel>

        <Styled.Clear onClick={this.clearSignature}>Clear</Styled.Clear>

        <Styled.FieldWrapper isInvalid={invalid}>
          <Styled.SignatureWrapper style={{ width, height }}>
            <SignaturePad
              height={height}
              ref={this.signature}
              options={{ penColor: vars.blueBright, onEnd: this.handleChange }}
            />
          </Styled.SignatureWrapper>

          <FieldError isActive={meta.active} isInvalid={invalid}>
            {invalid ? meta.error : 'Valid'}
          </FieldError>
        </Styled.FieldWrapper>
      </Styled.SignatureField>
    );
  }
}

//-----------  Type Definitions  -----------//

SignatureField.propTypes = {};

//-----------  Export  -----------//

export default SignatureField;
