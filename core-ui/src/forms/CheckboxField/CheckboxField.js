//-----------  Imports  -----------//

import Styled from './styles';

import React from 'react';
import PropTypes from 'prop-types';

import FieldError from 'forms/FieldError';

//-----------  Component  -----------//

class CheckboxField extends React.PureComponent {
  //-----------  HTML Render  -----------//

  render() {
    const { meta, input, label } = this.props;

    // const id = props.id || input.name;
    const invalid = !!(meta.touched && meta.error);
    // const className = invalid ? errorClass : undefined;

    return (
      <Styled.CheckboxField className="selector-wrapper">
        <input
          type="checkbox"
          id={input.name}
          name={input.name}
          onChange={input.onChange}
        />

        <Styled.FieldLabel htmlFor={input.name} isInvalid={invalid}>
          {label}

          <FieldError isActive={invalid} isInvalid={invalid}>
            {invalid ? meta.error : 'Valid'}
          </FieldError>
        </Styled.FieldLabel>
      </Styled.CheckboxField>
    );
  }
}

//-----------  Type Definitions  -----------//

CheckboxField.propTypes = {
  value: PropTypes.string,
};

//-----------  Export  -----------//

export default CheckboxField;
