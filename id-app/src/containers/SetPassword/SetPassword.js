//-----------  Imports  -----------//

import React from 'react';
import SetPasswordForm from './SetPasswordForm';
import VerificationError from './VerificationError';
import Styled from './styles';

//-----------  Component  -----------//

class SetPassword extends React.Component {
  componentDidMount() {
    this.props.onVerify(
      this.props.match.params.uid,
      this.props.match.params.token,
    );
  }

  //-----------  HTML Render  -----------//

  render() {
    const { ...props } = this.props;

    return (
      <Styled.SetPassword>
        {this.props.isVerified.verified && <SetPasswordForm {...props} />}
        {this.props.isVerified.error && <VerificationError {...props} />}
      </Styled.SetPassword>
    );
  }
}

//-----------  Type Definitions  -----------//

SetPassword.propTypes = {};

//-----------  Export  -----------//

export default SetPassword;
