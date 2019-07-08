//-----------  Imports  -----------//

import Styled from './styles';
import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import validator from 'validator';
import { parse } from 'query-string';

import FormSubmit from '@miro/core-ui/lib/forms/FormSubmit';

import AuthTitle from 'components/AuthTitle';
import PasswordField from './PasswordField';

import { renderTextField } from 'components/InputFields';

//-----------  Validation  -----------//

const validate = ({ email, password, ...values }) => {
  let errors = {};
  if (!email) errors.email = 'Required';
  if (!password) errors.password = 'Required';
  return errors;
};
const required = value =>
  value || typeof value === 'number' ? undefined : 'Required';

const validEmail = value =>
  validator.isEmail(value) ? undefined : 'Invalid email';
//-----------  Component  -----------//

const SignInForm = ({ handleSubmit, initialValues: { email }, ...props }) => {
  const { referrer } = parse(window.location.search);
  const isParticipate = !!referrer && referrer.includes('participate');

  return (
    <Styled.SignInForm noValidate onSubmit={handleSubmit}>
      <AuthTitle title="Welcome" />
      <Field
        autoFocus={true}
        type="email"
        name="email"
        label="Email"
        component={renderTextField}
        placeholder="email"
        autoComplete="off"
        validate={[required, validEmail]}
      />
      <PasswordField autoFocus={!!email} />
      <p>
        <Link to={`/forgot-password${window.location.search}`}>
          Forgot Password?
        </Link>
      </p>
      <FormSubmit {...props} canReset active>
        Sign In
      </FormSubmit>
      {!isParticipate && (
        <p>
          Don't have an account?{' '}
          <Link to={`/signup/pi${window.location.search}`}>Sign Up</Link>
        </p>
      )}
    </Styled.SignInForm>
  );
};
//-----------  Type Definitions  -----------//

SignInForm.propTypes = {
  onSubmit: PropTypes.func,
};

//-----------  Export  -----------//

export default reduxForm({
  destroyOnUnmount: true, // <------ destroy form data (default true, but assigned here for explicity)
  form: 'signin',
  validate,
})(SignInForm);
