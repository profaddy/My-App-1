//-----------  Imports  -----------//

import Styled from './styles';

import fields from './config';

import React from 'react';
import PropTypes from 'prop-types';
import { reduxForm, Field } from 'redux-form';

import FormField from '@miro/core-ui/lib/forms/FormField';
import FormSubmit from '@miro/core-ui/lib/forms/FormSubmit';
import Button from '@miro/core-ui/lib/components/Button';

//-----------  Component  -----------//
const required = value =>
  value || typeof value === 'number' ? undefined : 'Required';
export const CreateBatteryForm = ({ handleSubmit, cancel, ...props }) => (
  <Styled.CreateBatteryForm onSubmit={handleSubmit}>
    <Styled.Heading>Create Battery</Styled.Heading>
    {fields.map(({ ...field }, index) => (
      <Field key={index} {...field} component={FormField} />
    ))}

    <Styled.Button onClick={cancel}>Cancel</Styled.Button>

    <FormSubmit {...props} canReset active>
      Create Battery
    </FormSubmit>
  </Styled.CreateBatteryForm>
);

//-----------  Type Definitions  -----------//

CreateBatteryForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

//-----------  Export  -----------//

export default reduxForm({
  form: 'CreateBatteryForm',
})(CreateBatteryForm);
