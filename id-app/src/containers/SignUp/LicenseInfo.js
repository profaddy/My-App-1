//-----------  Imports  -----------//

import Styled from './styles';
import get from 'lodash/get';
import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm, change } from 'redux-form';
import AuthTitle from 'components/AuthTitle';
import { Link } from 'react-router-dom';
import validator from 'validator';
import FormField from '@miro/core-ui/lib/forms/FormField';
import { renderTextField, renderSelectField } from 'components/InputFields';
import CheckboxFields from '@miro/core-ui/lib/forms/CheckboxFields';
import CheckboxField from '@miro/core-ui/lib/forms/CheckboxField';

import RadioFields from '@miro/core-ui/lib/forms/RadioFields';
import Modal from '@miro/core-ui/lib/components/Modal';
import TOS from 'containers/ToS';

//-----------  Data  -----------//

//-----------  Validation  -----------//
const required = value =>
  value || typeof value === 'number' ? undefined : 'Required';

const length = value =>
  validator.isLength(value, { min: 1, max: 255 })
    ? undefined
    : 'Max 255 characters are allowed';

const alphaNumeric = value => {
  console.log('alphaNumeric: ', value);
  return validator.isAlphanumeric(value /* , { no_symbols: true } */)
    ? undefined
    : 'Should be alphanumeric';
};
const validate = values => {
  let errors = {};

  return errors;
};

//-----------  Component  -----------//

class LicenseInfo extends React.Component {
  state = {
    tosModal: false,
  };
  componentWillMount() {
    this.props.change('is_licensed', true);
  }

  render() {
    const {
      handleSubmit,
      nextPage,
      licensingBoards,
      practiceAreas,
      institutions,
      change,
      selectedLicensingBoard,
    } = this.props;
    // change('is_licensed', true);

    return (
      <Styled.SignUpForm onSubmit={handleSubmit}>
        <AuthTitle title="Clinical Certification" />
        <Styled.LicensedClinician>
          <Field
            component={renderTextField}
            type="text"
            name="license_number"
            label="NPI number (Individual)"
            placeholder="Enter your NPI number (Individual)"
            required={true}
            validate={[required, length, alphaNumeric]}
          />

          {/*<p>
            Not a clinician?{' '}
            <a
              href="/#"
              onClick={e => {
                e.preventDefault();
                nextPage();
              }}
            >
              Invite a clinical collaborator
            </a>
          </p> */}
        </Styled.LicensedClinician>
        <Styled.FormSubmit {...this.props} canReset active>
          Sign Up
        </Styled.FormSubmit>
      </Styled.SignUpForm>
    );
  }
}

//-----------  Type Definitions  -----------//

LicenseInfo.propTypes = {
  onSubmit: PropTypes.func,
};

//-----------  Export  -----------//

export default (LicenseInfo = reduxForm({
  form: 'signup',
  destroyOnUnmount: false, // <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
})(LicenseInfo));
