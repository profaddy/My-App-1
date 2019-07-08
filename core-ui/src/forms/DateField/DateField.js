//-----------  Imports  -----------//

import Styled from './styles';
import React from 'react';
import DatePicker from 'react-datepicker';
import FieldError from 'forms/FieldError';
import CalendarIcon from 'assets/icons/calendar.svg';

//-----------  Component  -----------//

const DateField = ({ meta, input, label, required, ...props }) => {
  const id = props.id || input.name;
  const active = !!meta.active;
  const invalid = !!(meta.touched && meta.error);
  return (
    <Styled.DateField isInvalid={invalid}>
      <Styled.FieldLabel htmlFor={id} isInvalid={invalid}>
        {label}
        {!!label && props.required && <sup>*</sup>}
      </Styled.FieldLabel>

      <Styled.FieldWrapper isInvalid={invalid}>
        <DatePicker
          selected={input.value}
          onChange={input.onChange}
          dateFormat={'D MMM YYYY'}
          {...props}
        />
        <Styled.Icon>
          <CalendarIcon />
        </Styled.Icon>
        <FieldError isActive={active} isInvalid={invalid}>
          {invalid ? meta.error : 'Valid'}
        </FieldError>
      </Styled.FieldWrapper>
    </Styled.DateField>
  );
};

//-----------  Type Definitions  -----------//

DateField.propTypes = {
  // type : PropTypes.string.isRequired,
  // name : PropTypes.string.isRequired,
};

//-----------  Export  -----------//

export default DateField;
