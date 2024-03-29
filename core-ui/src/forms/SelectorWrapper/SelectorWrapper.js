//-----------  Imports  -----------//

import Styled from './styles';

import React from 'react';
import PropTypes from 'prop-types';

import { Field } from 'redux-form';

//-----------  Component  -----------//

const SelectorWrapper = ({ id, label, input, invalid, children, ...props }) => (
  <Styled.SelectorWrapper invalid={invalid} input={input}>
    <input id={id} {...props} />

    <label htmlFor={id}>{label}</label>

    {input && (
      <Styled.InputWrapper visible={props.checked}>
        <Field
          type="text"
          name={[props.name, props.value].join('_')}
          placeholder="please specify..."
          disabled={!props.checked}
          required={props.checked}
          component="input"
        />
      </Styled.InputWrapper>
    )}

    {children}
  </Styled.SelectorWrapper>
);

//-----------  Type Definitions  -----------//

SelectorWrapper.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['radio', 'checkbox']).isRequired,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  value: PropTypes.any,
  input: PropTypes.bool,
  checked: PropTypes.bool,
  invalid: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  children: PropTypes.element,
};

//-----------  Export  -----------//

export default SelectorWrapper;
