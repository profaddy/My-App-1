//-----------  Imports  -----------//

import Styled from './styles';
import get from 'lodash/get';
import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm, change, formValueSelector } from 'redux-form';
import AuthTitle from 'components/AuthTitle';
import validator from 'validator';
import { renderTextField, renderSelectField } from 'components/InputFields';

//-----------  Data  -----------//

//-----------  Validation  -----------//
const required = value =>
  value || typeof value === 'number' ? undefined : 'Required';

const length = value =>
  validator.isLength(value, { min: 1, max: 255 })
    ? undefined
    : 'Max 255 characters are allowed';

const validate = values => {
  let errors = {};

  return errors;
};

//-----------  Component  -----------//

class ResearcherInfo extends React.Component {
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
      selectedPracticeArea,
      selectedInstitution,
    } = this.props;
    // change('is_licensed', true);

    return (
      <Styled.SignUpForm onSubmit={handleSubmit}>
        <AuthTitle title="Get started with miro" placeholder="" />

        <Styled.ResearcherInfo>
          <Field
            component={renderTextField}
            type="text"
            name="first_name"
            label="First Name"
            placeholder="Enter your First Name"
            required={true}
            validate={[required, length]}
          />
          <Field
            component={renderTextField}
            type="text"
            name="last_name"
            label="Last Name"
            placeholder="Enter your Last Name"
            required={true}
            validate={[required, length]}
          />
          <Field
            component={renderSelectField}
            type="select"
            name="practice_area_id"
            label="Practice Area"
            placeholder="Enter your Practice Area"
            options={
              practiceAreas.length
                ? [
                    ...practiceAreas.map(board => ({
                      label: board.name,
                      value: board.id,
                    })),
                    {
                      label: 'Other',
                      value: 'other',
                    },
                  ]
                : []
            }
            required={true}
            validate={[required]}
          />
          {selectedPracticeArea === 'other' && (
            <Field
              component={renderTextField}
              type="text"
              name="practice_area_text"
              label="Other Practice Area"
              placeholder="Enter your Practice Area"
              required={true}
              validate={[required, length]}
            />
          )}
          <Field
            component={renderSelectField}
            type="select"
            name="institution_id"
            label="Organization Name"
            placeholder="Select or enter your Organization"
            options={
              institutions.length
                ? [
                    ...institutions.map(board => ({
                      label: board.name,
                      value: board.id,
                    })),
                    {
                      label: 'Other',
                      value: 'other',
                    },
                  ]
                : []
            }
            required={true}
            validate={[required]}
          />
          {selectedInstitution === 'other' && (
            <Field
              component={renderTextField}
              type="text"
              name="institution_text"
              label="Other Institution"
              placeholder="Enter your Institution"
              required={true}
              validate={[required, length]}
            />
          )}
        </Styled.ResearcherInfo>
        <Styled.FormSubmit {...this.props} canReset active>
          Next
        </Styled.FormSubmit>
      </Styled.SignUpForm>
    );
  }
}

//-----------  Type Definitions  -----------//

ResearcherInfo.propTypes = {
  onSubmit: PropTypes.func,
};

//-----------  Export  -----------//

export default (ResearcherInfo = reduxForm({
  form: 'signup',
  destroyOnUnmount: false, // <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
})(ResearcherInfo));
