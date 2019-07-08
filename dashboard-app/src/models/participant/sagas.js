//-----------  Imports  -----------//

import {
  put,
  call,
  takeEvery,
  takeLatest,
  take,
  fork,
} from 'redux-saga/effects';
import { push, goBack } from 'connected-react-router';

import {
  requestParticipants,
  requestAddParticipant,
  requestDeleteParticipant,
  requestEditParticipant,
  requestAddParticipants,
  requestParticipant,
  verifyParticipant,
  finalReview,
  drugTest,
} from './api';
import {
  PARTICIPANTS,
  sagaParticipantActions,
  participantsActions,
  ADD_PARTICIPANT,
  DELETE_PARTICIPANT,
  sagaParticipantsActions,
  EDIT_PARTICIPANT,
  ADD_PARTICIPANTS,
  GET_PARTICIPANT,
  participantActions,
  CONFIRM_DELETE,
  VERIFY_PARTICIPANT,
  REVIEWED_ELIGIBILITY,
  DRUG_TEST,
} from './action';
import { ROWS_PER_PAGE } from '../../constants';
import { toastr } from 'react-redux-toastr';

//-----------  Sagas  -----------//

function* requestParticipantsSaga(action) {
  try {
    const { studyId, page, offset } = action.payload
      ? action.payload
      : { page: 1, offset: 20 };
    const data = yield call(requestParticipants, studyId, page, offset);
    yield put(sagaParticipantsActions.success(data));
  } catch (error) {
    yield put(sagaParticipantsActions.failure(error));
    // console.log('requestParticipantsSaga', error);
  }
}

function* requestAddParticipantSaga(action) {
  try {
    const resp = yield call(requestAddParticipant, action.payload.data);
    yield put(sagaParticipantActions.addParticipantSuccess(resp));
    yield put(
      participantsActions.request({
        studyId: action.payload.data.study_id,
        page: 1,
        offset: ROWS_PER_PAGE,
      }),
    );
    toastr.success('ADD PARTICIPANT', 'Participant Added Successfully');
  } catch (error) {
    yield put(sagaParticipantActions.addParticipantFailure());
    toastr.error(
      'ADD PARTICIPANT',
      'An Error occured while adding participant! Please try again!!',
    );
    console.log(error);
  }
}

function* requestDeleteParticipantSaga(studyId, id, successAction) {
  try {
    yield call(requestDeleteParticipant, studyId, id);
    yield put(sagaParticipantActions.deleteParticipantSuccess());
    if (successAction === 'GO_TO_DASHBOARD') {
      yield put(push('/'));
    } else {
      yield put(
        participantsActions.request({
          studyId,
          page: 1,
          offset: ROWS_PER_PAGE,
        }),
      );
    }

    toastr.success('DELETE PARTICIPANT', 'Participant Deleted Successfully');
  } catch (error) {
    yield put(sagaParticipantActions.deleteParticipantFailure());
    toastr.error(
      'DELETE PARTICIPANT',
      'An Error occured while deleting participant! Please try again!!',
    );
    console.log(error);
  }
}

function* requestAddParticipantsSaga(action) {
  // bulk upload
  try {
    const resp = yield call(requestAddParticipants, action.payload);
    yield put(sagaParticipantsActions.addParticipantsSuccess(resp));
    toastr.success('ADD PARTICIPANT', 'Participants Added Successfully');
    yield put(participantsActions.closeFileUploadModal());
    yield put(
      participantsActions.request({
        studyId: action.payload.studyId,
        page: 1,
        offset: ROWS_PER_PAGE,
      }),
    );
  } catch (error) {
    yield put(sagaParticipantsActions.addParticipantsFailure());
    toastr.error(
      'ADD PARTICIPANTS',
      'An Error occured while uploading! Please try again!!',
    );
    console.log(error);
  }
}

function* requestEditParticipantSaga(action) {
  try {
    yield call(
      requestEditParticipant,
      action.payload.studyId,
      action.payload.data.id,
      action.payload.data,
    );
    yield put(sagaParticipantActions.editParticipantSuccess());
    toastr.success('EDIT PARTICIPANT', 'Participant Updated Successfully');
    if (action.successAction === 'getDetails') {
      yield put(
        participantActions.getParticipant(
          action.payload.studyId,
          action.payload.data.id,
        ),
      );
    } else {
      yield put(
        participantsActions.request({
          studyId: action.payload.studyId,
          page: 1,
          offset: ROWS_PER_PAGE,
        }),
      );
    }
  } catch (error) {
    yield put(sagaParticipantActions.editParticipantFailure(error));
    toastr.error(
      'ADD PARTICIPANTS',
      'An Error occured while updating! Please try again!!',
    );
    console.log(error);
  }
}

