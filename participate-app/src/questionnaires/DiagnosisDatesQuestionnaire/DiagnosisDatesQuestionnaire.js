//-----------  Imports  -----------//

import chunk from 'lodash/chunk';
import isEmpty from 'lodash/isEmpty';

import Styled from './styles';

import createFields, { form } from './config';
import validation from './validation';

import React from 'react';
import PropTypes from 'prop-types';
import { reduxForm, Field } from 'redux-form';

import Label from 'components/Label';
import FormWrapper from 'components/FormWrapper';

//-----------  Component  -----------//

export class DiagnosisDatesQuestionnaire extends React.Component {
  state = {
    sameDiagnosis: false,
    sameSymptoms: false,
    diagnosisValue: '',
    symptomsValue: '',
  };

  getConditions = () => {
    return chunk(createFields(this.props.conditions), 3);
  };

  handleDiagnossischeck = evt => {
    const isChecked = evt.target.checked;
    if (!isChecked) {
      this.getConditions().map(condition => {
        this.props.change(`${condition[1].name}`, '');
      });
    }
    this.setState({ sameDiagnosis: isChecked });
  };

  handleSymptomscheck = evt => {
    const isChecked = evt.target.checked;
    if (!isChecked) {
      this.getConditions().map(condition => {
        this.props.change(`${condition[2].name}`, '');
      });
    }
    this.setState({ sameSymptoms: isChecked });
  };

  copyDiagnosisMonth = value => {
    value &&
      this.setState({ diagnosisValue: value }, () => {
        this.getConditions().map(condition => {
          this.props.change(`${condition[1].name}`, this.state.diagnosisValue);
        });
      });
  };

  copyDiagnosisYear = value => {
    value &&
      this.setState({ diagnosisValue: value }, () => {
        this.getConditions().map(condition => {
          this.props.change(`${condition[1].name}`, this.state.diagnosisValue);
        });
        this.setState({ sameDiagnosis: false });
      });
  };

  copySymptomsMonth = value => {
    value &&
      this.setState({ symptomsValue: value }, () => {
        this.getConditions().map(condition => {
          this.props.change(`${condition[2].name}`, this.state.symptomsValue);
        });
      });
  };

  copySymptomsYear = value => {
    value &&
      this.setState({ symptomsValue: value }, () => {
        this.getConditions().map(condition => {
          this.props.change(`${condition[2].name}`, this.state.symptomsValue);
        });
        this.setState({ sameSymptoms: false });
      });
  };

  //-----------  HTML Render  -----------//

  render() {
    const { conditions, ...props } = this.props;
    const { sameDiagnosis, sameSymptoms } = this.state;

    if (isEmpty(conditions)) return null;

    const groups = this.getConditions();

    return (
      <Styled.DiagnosisDatesQuestionnaire>
        <Styled.Header>
          <Styled.Row>
            <div>
              <h4>Condition</h4>
            </div>
            <div>
              <h4>Date of Diagnosis</h4>
            </div>
            <div>
              <h4>Date of First Symptoms</h4>
            </div>
          </Styled.Row>
          <Styled.Row>
            <div />
            <div className="conditionsCheckbox">
              <input
                type="checkbox"
                id="sameDiagnosis"
                onClick={this.handleDiagnossischeck}
              />
              <label className="" htmlFor="sameDiagnosis">
                same date for all conditions
              </label>
            </div>
            <div className="conditionsCheckbox">
              <input
                type="checkbox"
                id="sameSymptoms"
                onClick={this.handleSymptomscheck}
              />
              <label htmlFor="sameSymptoms">same date for all conditions</label>
            </div>
          </Styled.Row>
        </Styled.Header>

        <Styled.Conditions>
          {groups.map((condition, x) => (
            <Styled.Condition key={x}>
              {condition.map(
                ({ notes, label, validate, component, ...field }, y) => (
                  <Field
                    key={y}
                    {...field}
                    label={<Label>{label}</Label>}
                    component={component}
                    sameDiagnosis={sameDiagnosis}
                    sameSymptoms={sameSymptoms}
                    copyDiagnosisMonth={this.copyDiagnosisMonth}
                    copySymptomsMonth={this.copySymptomsMonth}
                    copySymptomsYear={this.copySymptomsYear}
                    copyDiagnosisYear={this.copyDiagnosisYear}
                  />
                ),
              )}
            </Styled.Condition>
          ))}
        </Styled.Conditions>
      </Styled.DiagnosisDatesQuestionnaire>
    );
  }
}

//-----------  Type Definitions  -----------//

DiagnosisDatesQuestionnaire.propTypes = {
  conditions: PropTypes.array,
  initialValues: PropTypes.object,
};

//-----------  Export  -----------//

export default reduxForm({
  form: form,
  validate: validation,
  ...FormWrapper.ReduxDefaults,
})(FormWrapper(DiagnosisDatesQuestionnaire));
