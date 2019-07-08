import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';

const normalizeBoolean = value => {
  if (value === 'true') {
    return true;
  }

  if (value === 'false') {
    return false;
  }

  return value;
};

const radioButtonGenerator = ({
  input,
  options,
  meta: { touched, error, warning },
}) => (
  <div>
    {options.map(o => {
      const inputRef = React.createRef();
      return (
        <div
          className="selector-wrapper"
          key={o.value}
          onClick={() => {
            inputRef.current.click();
          }}
        >
          <input
            type="radio"
            {...input}
            value={o.value}
            checked={o.value === input.value}
            ref={inputRef}
          />
          <label htmlFor={o.value}>{o.label}</label>
        </div>
      );
    })}
  </div>
);

export const RadioButton = ({ content }) => (
  <Field
    component={radioButtonGenerator}
    name={content.id}
    id={content.id}
    options={content.options}
    normalize={normalizeBoolean}
  />
);

RadioButton.propTypes = {
  content: PropTypes.object.isRequired,
};
