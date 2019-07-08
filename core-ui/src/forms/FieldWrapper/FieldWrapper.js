//-----------  Imports  -----------//

import get from 'lodash/get';

import Styled from './styles';

import React from 'react';
import PropTypes from 'prop-types';

import FieldError from 'forms/FieldError';

import { errorClass } from 'utilities/constants';

//-----------  Component  -----------//

const FieldWrapper = (Field, showLabel = true) => props => {
  const LabelComponent = get(props, 'labelWrapper') || Styled.Label;

  const label = get(props, 'label');
  const required = get(props, 'required');
  const fieldID = get(props, 'id') || get(props, 'input.name', '');
  const invalid = !!(
    get(props, 'meta.touched', false) && get(props, 'meta.error', false)
  );
  let classNames = ['miro-field'];

  if (invalid) classNames.push(errorClass);

  if (get(props, 'type')) classNames.push(`miro-field-${get(props, 'type')}`);

  return (
    <Styled.FieldWrapper className={classNames.join(' ')}>
      <Field id={fieldID} invalid={invalid} {...props}>
        {showLabel ? (
          <LabelComponent required={required} empty={!label}>
            {label}

            <FieldError isActive={invalid} isInvalid={invalid}>
              {invalid ? get(props, 'meta.error', false) : 'Valid'}
            </FieldError>
          </LabelComponent>
        ) : (
          <FieldError isActive={invalid} isInvalid={invalid}>
            {invalid ? get(props, 'meta.error', false) : 'Valid'}
          </FieldError>
        )}
      </Field>
    </Styled.FieldWrapper>
  );
};

//-----------  Type Definitions  -----------//

FieldWrapper.propTypes = {
  type: PropTypes.string,
  meta: PropTypes.object.isRequired,
  input: PropTypes.object.isRequired,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
};

//-----------  Export  -----------//

export default FieldWrapper;
