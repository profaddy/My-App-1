//-----------  Imports  -----------//

import filter from 'lodash/filter';

import Styled from './styles';

import fields, { formID, formTitle, visualList } from './config';

import validate from 'utilities/validation';

import React from 'react';
import PropTypes from 'prop-types';
import { reduxForm, Field } from 'redux-form';

import SwitchField from 'components/SwitchField';
import TestWrapper from 'containers/TestWrapper';
import FormField from '@miro/core-ui/lib/forms/FormField';

//-----------  Component  -----------//

export const MocaTest = ({ calculated, ...props }) => {
  const { total, isBlind } = calculated;

  const filtered = isBlind
    ? filter(fields, ({ name }) => !visualList.includes(name))
    : fields;

  const [blind, ...inputs] = filtered;

  return (
    <TestWrapper.Block>
      <Styled.MocaTest>
        <Field {...blind} component={SwitchField} />

        {inputs.map(({ validate, ...field }, index) => (
          <Field
            key={index}
            {...field}
            component={FormField}
            autoFocus={0 == index}
          />
        ))}

        <TestWrapper.Footer>
          <TestWrapper.Total>Total Score: {total}</TestWrapper.Total>
        </TestWrapper.Footer>
      </Styled.MocaTest>
    </TestWrapper.Block>
  );
};

//-----------  Type Definitions  -----------//

MocaTest.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  initialValues: PropTypes.object,
  calculated: PropTypes.shape({
    total: PropTypes.number.isRequired,
  }).isRequired,
};

//-----------  Export  -----------//

export default reduxForm({
  id: formID,
  form: 'MocaTest',
  title: formTitle,
  validate: validate(fields),
  ...TestWrapper.ReduxDefaults,
})(TestWrapper(MocaTest));
