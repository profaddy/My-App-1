//-----------  Imports  -----------//

import Styled                   from './styles'

import { form,
         baseFields,
         participantFields,
         representativeFields } from './config'
import validate                 from './validation'

import React                    from 'react'
import PropTypes                from 'prop-types'
import { reduxForm, Field }     from 'redux-form'

import Label                    from 'components/Label'
import Button                   from '@miro/core-ui/lib/components/Button'
import FormSubmit               from '@miro/core-ui/lib/forms/FormSubmit'

import ProviderFields           from 'forms/ProviderFields'

import FormWrapper              from 'components/FormWrapper'

//-----------  Component  -----------//

const DataSharingForm = ({ onExit, willShare, canConsent, handleSubmit, ...props }) => (
  <Styled.DataSharingForm noValidate onSubmit={handleSubmit}>
    <FormWrapper.FormContent>
      {baseFields.map(({ notes, label, validate, ...field }, index) => (
        <Field
          key={index}
          { ...field }
          label={<Label notes={notes}>{label}</Label>}
        />
      ))}

      {willShare && (
        <Styled.ContactFields>
          <ProviderFields />
        </Styled.ContactFields>
      )}

      {canConsent ? (
        participantFields.map(({ notes, label, validate, ...field }, index) => (
          <Field
            key={index}
            { ...field }
            label={<Label notes={notes}>{label}</Label>}
          />
        ))
      ) : (
        representativeFields.map(({ notes, label, validate, ...field }, index) => (
          <Field
            key={index}
            { ...field }
            label={<Label notes={notes}>{label}</Label>}
          />
        ))
      )}
    </FormWrapper.FormContent>

    <FormWrapper.FormActions>
      <Button onClick={onExit} disabled={props.submitting}>
        Cancel
      </Button>
      <FormSubmit canReset {...props}>
        Submit
      </FormSubmit>
    </FormWrapper.FormActions>
  </Styled.DataSharingForm>
)

//-----------  Type Definitions  -----------//

DataSharingForm.propTypes = {
  canConsent       : PropTypes.bool,
  willShare        : PropTypes.bool,
  onExit           : PropTypes.func.isRequired,
  onSubmit         : PropTypes.func.isRequired,
  onSubmitSucccess : PropTypes.func,
}

//-----------  Export  -----------//

export default reduxForm({
  form             : form,
  validate         : validate,
  destroyOnUnmount : false,
})(DataSharingForm)