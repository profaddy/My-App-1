//-----------  Imports  -----------//

import Styled from './styles';
import get from 'lodash/get';
import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm, change } from 'redux-form';
import AuthTitle from 'components/AuthTitle';
import { Link } from 'react-router-dom';

import FormField from '@miro/core-ui/lib/forms/FormField';
import CheckboxFields from '@miro/core-ui/lib/forms/CheckboxFields';
import CheckboxField from '@miro/core-ui/lib/forms/CheckboxField';

import RadioFields from '@miro/core-ui/lib/forms/RadioFields';
import Modal from '@miro/core-ui/lib/components/Modal';
import TOS from 'containers/ToS';

import { SupervisorDetails, SupervisorMsg } from './config';
//-----------  Data  -----------//

//-----------  Validation  -----------//

const required = value =>
  value || typeof value === 'number' ? undefined : 'Required';
const validate = values => {
  let errors = {};
  return errors;
};
//-----------  Helpers  -----------//

//-----------  Component  -----------//

class CollaboratorInfo extends React.Component {
  componentWillMount() {
    this.props.change('is_licensed', false);
  }
  render() {
    const { handleSubmit, change } = this.props;
    // change('is_licensed', false);

    if (
      !['participant', 'researcher', 'pi'].includes(
        get(this.props, 'match.params.type'),
      )
    ) {
      this.props.history.replace(`/${window.location.search}`);
    }

    return (
      <Styled.SignUpForm onSubmit={handleSubmit}>
        <Styled.SupervisorDetails>
          <AuthTitle
            title={SupervisorMsg.title}
            placeholder={SupervisorMsg.placeholder}
          />

          {SupervisorDetails.map(option => {
            return (
              <Field
                type={option.type || 'text'}
                name={option.name}
                label={option.label}
                component={FormField}
                placeholder={option.placeholder}
                key={option.name}
                validate={[required]}
              />
            );
          })}
        </Styled.SupervisorDetails>

        <Styled.FormSubmit {...this.props} canReset active>
          Invite & Sign up
        </Styled.FormSubmit>
      </Styled.SignUpForm>
    );
  }
}

//-----------  Type Definitions  -----------//

CollaboratorInfo.propTypes = {
  onSubmit: PropTypes.func,
};

//-----------  Export  -----------//

export default (CollaboratorInfo = reduxForm({
  form: 'signup',
  destroyOnUnmount: false, // <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
})(CollaboratorInfo));
