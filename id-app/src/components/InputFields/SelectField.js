import React from 'react';
import Styled from './style';
import vars from '@miro/core-ui/src/styles/variables';

export default ({
  input,
  label,
  required,
  placeholder,
  meta: { touched, error, warning },
  options,
  ...rest
}) => (
  <div style={{ margin: '2rem 0' }}>
    <label>
      {label}
      <span style={{ color: 'tomato' }}>{required && '*'}</span>
    </label>
    <div>
      <select
        {...input}
        {...rest}
        {...touched && {
          style: {
            border: `1px solid ${error ? 'tomato' : vars.blueDark}`,
          },
        }}
      >
        <option key="placeholder" value="" disabled>
          {placeholder || label}
        </option>
        {options.map(option => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {touched &&
        ((error && <Styled.ErrorSpan>{error}</Styled.ErrorSpan>) ||
          (warning && <span>{warning}</span>))}
    </div>
  </div>
);
