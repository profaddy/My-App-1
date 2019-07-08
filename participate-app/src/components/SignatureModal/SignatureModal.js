//-----------  Imports  -----------//

import Styled             from './styles';

import React              from 'react';
import PropTypes          from 'prop-types';

import Button             from '@miro/core-ui/lib/components/Button';

import SignatureField     from 'fields/SignatureField';
import FormSubmit         from '@miro/core-ui/lib/forms/FormSubmit';
import { reduxForm,Field} from 'redux-form';



export const form = 'eulasignature'

//-----------  Component  -----------//


const SignatureModal = ({closeModal,handleSubmit, participantSignature, ...props }) => (

  <Styled.SignatureModal>
    <h2>I accept Miro's terms of use</h2>
    <p>By signing your name, you indicate that you understand the information given to you about MIRO and accept the terms and conditions</p>
    <form onSubmit={handleSubmit}>
    <Field
      component = 'signature'
      name      = 'participant_signature'
      label     = 'Participant Signature'
      label     ='Participant Signature'
      component = {SignatureField}
      required  = 'true'
    />
      <Styled.Button>
      <Button onClick={closeModal} > CANCEL </Button>
      </Styled.Button>
      <Styled.Button>
      <FormSubmit {...props} disabled={!participantSignature}>
          SUBMIT
      </FormSubmit>
      </Styled.Button>
    </form>
  </Styled.SignatureModal>
)
//-----------  Type Definitions  -----------//

SignatureModal.propTypes = {
  attempts   : PropTypes.number,
  closeModal : PropTypes.func.isRequired
}

//-----------  Export  -----------//

export default reduxForm({ form })(SignatureModal)