//-----------  Imports  -----------//

import Styled        from './styles'

import { form }      from './config'

import React         from 'react'
import PropTypes     from 'prop-types'
import { reduxForm } from 'redux-form'

import FormSubmit    from '@miro/core-ui/lib/forms/FormSubmit'

import FormWrapper   from 'components/FormWrapper'

//-----------  Component  -----------//

const ConsentForm = ({ handleSubmit, ...props }) => (
  <Styled.ConsentForm noValidate onSubmit={handleSubmit}>
    <FormWrapper.FormActions>
      <FormSubmit canReset {...props}>
        Next
      </FormSubmit>
    </FormWrapper.FormActions>
  </Styled.ConsentForm>
)

//-----------  Type Definitions  -----------//

ConsentForm.propTypes = {
  onSubmit         : PropTypes.func.isRequired,
  onSubmitSucccess : PropTypes.func,
  initialValues    : PropTypes.object,
}

//-----------  Export  -----------//

export default reduxForm({
  form             : form,
  destroyOnUnmount : false,
})(ConsentForm)
