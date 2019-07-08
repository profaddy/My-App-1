//-----------  Imports  -----------//

import Styled from './styles';
import React from 'react';
import PropTypes from 'prop-types';
import FieldError from 'forms/FieldError';

//-----------  Component  -----------//

class RadioFields extends React.PureComponent {
  //-----------  Event Handlers  -----------//

  handleChange = evt => {
    const { input } = this.props;
    const selection = evt.target.value;

    return input.onChange({ [selection]: true });
  };

  //-----------  HTML Render  -----------//

  render() {
    const { meta, input, label, options, ...props } = this.props;

    const id = props.id || input.name;
    const invalid = !!(meta.touched && meta.error);

    return (
      <Styled.RadioFields>
        <Styled.FieldLabel htmlFor={id} isInvalid={invalid}>
          {label}
          {!!label && props.required && <sup>*</sup>}

          <FieldError isActive={invalid} isInvalid={invalid}>
            {invalid ? meta.error : 'Valid'}
          </FieldError>
        </Styled.FieldLabel>

        {options.map(option => {
          // const checked = !!get(input, `value.${option}`, false);

          return (
            <div key={option} className="selector-wrapper">
              <input
                type="radio"
                id={input.name + option}
                name={input.name}
                // checked={checked}
                onChange={this.handleChange}
                value={option}
              />
              <label htmlFor={input.name + option}>{option}</label>
            </div>
          );
        })}
      </Styled.RadioFields>
    );
  }
}

//-----------  Type Definitions  -----------//

RadioFields.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
};

//-----------  Export  -----------//

export default RadioFields;
