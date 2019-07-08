//-----------  Imports  -----------//

import Styled from './styles';

import React from 'react';
import PropTypes from 'prop-types';

import FieldWrapper from '@miro/core-ui/lib/forms/FieldWrapper';

//-----------  Definitions  -----------//

const months = [...Array(12).keys()].map((_, index) => index + 1);
const years = [...Array(120).keys()].map((_, index) => 2018 - index);

//-----------  Component  -----------//

class MonthField extends React.Component {
  //-----------  Event Handlers  -----------//

  handleMonthChange = evt => {
    const {
      sameDiagnosis,
      sameSymptoms,
      copyDiagnosisMonth,
      copySymptomsMonth,
    } = this.props;
    const { value, onChange } = this.props.input;
    const [month, year] = value.split('/');

    onChange(`${evt.target.value}/${year || ''}`);

    if (sameDiagnosis) {
      copyDiagnosisMonth(`${evt.target.value}` || month);
    }

    if (sameSymptoms) {
      copySymptomsMonth(`${evt.target.value}` || month);
    }
  };

  handleYearChange = evt => {
    const {
      sameDiagnosis,
      sameSymptoms,
      copyDiagnosisYear,
      copySymptomsYear,
    } = this.props;
    const { value, onChange } = this.props.input;
    const [month, year] = value.split('/');

    onChange(`${month || ''}/${evt.target.value}`);

    if (sameDiagnosis) {
      copyDiagnosisYear(`${month || ''}/${evt.target.value}` || year);
    }

    if (sameSymptoms) {
      copySymptomsYear(`${month || ''}/${evt.target.value}` || year);
    }
  };

  //-----------  HTML Render  -----------//

  render() {
    const { meta, input, invalid, children, ...props } = this.props;
    let [month, year] = input.value.split('/');

    month = month || '';
    year = year || '';

    return (
      <Styled.MonthField invalid={invalid}>
        {children}

        <Styled.Wrapper>
          <Styled.HalfBlock>
            <h6>Month</h6>
            <select onChange={this.handleMonthChange} value={month || ''}>
              <option disabled value="">
                -
              </option>
              {months.map((value, index) => (
                <option key={index} value={value}>
                  {value}
                </option>
              ))}
            </select>
          </Styled.HalfBlock>
          <Styled.HalfBlock>
            <h6>Year</h6>
            <select onChange={this.handleYearChange} value={year || ''}>
              <option disabled value="">
                -
              </option>
              {years.map((value, index) => (
                <option key={index} value={value}>
                  {value}
                </option>
              ))}
            </select>
          </Styled.HalfBlock>
        </Styled.Wrapper>
      </Styled.MonthField>
    );
  }
}

//-----------  Type Definitions  -----------//

MonthField.propTypes = {
  meta: PropTypes.object.isRequired,
  input: PropTypes.object.isRequired,
  invalid: PropTypes.bool,
  children: PropTypes.node,
};

//-----------  Export  -----------//

export default FieldWrapper(MonthField);
