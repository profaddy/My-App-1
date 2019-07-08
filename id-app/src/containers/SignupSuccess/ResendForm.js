//-----------  Imports  -----------//

import React from 'react';
import PropTypes from 'prop-types';
import { Form, reduxForm } from 'redux-form';

import FormSubmit from '@miro/core-ui/lib/forms/FormSubmit';

//-----------  Component  -----------//

const ResendForm = ({ handleSubmit, ...props }) => (
  <Form noValidate onSubmit={handleSubmit}>
    <FormSubmit {...props} canReset active>
      RESEND
    </FormSubmit>
  </Form>
);

//-----------  Type Definitions  -----------//

ResendForm.propTypes = {
  onSubmit: PropTypes.func,
};

//-----------  Export  -----------//

export default reduxForm({
  form: 'resendVerificationEmail',
})(ResendForm);
