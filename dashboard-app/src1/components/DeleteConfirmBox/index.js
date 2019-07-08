import React from 'react';
import Modal from '@miro/core-ui/lib/components/Modal';
import QuestionMark from 'assets/icons/question_mark.svg';
import ButtonMiro from '@miro/core-ui/lib/components/Button';
import { connect } from 'react-redux';
import { participantActions } from '../../models/participant/action';

const DeleteConfirmBox = props => (
  <Modal
    isOpen={props.openDeleteConfirmModal}
    onRequestClose={props.closeConfirmdModal}
  >
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        margin: 30,
        justifyContent: 'space-around',
        alignItems: 'center',
        minHeight: 300,
      }}
    >
      {/* <div style={{ fontWeight: 'bolder', fontSize: 30 }}>?</div> */}
      <QuestionMark />
      <div style={{ fontWeight: 'bolder', fontSize: 20 }}>
        DELETE PARTICIPANT
      </div>
      <div style={{ fontWeight: 'bolder', fontSize: 16 }}>
        {' '}
        Are you sure want to delete this participant ?
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-evenly',
          width: '100%',
        }}
      >
        <ButtonMiro medium onClick={props.closeConfirmdModal}>
          cancel
        </ButtonMiro>
        <ButtonMiro medium active onClick={() => props.onDeleteConfirmYes()}>
          Yes, delete it!
        </ButtonMiro>
      </div>
    </div>
  </Modal>
);

export default connect(
  state => ({
    openDeleteConfirmModal:
      (state.participant && state.participant.openDeleteConfirmModal) || false,
  }),
  dispatch => ({
    closeConfirmdModal: () => dispatch(participantActions.closeDeleteModal()),
    onDeleteConfirmYes: () => dispatch(participantActions.onDeleteConfirmYes()),
  }),
)(DeleteConfirmBox);
