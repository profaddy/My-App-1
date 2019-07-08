//-----------  Imports  -----------//

import Styled from './styles';
import validator from 'validator';
import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import AuthTitle from 'components/AuthTitle';
import { ForgotPasswordMsg } from './config';

import { Link } from 'react-router-dom';

import FormField from '@miro/core-ui/lib/forms/FormField';
import FormSubmit from '@miro/core-ui/lib/forms/FormSubmit';

//-----------  Data  -----------//

//-----------  Validation  -----------//

const validate = ({ email, ...values }) => {
  let errors = {};

  if (!email) errors.email = 'Required';

  return errors;
};
const required = value =>
  value || typeof value === 'number' ? undefined : 'Required';

const validEmail = value =>
  validator.isEmail(value) ? undefined : 'Invalid email';

//-----------  Component  -----------//

const ForgotPasswordForm = ({ handleSubmit, ...props }) => (
  <Styled.ForgotPasswordForm noValidate onSubmit={handleSubmit}>
    <AuthTitle
      title={ForgotPasswordMsg.title}
      placeholder={ForgotPasswordMsg.placeholder}
    />
    <Field
      type="email"
      name="email"
      label="Email"
      component={FormField}
      placeholder="email@address.com"
      autoComplete="off"
      required={true}
      validate={[required, validEmail]}
    />

    <FormSubmit {...props} canReset active>
      Request Reset Link
    </FormSubmit>

    <p>
      Back to <Link to={`/${window.location.search}`}>Sign In</Link>{' '}
    </p>
  </Styled.ForgotPasswordForm>
);

//-----------  Type Definitions  -----------//

ForgotPasswordForm.propTypes = {
  onSubmit: PropTypes.func,
};

//-----------  Export  -----------//

export default reduxForm({ form: 'forgotPassword', validate })(
  ForgotPasswordForm,
);
