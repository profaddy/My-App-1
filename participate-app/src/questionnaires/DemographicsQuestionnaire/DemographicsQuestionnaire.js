//-----------  Imports  -----------//

import Styled               from './styles'

import fields, { form }     from './config'
import validation           from './validation'

import React                from 'react'
import PropTypes            from 'prop-types'
import { reduxForm, Field } from 'redux-form'

import Label                from 'components/Label'
import FormWrapper          from 'components/FormWrapper'

import validate             from 'utilities/validation'

//-----------  Component  -----------//

export const DemographicsQuestionnaire = (props) => (
  <Styled.DemographicsQuestionnaire>
    {fields.map(({ notes, label, validate, component, ...field }, index) => (
      <Field
        key={index}
        { ...field }
        label={
          <Label notes={notes}>{label}</Label>
        }
        component={component}
      />
    ))}
  </Styled.DemographicsQuestionnaire>
)

//-----------  Type Definitions  -----------//

DemographicsQuestionnaire.propTypes = {
  initialValues : PropTypes.object,
  over18        : PropTypes.bool,
}

//-----------  Export  -----------//

export default reduxForm({
  form     : form,
  validate : validate(fields, validation),
  ...FormWrapper.ReduxDefaults
})(FormWrapper(DemographicsQuestionnaire))
