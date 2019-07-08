//-----------  Imports  -----------//

import Styled                   from './styles'

import { form,
         baseFields,
         participantFields,
         representativeFields } from './config'
import validate                 from './validation'
import consents                 from 'data/consents/phi'

import React                    from 'react'
import PropTypes                from 'prop-types'
import { reduxForm, Field }     from 'redux-form'

import Label                    from 'components/Label'
import Button                   from '@miro/core-ui/lib/components/Button'
import FormSubmit               from '@miro/core-ui/lib/forms/FormSubmit'
import ContentWalkthrough       from 'components/ContentWalkthrough'

import ProviderFields           from 'forms/ProviderFields'

import FormWrapper              from 'components/FormWrapper'

//-----------  Component  -----------//

class ReleaseForm extends React.Component {

  //-----------  HTML Render  -----------//

  render(){
    const { submitting, onExit, canConsent, handleSubmit, ...props } = this.props

    return (
      <Styled.ReleaseForm noValidate onSubmit={handleSubmit}>
        <Styled.ReleaseSection>
          <ProviderFields />
        </Styled.ReleaseSection>

        <Styled.ReleaseSection>
          <Styled.Disclaimer>
            <p><strong>Please provide your phone number so that your physician may call to confirm your approval to share Protected Health Information. </strong></p>
          </Styled.Disclaimer>

          <Styled.Fields>
            {baseFields.map(({ notes, label, validate, ...field }, index) => (
              <Field
                key={index}
                { ...field }
                label={<Label notes={notes}>{label}</Label>}
              />
            ))}
          </Styled.Fields>
        </Styled.ReleaseSection>

        <ContentWalkthrough sections={consents} />

        <Styled.Disclaimer>
          <p><strong>This Authorization has no expiration date.</strong> The Study can use your de-identified Protected Health Information until and unless you revoke Authorization.</p>
        </Styled.Disclaimer>

        <FormWrapper.FormContent>
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
          <Button onClick={onExit} disabled={submitting}>
            Cancel
          </Button>
          <FormSubmit disabled={submitting} canReset {...props}>
            Submit
          </FormSubmit>
        </FormWrapper.FormActions>
      </Styled.ReleaseForm>
    )
  }
}

//-----------  Type Definitions  -----------//

ReleaseForm.propTypes = {
  canConsent : PropTypes.bool,
  onExit     : PropTypes.func.isRequired,
  onSubmit   : PropTypes.func.isRequired,
}

//-----------  Export  -----------//

export default reduxForm({
  form               : form,
  validate           : validate,
  destroyOnUnmount   : false,
  enableReinitialize : true,
})(ReleaseForm)
