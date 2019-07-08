//-----------  Imports  -----------//

import Styled from './styles';

import React from 'react';
import PropTypes from 'prop-types';
import Switch from 'react-switch';

import { errorClass } from '@miro/core-ui/lib/utilities/constants';

//-----------  Component  -----------//

const SwitchField = ({ meta, input, label, ...props }) => {
  const id = props.id || input.name;
  const invalid = !!(meta.touched && meta.error);
  const className = invalid ? errorClass : undefined;

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
