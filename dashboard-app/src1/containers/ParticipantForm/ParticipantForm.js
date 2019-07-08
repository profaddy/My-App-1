//-----------  Imports  -----------//

import Styled from './styles';
import { validate } from './validation';

import React from 'react';
import PropTypes from 'prop-types';
import { reduxForm, Field } from 'redux-form';
import validator from 'validator';
import Button from '@miro/core-ui/lib/components/Button';
import FormSubmit from '@miro/core-ui/lib/forms/FormSubmit';
import { renderTextField, RadioButton } from 'components/InputFields';
import { requestRegistrationCheck } from 'models/participant/api';

//-----------  Validation  -----------//
const asyncValidate = (values, dispatch) => {
  const { email } = values;
  return requestRegistrationCheck({ email }).then(data => {
    if (data.doesEmailExist) {
      throw { email: 'Email already exists' };
    }
  });
};

const required = value =>
  value || typeof value === 'number' ? undefined : 'Required';

const length = value =>
  validator.isLength(value, { min: 1, max: 255 })
    ? undefined
    : 'Max 255 characters are allowed';

const validEmail = value =>
  validator.isEmail(value) ? undefined : 'Invalid email';
//-----------  Helpers  -----------//

function monthFormat(value) {
  const cleaned = ('' + value).replace(/\D/g, '');

  if (value && !/^\d+$/.test(value.slice(-1))) return value.slice(0, -1);

  const match = cleaned.match(/^(\d{2})(\d{4})$/);
  let formattedValue = '';

  if (match) {
    formattedValue = match[1] + '/' + match[2];

    if (formattedValue.length > 7) return formattedValue.substring(0, 8);

    return formattedValue;
  }

  return null;
}

function phoneFormat(phoneNumberString) {
  if (phoneNumberString && !/^\d+$/.test(phoneNumberString.slice(-1)))
    return phoneNumberString.slice(0, -1);

  const cleaned = ('' + phoneNumberString).replace(/\D/g, '');
  const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
  let formattedPhone = '';

  if (match) {
    formattedPhone = '(' + match[1] + ') ' + match[2] + '-' + match[3];

    if (formattedPhone.length > 14) return formattedPhone.substring(0, 14);

    return formattedPhone;
  }

  return null;
}

//-----------  Component  -----------//

const ParticipantForm = ({ handleSubmit, isEditing, ...props }) => (
  <Styled.Form onSubmit={handleSubmit}>
    <Styled.Header>
      <Styled.Title>{isEditing ? 'EDIT' : 'ADD'} PARTICIPANT</Styled.Title>
    </Styled.Header>
    <Styled.Body>
      <Field
        type="text"
        name="first_name"
        label="First Name"
        component={renderTextField}
        required
        validate={[required, length]}
      />
      <Field
        type="text"
        name="last_name"
        label="Last Name"
        component={renderTextField}
        required
        validate={[required, length]}
      />
      <Field
        type="text"
        name="mob"
        label="Month of Birth"
        placeholder="MMYYYY"
        component={renderTextField}
        format={monthFormat}
        required
      />
      <Field
        type="text"
        name="email"
        label="Email"
        component={renderTextField}
        disabled={isEditing}
        required
        validate={[required, validEmail]}
      />
      <Field
        type="text"
        name="phone_number"
        label="Phone"
        component={renderTextField}
        format={phoneFormat}
      />
    </Styled.Body>
    {/* <Styled.Divider /> */}

    <Styled.Footer>
      <div>
        <FormSubmit {...props} canReset>
          Save
        </FormSubmit>
      </div>
      {/* <div>
        <Button small active>
          Send Invite
        </Button>
      </div> */}
    </Styled.Footer>
  </Styled.Form>
);

//-----------  Type Definitions  -----------//

ParticipantForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  isEditing: PropTypes.bool,
};

ParticipantForm.defaultProps = {
  isEditing: false,
};

//-----------  Export  -----------//

export default reduxForm({
  form: 'participant',
  destroyOnUnmount: true,
  validate,
  asyncValidate,
  asyncBlurFields: ['email'],
})(ParticipantForm);
