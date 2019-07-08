//-----------  Imports  -----------//

import Styled               from './styles'

import fields, { form }     from './config'
import validate             from 'utilities/validation'

import React                from 'react'
import PropTypes            from 'prop-types'
import { reduxForm, Field } from 'redux-form'

import Label                from 'components/Label'
import FormWrapper          from 'components/FormWrapper'

//-----------  Component  -----------//

export const MedicalHistoryQuestionnaire = (props) => (
  <Styled.MedicalHistoryQuestionnaire>
    <p><strong>Do you have or have you had:</strong></p>
    {fields.map(({ notes, label, validate, component, ...field }, index) => (
      <Field
        key={index}
        { ...field }
        label={<Label notes={notes}>{label}</Label>}
        component={component}
      />
    ))}
  </Styled.MedicalHistoryQuestionnaire>
)

//-----------  Type Definitions  -----------//

MedicalHistoryQuestionnaire.propTypes = {
  initialValues: PropTypes.object,
}

//-----------  Export  -----------//

export default reduxForm({
  form     : form,
  validate : validate(fields),
  ...FormWrapper.ReduxDefaults
})(FormWrapper(MedicalHistoryQuestionnaire))