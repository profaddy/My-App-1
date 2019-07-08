//-----------  Imports  -----------//

import get from 'lodash/get';
import isObject from 'lodash/isObject';

import Styled from './styles';

import React from 'react';
import PropTypes from 'prop-types';

import FieldError from 'forms/FieldError';
import { errorClass } from 'utilities/constants';
import GameCard from 'components/GameCard';

//-----------  Component  -----------//

class CardCheckboxFields extends React.PureComponent {
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
    const { input, options, viewAction, ...props } = this.props;

    return (
      <Styled.CardCheckboxFields>
        {options.map(option => {
          const checked = !!get(input, `value.${option.value}`, false);

          return (
            <Styled.Checkbox key={option.value} className="selector-wrapper">
              <GameCard
                checked={checked}
                input={input}
                content={option}
                viewAction={viewAction}
                checkBoxChange={this.handleChange}
              />
            </Styled.Checkbox>
          );
        })}
      </Styled.CardCheckboxFields>
    );
  }
}

//-----------  Type Definitions  -----------//

CardCheckboxFields.propTypes = {
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
};

//-----------  Export  -----------//

export default CardCheckboxFields;
