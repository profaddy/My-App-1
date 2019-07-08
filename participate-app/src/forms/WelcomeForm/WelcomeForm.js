//-----------  Imports  -----------//

import Styled               from './styles'

import fields, { form }     from './config'
import validate             from 'utilities/validation'

import React                from 'react'
import PropTypes            from 'prop-types'
import { reduxForm, Field } from 'redux-form'

import Label                from 'components/Label'
import FormSubmit           from '@miro/core-ui/lib/forms/FormSubmit'

import DeskImage            from 'assets/images/desk.svg'

//-----------  Component  -----------//

const WelcomeForm = ({ submitting, handleSubmit, ...props }) => (
  <Styled.WelcomeForm noValidate onSubmit={handleSubmit}>
    <div>
      <h1>WELCOME</h1>
      <p>Enter your email below to get started!</p>

      {fields.map(({ notes, label, validate, ...field }, index) => (
        <Field
          key={index}
          { ...field }
          label={<Label notes={notes}>{label}</Label>}
        />
      ))}

      <FormSubmit disabled={submitting} canReset {...props}>
        Get Started
      </FormSubmit>
    </div>
    <DeskImage />
  </Styled.WelcomeForm>
)

//-----------  Type Definitions  -----------//

WelcomeForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}

//-----------  Export  -----------//

export default reduxForm({
  form     : form,
  validate : validate(fields)
})(WelcomeForm)
