//-----------  Imports  -----------//

import Styled               from './styles'

import { form,
         psychBase,
         neuroBase,
         psychPrimary,
         neuroPrimary }     from './config'
import validation           from './validation'

import React                from 'react'
import PropTypes            from 'prop-types'
import { reduxForm, Field } from 'redux-form'

import Label                from 'components/Label'
import FormWrapper          from 'components/FormWrapper'

//-----------  Component  -----------//

export const MedicalConditionsQuestionnaire = ({ hasPsych, hasNeuro, ...props }) => (
  <Styled.MedicalConditionsQuestionnaire>
    {psychBase.map(({ notes, label, context, validate, ...field }, index) => (
      <Field
        key={index}
        { ...field }
        label={<Label notes={notes}>{label}</Label>}
      />
    ))}

    <Styled.ConditionsBlock visible={hasPsych}>
      {hasPsych && psychPrimary.map(({ notes, label, context, validate, ...field }, index) => (
        <Field
          key={index}
          { ...field }
          label={<Label notes={notes}>{label}</Label>}
        />
      ))}
    </Styled.ConditionsBlock>

    {neuroBase.map(({ notes, label, context, validate, ...field }, index) => (
      <Field
        key={index}
        { ...field }
        label={<Label notes={notes}>{label}</Label>}
      />
    ))}

    {hasNeuro && (
      <Styled.ConditionsBlock visible={hasNeuro}>
        {neuroPrimary.map(({ notes, label, context, validate, ...field }, index) => (
          <Field
            key={index}
            { ...field }
            label={<Label notes={notes}>{label}</Label>}
          />
        ))}
      </Styled.ConditionsBlock>
    )}
  </Styled.MedicalConditionsQuestionnaire>
)

//-----------  Type Definitions  -----------//

MedicalConditionsQuestionnaire.propTypes = {
  hasPsych      : PropTypes.bool.isRequired,
  hasNeuro      : PropTypes.bool.isRequired,
  initialValues : PropTypes.object,
}

//-----------  Export  -----------//

export default reduxForm({
  form     : form,
  validate : validation,
  ...FormWrapper.ReduxDefaults
})(FormWrapper(MedicalConditionsQuestionnaire))