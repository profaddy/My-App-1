//-----------  Imports  -----------//

import Styled from './styles';
import get from 'lodash/get';
import fields from './config';
// import { renderTextField, renderSelectField } from 'components/InputFields';
import React from 'react';
import PropTypes from 'prop-types';
import { reduxForm, Field, stopSubmit } from 'redux-form';

import FormField from '@miro/core-ui/lib/forms/FormField';
import FormSubmit from '@miro/core-ui/lib/forms/FormSubmit';
import Button from '@miro/core-ui/lib/components/Button';
import FileUploader from 'components/FileUploader';
import validator from 'validator';

//-----------  Validation  -----------//

const required = value =>
  value || typeof value === 'number' ? undefined : 'Required';

const maxLength = (value = '') =>
  validator.isLength(value, { min: 0, max: 255 })
    ? undefined
    : 'Max 255 characters  are allowed';

const irbNumber = value => {
  const irbPattern = /[^0-9a-z- ]/i;
  return !validator.matches(value, irbPattern)
    ? undefined
    : 'Only A-Z, a-z, 0-9, hyphen and space are allowed';
};

const fileName = value => {
  return validator.isLength(get(value, 'name', ''), { min: 0, max: 100 })
    ? undefined
    : 'Filename should be max 100 characters';
};

//-----------  Component  -----------//
export const CreateStudyForm = ({
  handleSubmit,
  studyTypes,
  cancel,
  change,
  setFileError,
  fileError,
  ...props
}) => {
  return (
    <Styled.CreateStudyForm onSubmit={handleSubmit}>
      <Styled.Heading>Create Study</Styled.Heading>
      {/* fields.map(({ ...field }, index) => (
        <Field key={index} {...field} component={FormField} />
      )) */}

      <Field
        type="text"
        name="name"
        label="Study Name"
        required={true}
        validate={[required, maxLength]}
        component={FormField}
      />
      <Field
        type="text"
        name="irb_no"
        label="Approved IRB Number"
        required={true}
        validate={[required, maxLength, irbNumber]}
        component={FormField}
      />
      <Field
        type="text"
        name="sponsor"
        label="Sponsor"
        required={false}
        validate={[maxLength]}
        component={FormField}
      />
      <Field
        type="textarea"
        name="description"
        label="Study Description"
        required={true}
        validate={[required, maxLength]}
        component={FormField}
      />

      {!!studyTypes.length && (
        <Field
          name="type"
          type="select"
          label="Study Type"
          required={true}
          options={[
            {},
            ...studyTypes.map(type => ({
              label: `${type.description} (${type.code})`,
              value: type.id,
            })),
          ]}
          component={FormField}
          validate={[required]}
        />
      )}
      <label>Consent Upload*</label>
      <FileUploader
        {...props}
        accept="application/pdf"
        fileTypeInfo=".pdf"
        onChange={file => {
          setFileError(fileName(file));
          change('consentform', file);
        }}
        hideButton={true}
        error={fileError}
      />
      <p>
        Make sure your file is ready for import.
        {/*  <a href="">Learn More</a> */}
      </p>

      <Styled.Button onClick={cancel}>Cancel</Styled.Button>

      <FormSubmit
        {...props}
        canReset
        active
        disabled={fileError ? true : false}
      >
        Create Study
      </FormSubmit>
    </Styled.CreateStudyForm>
  );
};

//-----------  Type Definitions  -----------//

CreateStudyForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

//-----------  Export  -----------//

export default reduxForm({
  form: 'CreateStudyForm',
})(CreateStudyForm);
