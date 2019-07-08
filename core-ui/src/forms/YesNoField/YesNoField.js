//-----------  Imports  -----------//

import noop from 'lodash/noop';
import Styled from './styles';
import React from 'react';
import FieldError from 'forms/FieldError';

//-----------  Component  -----------//

const YesNoField = ({ meta, input, label, correct, required, ...props }) => {
  const id = props.id || input.name;
  const invalid = !!(meta.touched && meta.error);

  const onMouseOut = meta.submitFailed ? input.onBlur : noop;
  const onMouseOver = meta.submitFailed ? input.onFocus : noop;

  return (
    <Styled.YesNoField
      isInvalid={invalid}
      onMouseOver={onMouseOver}
      onMouseOut={onMouseOut}
    >
      <Styled.FieldLabel htmlFor={id} isInvalid={invalid}>
        {label}
        {!!label && props.required && <sup>*</sup>}
      </Styled.FieldLabel>

      <Styled.FieldWrapper isInvalid={invalid}>
        <Styled.YesNo
          onClick={() => input.onChange('1')}
          selected={'1' === input.value}
        >
          Yes
        </Styled.YesNo>
        <Styled.YesNo
          onClick={() => input.onChange('0')}
          selected={'0' === input.value}
        >
          No
        </Styled.YesNo>

        <FieldError isActive={meta.active} isInvalid={invalid}>
          {invalid ? meta.error : 'Valid'}
        </FieldError>
      </Styled.FieldWrapper>
    </Styled.YesNoField>
  );
};

//-----------  Type Definitions  -----------//

YesNoField.propTypes = {
  // type : PropTypes.string.isRequired,
  // name : PropTypes.string.isRequired,
};

//-----------  Export  -----------//

export default YesNoField;
