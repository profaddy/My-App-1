//-----------  Imports  -----------//

import Styled from './styles';
import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';
import zxcvbn from 'zxcvbn';
import { renderTextField } from 'components/InputFields';

//-----------  Validation  -----------//

const required = value =>
  value || typeof value === 'number' ? undefined : 'Required';

const validPassword = value =>
  zxcvbn(value).score > 2 ? undefined : 'Please pick a stronger password.';

//-----------  Component  -----------//

class StrongPassword extends React.Component {
  state = {
    passwordStrength: null,
    passwordSuggestions: [],
    maskPassword: true,
  };

  togglePasswordMask = () => {
    this.setState({
      maskPassword: !this.state.maskPassword,
    });
  };

  setPasswordStrength = value => {
    if (!value) {
      this.setState({
        passwordStrength: null,
        passwordSuggestions: [],
      });
      return;
    }

    const result = zxcvbn(value);
    this.setState({
      passwordStrength: value ? result.score : null,
      passwordSuggestions: result.feedback.suggestions,
    });
  };

  render() {
    const { passwordStrength, passwordSuggestions, maskPassword } = this.state;

    const { validate } = this.props;

    const passwordType = maskPassword ? 'password' : 'text';

    return (
      <Styled.StrongPassword>
        <Field
          type={passwordType}
          name="password1"
          required={true}
          label="Create Password"
          component={renderTextField}
          placeholder="password"
          onChange={(e, n) => {
            this.setPasswordStrength(n);
          }}
          validate={[required, validPassword]}
          autoComplete="off"
        />

        <Styled.ShowPasswordToggle onClick={this.togglePasswordMask}>
          {maskPassword ? 'Show' : 'Hide'}
        </Styled.ShowPasswordToggle>

        <Styled.PasswordStrengthBar strength={passwordStrength}>
          <div className="strength-one">
            <span>WEAK</span>
          </div>
          <div className="strength-two">
            <span>MEDIUM</span>
          </div>
          <div className="strength-three">
            <span>GOOD</span>
          </div>
          <div className="strength-four">
            <span>STRONG</span>
          </div>
        </Styled.PasswordStrengthBar>

        {passwordSuggestions.length > 0 && (
          <Styled.PasswordSuggestions>
            <ul>
              {passwordSuggestions.map((suggestion, index) => (
                <li key={index}>
                  <span>{suggestion}</span>
                </li>
              ))}
            </ul>
          </Styled.PasswordSuggestions>
        )}
      </Styled.StrongPassword>
    );
  }
}

//-----------  Type Definitions  -----------//

StrongPassword.propTypes = {
  validate: PropTypes.array,
};

//-----------  Export  -----------//

export default StrongPassword;
