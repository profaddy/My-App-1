//-----------  Imports  -----------//

import { contentStyles } from './styles';

import React from 'react';
import PropTypes from 'prop-types';

import Modal from '@miro/core-ui/lib/components/Modal';
import DelayedUnmount from '@miro/core-ui/lib/components/DelayedUnmount';

import ErrorModal from 'components/ErrorModal';
import FailureModal from 'components/FailureModal';
import ProgressModal from 'components/ProgressModal';
import SignatureModal from 'components/SignatureModal';
import ConsentSuccessModal from 'components/ConsentSuccessModal';
import EligibilityFailure from 'components/EligibilityFailureModal';
import ScreeningCompleteModal from 'components/ScreeningCompleteModal';
import EulaDisgareeModal from 'components/EulaDisgareeModal';

//-----------  Definitions  -----------//

const MODALS = {
  ERROR: ErrorModal,
  FAILURE: FailureModal,
  PROGRESS: ProgressModal,
  SIGNATURE: SignatureModal,
  CONSENTSUCCESS: ConsentSuccessModal,
  ELIGIBILITYFAILURE: EligibilityFailure,
  SCREENINGCOMPLETE: ScreeningCompleteModal,
  EULADISAGREE: EulaDisgareeModal

};

const getModal = modal => MODALS[modal] || null;

//-----------  Component  -----------//

class ModalWrapper extends React.Component {
  //-----------  Event Handlers  -----------//

  closeModal = () => {
    if (!this.props.options.preventClose) this.props.hideModal();
  };

  signout = () => {
    this.props.signOut();
  };

  //-----------  HTML Render  -----------//

  render() {
    const {
      signout,
      modal,
      props,
      eligible,
      options: { label, afterOpen, preventClose },
    } = this.props;
    const ModalContent = getModal(modal);
    const hasModal = !!ModalContent;
    const SignatureStyle = {
      width: '49%',
      height: '478px',
      margin: '0 auto',
      left: '2%',
    };
    const EulaStyle = {
      width: '425px',
      top:'37%',
      height: '317px',
      margin: '0 auto',
      left: '40%',
      position:'fixed',
    };
    const contentstyle = modal === 'SIGNATURE'  ? SignatureStyle : modal === 'EULADISAGREE' ? EulaStyle :  contentStyles;
    const overlayStyle =
      modal === 'SIGNATURE'
        ? { backgroundColor: 'unset', zIndex: 999 }
        : { zIndex: 999 };

    return (
      <DelayedUnmount mounted={hasModal}>
        <Modal
          label={label || 'Mrio'}
          isOpen={hasModal}
          onAfterOpen={afterOpen}
          preventClose={preventClose}
          contentStyles={contentstyle}
          overlayStyles={overlayStyle}
          onRequestClose={this.closeModal}
        >
          {hasModal && (
            <ModalContent
              {...props}
              closeModal={this.closeModal}
              signout={this.signout}
              eligible={eligible}
            />
          )}
        </Modal>
      </DelayedUnmount>
    );
  }
}

//-----------  Type Definitions  -----------//

ModalWrapper.propTypes = {
  modal: PropTypes.string,
  props: PropTypes.object,
  options: PropTypes.object,
  hideModal: PropTypes.func.isRequired,
};

//-----------  Export  -----------//

export default ModalWrapper;
