//-----------  Imports  -----------//

import Styled from './styles';

import React from 'react';
import PropTypes from 'prop-types';

import Button from '@miro/core-ui/lib/components/Button';
import Notification from 'assets/icons/Notification.svg';

import FormSubmit from '@miro/core-ui/lib/forms/FormSubmit';
import { reduxForm } from 'redux-form';

export const form = 'euladisagree';

//-----------  Component  -----------//

const EulaDisgareeModal = ({
  closeModal,
  handleSubmit,
  onConfirm,
  onCancel,
  ...props
}) => (
  <Styled.EulaDisgareeModal>
    <Notification />
    <h4>ARE YOU SURE?</h4>
    <p>If you exit, your username and password will be deleted</p>
    <form onSubmit={handleSubmit}>
      <FormSubmit {...props}>YES,QUIT</FormSubmit>
      <Button style={{ marginLeft: '1rem' }} onClick={onCancel}>
        CANCEL
      </Button>
    </form>
  </Styled.EulaDisgareeModal>
);
//-----------  Type Definitions  -----------//

EulaDisgareeModal.propTypes = {
  attempts: PropTypes.number,
  closeModal: PropTypes.func.isRequired,
};

//-----------  Export  -----------//

export default reduxForm({ form })(EulaDisgareeModal);
