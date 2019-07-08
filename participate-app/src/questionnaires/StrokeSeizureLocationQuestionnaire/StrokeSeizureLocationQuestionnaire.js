//-----------  Imports  -----------//

import chunk                  from 'lodash/chunk'
import isEmpty                from 'lodash/isEmpty'

import Styled                 from './styles'

import createFields,
       { form, types, spots } from './config'
import validation             from './validation'

import React                  from 'react'
import PropTypes              from 'prop-types'
import { reduxForm, Field }   from 'redux-form'

import Label                  from 'components/Label'
import FormWrapper            from 'components/FormWrapper'

//-----------  Component  -----------//

export const StrokeSeizureLocationQuestionnaire = ({ conditions, ...props }) => {
  if (isEmpty(conditions))
    return null

  const groups = chunk(createFields(conditions), types.length + 2)

  return (
    <Styled.StrokeSeizureLocationQuestionnaire>
      {groups.map((condition, x) => {
        const [ type, unknown, ...locations ] = condition

        return (
          <Styled.Condition key={x}>
            <Styled.Type>
              <Field {...type} label={<Label>{type.label}</Label>} />
            </Styled.Type>
            <Styled.Unknown>
              <Field {...unknown} />
            </Styled.Unknown>
            <Styled.Header>
              <div />
              {spots.map(spot => (
                <h5 key={spot}>{spot}</h5>
              ))}
            </Styled.Header>
            {locations.map(({ notes, validate, ...field }, y) => (
              <Styled.Types key={y}>
                <Field {...field} />
              </Styled.Types>
            ))}
          </Styled.Condition>
        )
      })}
    </Styled.StrokeSeizureLocationQuestionnaire>
  )
}

//-----------  Type Definitions  -----------//

StrokeSeizureLocationQuestionnaire.propTypes = {
  conditions    : PropTypes.array,
  initialValues : PropTypes.object,
}

//-----------  Export  -----------//

export default reduxForm({
  form     : form,
  validate : validation,
  ...FormWrapper.ReduxDefaults
})(FormWrapper(StrokeSeizureLocationQuestionnaire))