function* requestParticipantSaga(action) {
  try {
    const { studyId, id } = action.payload;
    const data = yield call(requestParticipant, studyId, id);
    yield put(sagaParticipantActions.getParticipantSuccess(data));
  } catch (error) {
    yield put(sagaParticipantsActions.getParticipantFailure(error));
    console.log('requestParticipantSaga', error);
  }
}

function* requestVerifyParticipantSaga(action) {
  try {
    const resp = yield call(verifyParticipant, action.payload);
    yield put(sagaParticipantActions.verifyParticipantSuccess(resp));
    toastr.success('VERIFY PARTICIPANT', 'Participants Verified Successfully');
    yield put(goBack());
  } catch (error) {
    yield put(sagaParticipantActions.verifyParticipantFailure());
    toastr.error(
      'VERIFY PARTICIPANTS',
      'An Error occured while Verifying! Please try again!!',
    );
    console.log(error);
  }
}
//-----------  Watchers  -----------//

export function* participantsSagas() {
  yield takeEvery(PARTICIPANTS.REQUEST, requestParticipantsSaga);
}

export function* addParticipantSagas() {
  yield takeEvery(ADD_PARTICIPANT.REQUEST, requestAddParticipantSaga);
}

export function* addParticipantsSagas() {
  yield takeLatest(ADD_PARTICIPANTS.REQUEST, requestAddParticipantsSaga); // bulk upload
}

export function* deleteParticipantSagas() {
  while (true) {
    const { payload, successAction } = yield take(DELETE_PARTICIPANT.REQUEST);
    yield take(CONFIRM_DELETE.YES);
    yield fork(
      requestDeleteParticipantSaga,
      payload.studyId,
      payload.id,
      successAction,
    );
  }
}

function* requestReviewedEligibilitySaga(action) {
  try {
    yield call(finalReview, action.payload);
    yield put(participantActions.stopReviewedEligibility());
    yield put(sagaParticipantActions.reviewedEligibilitySuccess());
    toastr.success(
      'FINAL REVIEW',
      'Participants has been successfully  added to the study',
    );
  } catch (error) {
    console.log('Error  ===>> ', error);
    yield put(sagaParticipantActions.reviewedEligibilityFailure());
    toastr.error(
      'FINAL REVIEW',
      'An Error occured while Sigining! Please try again!!',
    );
  }
}

function* requestDrugTest(action) {
  try {
    const data =
      action.payload.test_result === 'positive'
        ? action.payload
        : { ...action.payload, result_description: null };
    const resp = yield call(drugTest, data);
    yield put(participantActions.stopDrugTest());
    yield put(sagaParticipantActions.drugTestSuccess(resp));
    yield put(
      participantActions.getParticipant(
        action.payload.studyId,
        action.payload.participantId,
      ),
    );
    toastr.success(
      'DRUG TEST',
      'Drug test results has been updated Successfully',
    );
  } catch (error) {
    console.log('Error  ===>> ', error);
    yield put(sagaParticipantActions.drugTestFailure());
    toastr.error(
      'DRUG TEST',
      'Drug test could not be updated, Please try again!!',
    );
  }
}

export function* editParticipantSagas() {
  yield takeEvery(EDIT_PARTICIPANT.REQUEST, requestEditParticipantSaga);
}

export function* getParticipantSaga() {
  yield takeEvery(GET_PARTICIPANT.REQUEST, requestParticipantSaga);
}

export function* verifyParticipantSagas() {
  yield takeEvery(VERIFY_PARTICIPANT.REQUEST, requestVerifyParticipantSaga);
}

export function* reviewedParticipantSagas() {
  yield takeEvery(REVIEWED_ELIGIBILITY.REQUEST, requestReviewedEligibilitySaga);
}

export function* drugTestSagas() {
  yield takeEvery(DRUG_TEST.REQUEST, requestDrugTest);
}
