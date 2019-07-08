//-----------  Imports  -----------//

import Styled               from './styles'

import fields, { form }     from './config'
import validate             from 'utilities/validation'

import React                from 'react'
import PropTypes            from 'prop-types'
import { reduxForm, Field } from 'redux-form'

import Label                from 'components/Label'
import Button               from '@miro/core-ui/lib/components/Button'
import FormSubmit           from '@miro/core-ui/lib/forms/FormSubmit'

import FormWrapper          from 'components/FormWrapper'

//-----------  Component  -----------//

export const CapacityForm = ({ onExit, handleSubmit, ...props }) => (
  <Styled.CapacityForm noValidate onSubmit={handleSubmit}>
    <FormWrapper.FormContent>
      {fields.map(({ notes, label, component, ...field }, index) => (
        <Field
          key={index}
          { ...field }
          label={<Label notes={notes}>{label}</Label>}
          component={component}
        />
      ))}
    </FormWrapper.FormContent>

    <FormWrapper.FormActions>
      <Button onClick={onExit} disabled={props.submitting}>
        Back
      </Button>
      <FormSubmit canReset {...props}>
        Submit
      </FormSubmit>
    </FormWrapper.FormActions>
  </Styled.CapacityForm>
)

//-----------  Type Definitions  -----------//

CapacityForm.propTypes = {
  onExit           : PropTypes.func.isRequired,
  onSubmit         : PropTypes.func.isRequired,
  onSubmitSucccess : PropTypes.func,
  initialValues    : PropTypes.object,
}

//-----------  Export  -----------//

export default reduxForm({
  form             : form,
  validate         : validate(fields),
  destroyOnUnmount : false,
})(CapacityForm)
