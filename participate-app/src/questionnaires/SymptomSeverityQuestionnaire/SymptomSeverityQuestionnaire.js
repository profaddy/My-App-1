//-----------  Imports  -----------//

import chunk                  from 'lodash/chunk'
import isEmpty                from 'lodash/isEmpty'

import Styled                 from './styles'

import createFields, { form } from './config'
import validation             from './validation'

import React                  from 'react'
import PropTypes              from 'prop-types'
import { reduxForm, Field }   from 'redux-form'

import Label                  from 'components/Label'
import FormWrapper            from 'components/FormWrapper'

//-----------  Component  -----------//

export const SymptomSeverityQuestionnaire = ({ conditions, ...props }) => {
  if (isEmpty(conditions))
    return null

  const groups = chunk(createFields(conditions), 2)

  return (
    <Styled.SymptomSeverityQuestionnaire>
      <Styled.Header>
        <Styled.Row>
          <div>
            <h4>Condition</h4>
          </div>
          <div>
            <h4>Current Symptom Rating</h4>
          </div>
        </Styled.Row>
        <Styled.Row>
          <div />
          <div>
            <h6>Asymptomatic</h6>
            <h6>Mild</h6>
            <h6>Moderate</h6>
            <h6>Severe</h6>
          </div>
        </Styled.Row>
      </Styled.Header>

      <Styled.Conditions>
        {groups.map((condition, x) => (
          <Styled.Condition key={x}>
            {condition.map(({ notes, label, validate, component, ...field }, y) => (
              <Field key={y} {...field} label={<Label>{label}</Label>} component={component} />
            ))}
          </Styled.Condition>
        ))}
      </Styled.Conditions>
    </Styled.SymptomSeverityQuestionnaire>
  )
}

//-----------  Type Definitions  -----------//

SymptomSeverityQuestionnaire.propTypes = {
  conditions    : PropTypes.array,
  initialValues : PropTypes.object,
}

//-----------  Export  -----------//

export default reduxForm({
  form     : form,
  validate : validation,
  ...FormWrapper.ReduxDefaults
})(FormWrapper(SymptomSeverityQuestionnaire))