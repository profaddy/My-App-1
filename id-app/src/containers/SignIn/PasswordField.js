import Styled from './styles';
import React from 'react';
import { renderTextField } from 'components/InputFields';
import { Field } from 'redux-form';

class PasswordField extends React.Component {
  state = {
    maskPassword: true,
  };

  togglePasswordMask = () => {
    this.setState({
      maskPassword: !this.state.maskPassword,
    });
  };

  render() {
    const { maskPassword } = this.state;
    const passwordType = maskPassword ? 'password' : 'text';

    return (
      <Styled.PasswordField>
        <Field
          type={passwordType}
          name="password"
          label="Password"
          component={renderTextField}
          placeholder="password"
          autoComplete="off"
          {...this.props}
        />

        <Styled.ShowPasswordToggle onClick={this.togglePasswordMask}>
          {maskPassword ? 'Show' : 'Hide'}
        </Styled.ShowPasswordToggle>
      </Styled.PasswordField>
    );
  }
}

export default PasswordField;
