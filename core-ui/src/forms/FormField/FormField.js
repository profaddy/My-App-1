//-----------  Imports  -----------//

import Styled from './styles';

import React from 'react';
// import PropTypes from 'prop-types';

import FieldError from 'forms/FieldError';
import { errorClass } from 'utilities/constants';

//-----------  Helpers  -----------//

function getInputTag(type, props) {
  switch (type) {
    case 'textarea':
      return <textarea {...props} />;
    case 'select':
      return (
        <select {...props}>
          {props.options.map(option => (
            <option value={option.value}>{option.label}</option>
          ))}
        </select>
      );
    default:
      return <input type={type} {...props} />;
  }
}

//-----------  Component  -----------//

const FormField = ({
  type,
  meta,
  input,
  notes,
  label,
  required,
  warning,
  ...props
}) => {
  const id = props.id || input.name;
  const invalid = !!(meta.submitFailed && meta.error);
  const className = invalid ? errorClass : undefined;

  return (
    <Styled.FormField isInvalid={invalid}>
      <Styled.FieldLabel htmlFor={id} isInvalid={invalid}>
        {label}
        {!!label && required && <sup>*</sup>}

        {notes && <Styled.Notes>{notes}</Styled.Notes>}
      </Styled.FieldLabel>

      <Styled.FieldWrapper isInvalid={invalid}>
        {getInputTag(type, { ...input, ...props, id, className })}

        <FieldError isActive={meta.active} isInvalid={invalid}>
          {invalid ? meta.error : 'Valid'}
        </FieldError>

        <FieldError
          isActive={meta.active}
          isInvalid={!!meta.warning && !invalid}
          warning
        >
          {!!meta.warning && !invalid ? meta.warning : 'Valid'}
        </FieldError>
      </Styled.FieldWrapper>
    </Styled.FormField>
  );
};

//-----------  Type Definitions  -----------//

FormField.propTypes = {
  // type         : PropTypes.string.isRequired,
  // name         : PropTypes.string.isRequired,
  // placeholder  : PropTypes.string,
  // autoComplete : PropTypes.string,
};

//-----------  Export  -----------//

export default FormField;
