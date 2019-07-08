//-----------  Imports  -----------//
import React from 'react';
import { Link } from 'react-router-dom';
import { get } from 'lodash';
import Styled from './styles';
import PropTypes from 'prop-types';

import { EmailVerificationError, EmailVerificationSuccess } from './config';

//-----------  Validation  -----------//

//-----------  Component  -----------//

class EmailVerification extends React.PureComponent {
  componentWillMount() {
    const token = get(this.props.match, ['params', 'token'], false);

    if (token) {
      this.props.verify(token);
    } else {
      this.props.history.replace('/');
    }
  }

  render() {
    return (
      <Styled.EmailVerification>
        {!!this.props.data && (
          <Styled.EmailVerification>
            <h3>{EmailVerificationSuccess.title}</h3>
            {EmailVerificationSuccess.body.map((msg, i) => (
              <p key={i}>{msg}</p>
            ))}
            <p>
              <Link to={`/${window.location.search}`}>Sign in</Link>
            </p>
          </Styled.EmailVerification>
        )}
        {!!this.props.error && (
          <Styled.EmailVerificationError>
            <h3>{EmailVerificationError.title}</h3>
            {EmailVerificationError.body.map((msg, i) => (
              <p key={i}>{msg}</p>
            ))}
            <p>
              <Link to={`/${window.location.search}`}>Sign in</Link>
            </p>
          </Styled.EmailVerificationError>
        )}
      </Styled.EmailVerification>
    );
  }
}

//-----------  Type Definitions  -----------//

EmailVerification.propTypes = {
  verify: PropTypes.func.isRequired,
  error: PropTypes.any,
  data: PropTypes.any,
};

//-----------  Export  -----------//

export default EmailVerification;
