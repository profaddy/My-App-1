//-----------  Imports  -----------//

import Styled from './styles';
import get from 'lodash/get';
import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import AuthTitle from 'components/AuthTitle';
import StrongPassword from 'components/StrongPassword';
import { Link } from 'react-router-dom';

import FormField from '@miro/core-ui/lib/forms/FormField';
import { renderTextField, renderSelectField } from 'components/InputFields';

import CheckboxFields from '@miro/core-ui/lib/forms/CheckboxFields';
import CheckboxField from '@miro/core-ui/lib/forms/CheckboxField';

import RadioFields from '@miro/core-ui/lib/forms/RadioFields';
import Modal from '@miro/core-ui/lib/components/Modal';
import TOS from 'containers/ToS';
import validator from 'validator';

import { requestRegistrationCheck } from 'models/signup/api';
//-----------  Data  -----------//

//-----------  Validation  -----------//

const required = value =>
  value || typeof value === 'number' ? undefined : 'Required';

const asyncValidate = (values, dispatch) => {
  const { email } = values;
  return requestRegistrationCheck({ email }).then(data => {
    if (data.doesEmailExist) {
      throw { email: 'That username is taken' };
    }
  });
};

const validEmail = value =>
  validator.isEmail(value) ? undefined : 'Invalid email';
//-----------  Helpers  -----------//

//-----------  Component  -----------//

class EmailPasswordInfo extends React.Component {
  state = {
    tosModal: false,
  };

  toggleTOS = () => {
    this.setState(prevState => ({ tosModal: !prevState.tosModal }));
  };

  render() {
    const {
      handleSubmit,
      nextPage,
      requestRegistrationCheck,
      registrationCheck,
      userType,
    } = this.props;

    if (!['participant', 'researcher', 'pi'].includes(userType)) {
      this.props.history.replace(`/${window.location.search}`);
    }

    return (
      <Styled.SignUpForm onSubmit={handleSubmit}>
        <AuthTitle title="Get started with miro" />
        <Field
          type="email"
          name="email"
          label="Email"
          required={true}
          component={renderTextField}
          placeholder="email@address.com"
          validate={[required]}
          autoComplete="off"
          validate={[required, validEmail]}
        />

        <StrongPassword />

        <Styled.TOS>
          <Field
            type="checkbox"
            name="tos"
            label={
              <p>
                I agree to Miro's&nbsp;
                <span
                  onClick={e => {
                    this.toggleTOS();
                    e.preventDefault(); // so that checkbox doesn't get checked when TOS is clicked
                  }}
                  style={{ textDecoration: 'underline', color: '#0290ff' }}
                >
                  Terms of use.
                </span>
              </p>
            }
            component={CheckboxField}
            validate={[required]}
          />
        </Styled.TOS>

        {this.props.children}

        <Styled.FormSubmit
          {...this.props}
          canReset
          active
          // disabled={registrationCheck ? false : true}
        >
          {userType === 'participant' ? 'SIGN UP' : 'CONTINUE'}
        </Styled.FormSubmit>

        <p>
          Already have an account?{' '}
          <Link to={`/${window.location.search}`}>Sign In</Link>
        </p>

        <Modal isOpen={this.state.tosModal} onRequestClose={this.toggleTOS}>
          <TOS />
        </Modal>
      </Styled.SignUpForm>
    );
  }
}

//-----------  Type Definitions  -----------//

EmailPasswordInfo.propTypes = {
  onSubmit: PropTypes.func,
};

//-----------  Export  -----------//

export default (EmailPasswordInfo = reduxForm({
  form: 'signup',
  destroyOnUnmount: false, // <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  asyncValidate,
  asyncBlurFields: ['email'],
})(EmailPasswordInfo));
