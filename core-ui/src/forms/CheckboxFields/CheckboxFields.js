//-----------  Imports  -----------//

import get from 'lodash/get';
import isObject from 'lodash/isObject';

import Styled from './styles';

import React from 'react';
import PropTypes from 'prop-types';

import FieldError from 'forms/FieldError';

//-----------  Component  -----------//

class CheckboxFields extends React.PureComponent {
  //-----------  Event Handlers  -----------//

  handleChange = evt => {
    const { input } = this.props;
    const selection = evt.target.value;

    let values = Object.assign({}, isObject(input.value) ? input.value : {});

    if (get(values, selection, false)) delete values[selection];
    else values[selection] = true;

    return input.onChange(values);
  };

  //-----------  HTML Render  -----------//

  render() {
    const { meta, input, label, options, ...props } = this.props;

    const id = props.id || input.name;
    const invalid = !!(meta.touched && meta.error);

    return (
      <Styled.CheckboxFields>
        <Styled.FieldLabel htmlFor={id} isInvalid={invalid}>
          {label}

          <FieldError isActive={invalid} isInvalid={invalid}>
            {invalid ? meta.error : 'Valid'}
          </FieldError>
        </Styled.FieldLabel>

        {options.map(option => {
          const checked = !!get(input, `value.${option.value}`, false);

          return (
            <Styled.Checkbox key={option.value} className="selector-wrapper">
              <input
                type="checkbox"
                id={input.name + option.value}
                name={input.name}
                checked={checked}
                onChange={this.handleChange}
                value={option.value}
              />
              <label htmlFor={input.name + option.value}>{option.label}</label>
            </Styled.Checkbox>
          );
        })}
      </Styled.CheckboxFields>
    );
  }
}

//-----------  Type Definitions  -----------//

CheckboxFields.propTypes = {
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
};

//-----------  Export  -----------//

export default CheckboxFields;
