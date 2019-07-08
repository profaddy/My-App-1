//-----------  Imports  -----------//

import { createActionConstants } from '@miro/core-ui/lib/utilities/sagas';

//-----------  Definitions  -----------//

export const PARTICIPANTS = createActionConstants('PARTICIPANTS');
export const PARTICIPANT = createActionConstants('PARTICIPANT', [
  'SELECTED',
  'UNSELECTED',
]);

export const ADD_PARTICIPANT = createActionConstants('ADD_PARTICIPANT', [
  'START',
  'STOP',
]);
export const DELETE_PARTICIPANT = createActionConstants('DELETE_PARTICIPANT');
export const EDIT_PARTICIPANT = createActionConstants('EDIT_PARTICIPANT', [
  'START',
  'STOP',
]);

export const FILE_UPLOAD_MODAL = createActionConstants('FILE_UPLOAD_MODAL', [
  'OPEN',
  'CLOSE',
]);

export const GET_PARTICIPANT = createActionConstants('GET_PARTICIPANT');

export const ADD_PARTICIPANTS = createActionConstants('ADD_PARTICIPANTS');
export const GET_PARTICIPANTS = createActionConstants('GET_PARTICIPANTS');

export const VERIFY_PARTICIPANT = createActionConstants('VERIFY_PARTICIPANT');

export const CONFIRM_DELETE = createActionConstants('CONFIRM_DELETE', [
  'YES',
  'NO',
]);

export const REVIEWED_ELIGIBILITY = createActionConstants(
  'REVIEWED_ELIGIBILITY',
  ['START', 'STOP'],
);

export const DRUG_TEST = createActionConstants('DRUG_TEST', ['START', 'STOP']);

export const CLOSE_DELETE_MODAL = createActionConstants('CLOSE_DELETE_MODAL');

//-----------  Participant Actions  -----------//

export const participantActions = {
  verifyParticipant: values => ({
    type: VERIFY_PARTICIPANT.REQUEST,
    payload: values,
  }),
  getParticipant: (studyId, id) => ({
    type: GET_PARTICIPANT.REQUEST,
    payload: { studyId, id },
  }),
  startAddParticipant: () => ({
    type: ADD_PARTICIPANT.START,
  }),
  stopAddParticipant: () => ({
    type: ADD_PARTICIPANT.STOP,
  }),
  addParticipant: formValues => ({
    type: ADD_PARTICIPANT.REQUEST,
    payload: { data: formValues },
  }),
  deleteParticipant: (studyId, id, successAction = null) => ({
    type: DELETE_PARTICIPANT.REQUEST,
    payload: { studyId, id },
    successAction: successAction,
  }),
  startEditParticipant: data => ({
    type: EDIT_PARTICIPANT.START,
    payload: { data },
  }),
  stopEditParticipant: () => ({
    type: EDIT_PARTICIPANT.STOP,
  }),
  editParticipant: (studyId, data, successAction = null) => ({
    type: EDIT_PARTICIPANT.REQUEST,
    payload: { studyId, data }, // id and form-data
    successAction: successAction,
  }),
  select: selectedParticipants => ({
    type: PARTICIPANT.SELECTED,
    payload: { selectedParticipants },
  }),
  unselect: () => ({ type: PARTICIPANT.UNSELECTED }),
  onDeleteConfirmNo: () => ({
    type: CONFIRM_DELETE.NO,
  }),
  onDeleteConfirmYes: () => ({
    type: CONFIRM_DELETE.YES,
  }),
  closeDeleteModal: () => ({
    type: CLOSE_DELETE_MODAL.REQUEST,
  }),
  startReviewedEligibility: () => ({
    type: REVIEWED_ELIGIBILITY.START,
  }),
  stopReviewedEligibility: () => ({
    type: REVIEWED_ELIGIBILITY.STOP,
  }),
  requestReviewedEligibility: data => ({
    type: REVIEWED_ELIGIBILITY.REQUEST,
    payload: data,
  }),
  startDrugTest: () => ({
    type: DRUG_TEST.START,
  }),
  stopDrugTest: () => ({
    type: DRUG_TEST.STOP,
  }),
  requestDrugTest: data => ({
    type: DRUG_TEST.REQUEST,
    payload: data,
  }),
};

// ----------- participants actions ---------- //

export const participantsActions = {
  request: payload => ({ type: PARTICIPANTS.REQUEST, payload }),
  addParticipants: (studyId, file) => ({
    type: ADD_PARTICIPANTS.REQUEST,
    payload: { studyId, file },
  }),
  openFileUploadModal: () => ({
    type: FILE_UPLOAD_MODAL.OPEN,
  }),
  closeFileUploadModal: () => ({
    type: FILE_UPLOAD_MODAL.CLOSE,
  }),
};

//-----------  Saga Actions  -----------//

export const sagaParticipantActions = {
  getParticipantSuccess: payload => ({
    type: GET_PARTICIPANT.SUCCESS,
    payload,
  }),
  getParticipantFailure: error => ({ type: PARTICIPANT.FAILURE, error }),
  deleteParticipantSuccess: () => ({
    type: DELETE_PARTICIPANT.SUCCESS,
  }),
  deleteParticipantFailure: () => ({
    type: DELETE_PARTICIPANT.FAILURE,
  }),
  addParticipantSuccess: data => ({
    type: ADD_PARTICIPANT.SUCCESS,
    payload: data,
  }),
  addParticipantFailure: () => ({
    type: ADD_PARTICIPANT.FAILURE,
  }),
  editParticipantSuccess: () => ({
    type: EDIT_PARTICIPANT.SUCCESS,
  }),
  editParticipantFailure: () => ({
    type: EDIT_PARTICIPANT.FAILURE,
  }),
  verifyParticipantSuccess: () => ({ type: VERIFY_PARTICIPANT.SUCCESS }),
  verifyParticipantFailure: () => ({ type: VERIFY_PARTICIPANT.FAILURE }),
  reviewedEligibilitySuccess: () => ({
    type: REVIEWED_ELIGIBILITY.SUCCESS,
  }),
  reviewedEligibilityFailure: () => ({
    type: REVIEWED_ELIGIBILITY.FAILURE,
  }),
  drugTestSuccess: resp => ({
    type: DRUG_TEST.SUCCESS,
    payload: resp,
  }),
  drugTestFailure: () => ({
    type: DRUG_TEST.FAILURE,
  }),
};

export const sagaParticipantsActions = {
  getParticipantFailure: error => ({
    type: GET_PARTICIPANTS.FAILURE,
    payload: error,
  }),
  addParticipantsFailure: error => ({
    type: ADD_PARTICIPANTS.FAILURE,
    payload: error,
  }),
  addParticipantsSuccess: data => ({
    type: ADD_PARTICIPANTS.SUCCESS,
    payload: data,
  }),
  success: data => ({ type: PARTICIPANTS.SUCCESS, payload: data }),
  failure: error => ({ type: PARTICIPANTS.FAILURE, payload: error }),
};
