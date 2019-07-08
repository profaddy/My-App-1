//-----------  Imports  -----------//

import get                    from 'lodash/get'
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

export const PrescriptionsQuestionnaire = ({ conditions, prescriptions, ...props }) => {
  if (isEmpty(conditions))
    return null

  const groups = chunk(createFields(conditions), 4)

  return (
    <Styled.PrescriptionsQuestionnaire>
      <Styled.Header>
        <Styled.Row>
          <div><h4>Condition</h4></div>
          <div><h4>Do you currently use prescribed medications for the following conditions?</h4></div>
        </Styled.Row>
      </Styled.Header>

      <Styled.Conditions>
        {groups.map((condition, x) => {
          const split = chunk(condition, 2)
          const show  = ('yes' === get(prescriptions, split[1][0].group))

          return (
            <React.Fragment key={x}>
              <Styled.Condition>
                {split[0].map(({ notes, label, validate, component, ...field }, y) => (
                  <Field key={y} {...field} label={<Label>{label}</Label>} component={component} />
                ))}
              </Styled.Condition>

              <Styled.Hidden visible={show}>
                {split[1].map(({ notes, label, group, validate, component, ...field }, y) => (
                  <Field
                    key={y}
                    {...field}
                    label={<Label>{label}</Label>}
                    component={component}
                  />
                ))}
              </Styled.Hidden>
            </React.Fragment>
          )
        })}
      </Styled.Conditions>
    </Styled.PrescriptionsQuestionnaire>
  )
}

//-----------  Type Definitions  -----------//

PrescriptionsQuestionnaire.propTypes = {
  conditions    : PropTypes.array,
  prescriptions : PropTypes.object,
  initialValues : PropTypes.object,
}

//-----------  Export  -----------//

export default reduxForm({
  form     : form,
  validate : validation,
  ...FormWrapper.ReduxDefaults
})(FormWrapper(PrescriptionsQuestionnaire))