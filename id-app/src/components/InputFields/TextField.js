import React from 'react';
import Styled from './style';
import vars from '@miro/core-ui/src/styles/variables';

export default ({
  input,
  label,
  type,
  required,
  placeholder,
  meta: { touched, error, warning },
  ...rest
}) => (
  <div style={{ margin: '2rem 0' }}>
    <label>
      {label}
      <span style={{ color: 'tomato' }}>{required && '*'}</span>
    </label>
    <div>
      <input
        {...input}
        {...rest}
        type={type}
        placeholder={placeholder || label}
        {...touched && {
          style: {
            border: `1px solid ${error ? 'tomato' : vars.blueDark}`,
          },
        }}
      />
      {touched &&
        ((error && <Styled.ErrorSpan>{error}</Styled.ErrorSpan>) ||
          (warning && <span>{warning}</span>))}
    </div>
  </div>
);
