//-----------  Imports  -----------//

import Styled from './styles';
import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import AuthTitle from 'components/AuthTitle';
import StrongPassword from 'components/StrongPassword';

import FormField from '@miro/core-ui/lib/forms/FormField';

import { SetPasswordMsg, passwordOptions } from './config';
//-----------  Data  -----------//

//-----------  Validation  -----------//

//-----------  Helpers  -----------//

//-----------  Component  -----------//

const SetPasswordForm = ({ handleSubmit, change, ...props }) => (
  <Styled.SetPasswordForm onSubmit={handleSubmit}>
    <AuthTitle
      title={SetPasswordMsg.title}
      placeholder=''
    />

    <StrongPassword />

    <Styled.FormSubmit {...props} canReset active>
      Submit
    </Styled.FormSubmit>
  </Styled.SetPasswordForm>
);

//-----------  Type Definitions  -----------//

SetPasswordForm.propTypes = {
  onSubmit: PropTypes.func,
};

//-----------  Export  -----------//

export default reduxForm({ form: 'setPassword' })(SetPasswordForm);
