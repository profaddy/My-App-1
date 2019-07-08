//-----------  Imports  -----------//

import Styled from './styles';
import React from 'react';
import Switch from 'react-switch';

//-----------  Component  -----------//

const SwitchField = ({ meta, input, label, ...props }) => {
  const id = props.id || input.name;
  const invalid = !!(meta.touched && meta.error);

  const selected = '1' === input.value;
  const onChange = () => input.onChange(selected ? '0' : '1');

  return (
    <Styled.SwitchField isInvalid={invalid}>
      <Styled.FieldLabel htmlFor={id} isInvalid={invalid}>
        {label}
        {!!label && props.required && <sup>*</sup>}
      </Styled.FieldLabel>

      <Styled.FieldWrapper isInvalid={invalid} selected={selected}>
        <Switch
          checked={selected}
          onChange={onChange}
          uncheckedIcon={false}
          checkedIcon={false}
        />
      </Styled.FieldWrapper>
    </Styled.SwitchField>
  );
};

//-----------  Type Definitions  -----------//

SwitchField.propTypes = {
  // type : PropTypes.string.isRequired,
  // name : PropTypes.string.isRequired,
};

//-----------  Export  -----------//

export default SwitchField;
