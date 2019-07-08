//-----------  Imports  -----------//

import Styled from './styles';

import fields, { formID, formTitle } from './config';

import validate from 'utilities/validation';

import React from 'react';
import PropTypes from 'prop-types';
import { reduxForm, Field } from 'redux-form';

import TestWrapper from 'containers/TestWrapper';
import FormField from '@miro/core-ui/lib/forms/FormField';

//-----------  Component  -----------//

export const TicsTest = ({ calculated, ...props }) => {
  const { total } = calculated;

  return (
    <TestWrapper.Block>
      <Styled.TicsTest>
        {fields.map(({ validate, ...field }, index) => (
          <Field
            key={index}
            {...field}
            component={FormField}
            autoFocus={0 === index}
          />
        ))}

        <TestWrapper.Footer>
          <TestWrapper.Total>Total Score: {total}</TestWrapper.Total>
        </TestWrapper.Footer>
      </Styled.TicsTest>
    </TestWrapper.Block>
  );
};

//-----------  Type Definitions  -----------//

TicsTest.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  initialValues: PropTypes.object,
  calculated: PropTypes.shape({
    total: PropTypes.number.isRequired,
  }).isRequired,
};

//-----------  Export  -----------//

export default reduxForm({
  id: formID,
  form: 'TicsTest',
  title: formTitle,
  validate: validate(fields),
  ...TestWrapper.ReduxDefaults,
  enableReinitialize: true,
})(TestWrapper(TicsTest));
