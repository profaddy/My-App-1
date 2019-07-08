//-----------  Imports  -----------//

import Styled                   from './styles'

import { form,
         ageFields,
         baseFields,
         signatureFields,
         hipaaFields,
         representativeFields,
         hipaaRepesentativeFields,
         takeSelfie,
         takeIdPhoto } from './config'
import validate                 from './validation'

import React                    from 'react'
import PropTypes                from 'prop-types'
import { reduxForm, Field }     from 'redux-form'

import Label                    from 'components/Label'
import FormWrapper              from 'components/FormWrapper'

import FormSubmit               from '@miro/core-ui/lib/forms/FormSubmit'
import Button                   from '@miro/core-ui/lib/components/Button'


//-----------  Component  -----------//



const SignatureForm = ({ onExit, openModal, activeModal,canConsent, handleSubmit,handleNext,handleBack,formStates, isNext,invalid, ...props }) => (
  <Styled.SignatureForm noValidate onSubmit={handleSubmit}>
    <FormWrapper.FormContent>
      {(activeModal === 'Age') && ageFields.map(({ notes, label, validate, ...field }, index) => (
        <>
        <Field
          key={index}
          { ...field }
          label={<Label notes={notes}>{label}</Label>}
        />
        <Styled.Disclaimer>
        <h5>What does your signature on this consent form mean?</h5>
        <p>Your signature on this form means that you understand the information given to you in this form, you accept the provisions in the form and you agree to join the study. You will not give up any legal rights by signing this consent form.</p>
      </Styled.Disclaimer>
      {baseFields.map(({ notes, label, validate, ...field }, index) => (
        <Field
          key={index}
          { ...field }
          label={<Label notes={notes}>{label}</Label>}
        />
      ))}
      {(canConsent === false) &&
       <Styled.RepresentativeFields>
       {representativeFields.filter((representativeFields) => representativeFields.name === 'participant_name').map(({ notes, label, validate, component, ...field }, index) => (
         <Field
           key={index}
           { ...field }
           label={<Label notes={notes}>{label}</Label>}
           component={component}
         />
       ))}
     </Styled.RepresentativeFields>
      }
      </>
      ))}
    </FormWrapper.FormContent>
    {(activeModal === 'LegalGuardian') && (false === canConsent) &&
       <FormWrapper.FormContent>
        <Styled.ParticipantFields>
          {representativeFields.filter((fields) => fields.name === 'representative_relationship' || fields.name === 'representative_reason')
          .map(({ notes, label, validate, component, ...field }, index) => (
            <Field
              key={index}
              { ...field }
              label={<Label notes={notes}>{label}</Label>}
              component={component}
            />
          ))}
        </Styled.ParticipantFields>
      </FormWrapper.FormContent>
    }

    {(activeModal === 'Signature') && (true === canConsent) &&
       <FormWrapper.FormContent>
        <Styled.ParticipantFields>
          {signatureFields.map(({ notes, label, validate, component, ...field }, index) => (
            <Field
              key={index}
              { ...field }
              label={<Label notes={notes}>{label}</Label>}
              component={component}
            />
          ))}
          <Styled.ModalSwitch onClick={openModal}>
            Want to check the consent? <a>View Consent</a>
          </Styled.ModalSwitch>
          <Styled.Content>
          <p>A COPY OF THE SIGNED, DATED CONSENT FORM MUST BE KEPT BY THE PRINCIPAL INVESTIGATOR. A COPY WILL BE EMAILED TO YOU.</p>
        </Styled.Content>
        </Styled.ParticipantFields>
      </FormWrapper.FormContent>
    }

{(activeModal === 'Signature') && (false === canConsent) &&
       <FormWrapper.FormContent>
        <Styled.ParticipantFields>
          {representativeFields.filter((fields) => fields.name === 'representative_name' || fields.name === 'representative_signature')
          .map(({ notes, label, validate, component, ...field }, index) => (
            <Field
              key={index}
              { ...field }
              label={<Label notes={notes}>{label}</Label>}
              component={component}
            />
          ))}
          <Styled.ModalSwitch onClick={openModal}>
            Want to check the consent? <a>View Consent</a>
          </Styled.ModalSwitch>
          <Styled.Content>
          <p>A COPY OF THE SIGNED, DATED CONSENT FORM MUST BE KEPT BY THE PRINCIPAL INVESTIGATOR. A COPY WILL BE EMAILED TO YOU.</p>
        </Styled.Content>
        </Styled.ParticipantFields>
      </FormWrapper.FormContent>
    }

    {(activeModal === 'TakeSelfie')  &&
      <FormWrapper.FormContent>
          <Styled.ParticipantFields>
            {takeSelfie.map(({ notes, label, validate, component, ...field }, index) => (
              <Field
                key={index}
                { ...field }
                label={<Label notes={notes}>{label}</Label>}
                component={component}
              />
            ))}
          </Styled.ParticipantFields>
        </FormWrapper.FormContent>
    }

    {(activeModal === 'TakeIdPhoto')  &&
        <FormWrapper.FormContent>
            <Styled.ParticipantFields>
              {takeIdPhoto.map(({ notes, label, validate, component, ...field }, index) => (
                <Field
                  key={index}
                  { ...field }
                  label={<Label notes={notes}>{label}</Label>}
                  component={component}
                />
              ))}
            </Styled.ParticipantFields>
          </FormWrapper.FormContent>
    }
   <FormWrapper.FormContent>

    {(activeModal === 'Hipaa') && (true === canConsent) &&
    <>
          <Styled.Disclaimer>
            <h5>HIPAA AUTHORIZATION FOR RELEASE OF HEALTHCARE INFORMATION</h5>
            <p>Federal regulations give you certain rights related to your health information. These include the right to know who will receive the information and how it will be used. The study doctor...
              {' '}<span onClick={openModal}><a>View the HIPAA form</a></span>
            </p>
          </Styled.Disclaimer>
          <Styled.ParticipantFields>
          {hipaaFields.map(({ notes, label, validate, component, ...field }, index) => (
            <Field
              key={index}
              { ...field }
              label={<Label notes={notes}>{label}</Label>}
              component={component}
            />

          ))}
          </Styled.ParticipantFields>
          </>
    }

    {(activeModal === 'Hipaa') && (false === canConsent) &&
    <>
          <Styled.Disclaimer>
            <h5>HIPAA AUTHORIZATION FOR RELEASE OF HEALTHCARE INFORMATION</h5>
            <p>Federal regulations give you certain rights related to your health information. These include the right to know who will receive the information and how it will be used. The study doctor...
              {' '}<span onClick={openModal}><a>View the HIPAA form</a></span>
            </p>
          </Styled.Disclaimer>
          <Styled.ParticipantFields>
          {hipaaRepesentativeFields
          .map(({ notes, label, validate, component, ...field }, index) => (
            <Field
              key={index}
              { ...field }
              label={<Label notes={notes}>{label}</Label>}
              component={component}
            />
          ))}
          </Styled.ParticipantFields>
          </>
    }

    {(activeModal === 'BillOfRights') &&
    <>
          <Styled.Disclaimer>
            <h5>EXPERIMENTAL RESEARCH SUBJECT'S BILL OF RIGHTS</h5>
            <p>California law, under Health & Safety Code Section 24172, requires that any person asked to take part as a subject in research involving a medical experiment, or any person asked to consent to such participation on behalf of another...
              {' '}<span onClick={openModal}><a>View the Bill of Rights</a></span>
            </p>
          </Styled.Disclaimer>
    </>
    }
    </FormWrapper.FormContent>





    <FormWrapper.FormActions>
    {(activeModal === 'Age') ? (
      <Button onClick={onExit} disabled={props.submitting}>
        Cancel
      </Button> ):
      <Button onClick={handleBack} disabled={props.submitting}>
        Back
      </Button>
    }
      {(activeModal === 'BillOfRights') ? (
        <FormSubmit canReset {...props} disabled={props.submitting || props.invalid || props.pristine}>
          Submit
        </FormSubmit> ) : (
        <Styled.SignatureButton onClick={handleNext} disabled = {!isNext}>
          Next
        </Styled.SignatureButton>

      )}
    </FormWrapper.FormActions>
  </Styled.SignatureForm>
)

//-----------  Type Definitions  -----------//

SignatureForm.propTypes = {
  canConsent       : PropTypes.bool,
  openModal        : PropTypes.func,
  onExit           : PropTypes.func.isRequired,
  onSubmit         : PropTypes.func.isRequired,
  onSubmitSucccess : PropTypes.func,
}

//-----------  Export  -----------//

export default reduxForm({
  form             : form,
  validate         : validate,
  destroyOnUnmount : false,
})(SignatureForm)