//-----------  Imports  -----------//

import { all, put, call, takeEvery } from 'redux-saga/effects';
import { push } from 'connected-react-router';

import {
  signUp,
  requestRegistrationCheck,
  requestLicensingBoards,
  requestPracticeAreas,
  requestInstitutions,
  requestResendVerificationEmail,
} from './api';
import {
  signUpActions,
  REGISTRATION_CHECK,
  registrationCheckSagaActions,
  LICENSING_BOARDS,
  licensingBoardSagaActions,
  PRACTICE_AREAS,
  practiceAreaSagaActions,
  INSTITUTIONS,
  institutionSagaActions,
  resendVerificationEmailActions,
} from './actions';

//-----------  Sagas  -----------//

export function* signUpSaga({ payload }) {
  let type = 'unlicensed';

  try {
    const res = yield call(signUp, payload);

    if (true === payload.is_licensed) type = 'licensed';
    if ('participant' === payload.type) type = 'participant';

    yield put(signUpActions.signUp.success(res));
    yield put(push(`/signup/success/${type}?email=${encodeURIComponent(payload.email)}`));
  } catch (error) {
    yield put(signUpActions.signUp.failure(error));
  }
}
export function* resendVerificationEmailSaga({ payload }) {
  try {
    const res = yield call(requestResendVerificationEmail, payload);

    yield put(
      resendVerificationEmailActions.resendVerificationEmail.success(res),
    );
  } catch (error) {
    yield put(
      resendVerificationEmailActions.resendVerificationEmail.failure(error),
    );
  }
}
export function* requestRegistrationCheckSaga({ email }) {
  try {
    const data = yield call(requestRegistrationCheck, { email });
    yield put(registrationCheckSagaActions.success(data));
  } catch (error) {
    yield put(registrationCheckSagaActions.failure(error));
  }
}
export function* requestLicensingBoardsSaga() {
  try {
    const data = yield call(requestLicensingBoards);
    yield put(licensingBoardSagaActions.success(data));
  } catch (error) {
    yield put(licensingBoardSagaActions.failure(error));
  }
}
export function* requestPracticeAreasSaga() {
  try {
    const data = yield call(requestPracticeAreas);

    yield put(practiceAreaSagaActions.success(data));
  } catch (error) {
    yield put(practiceAreaSagaActions.failure(error));
  }
}
export function* requestInstitutionsSaga() {
  try {
    const data = yield call(requestInstitutions);
    yield put(institutionSagaActions.success(data));
  } catch (error) {
    yield put(institutionSagaActions.failure(error));
  }
}
//-----------  Watchers  -----------//

export default function* signUpSagas() {
  yield all([
    takeEvery(signUpActions.signUp.REQUEST, signUpSaga),
    takeEvery(
      resendVerificationEmailActions.resendVerificationEmail.REQUEST,
      resendVerificationEmailSaga,
    ),
    takeEvery(REGISTRATION_CHECK.REQUEST, requestRegistrationCheckSaga),
    takeEvery(LICENSING_BOARDS.REQUEST, requestLicensingBoardsSaga),
    takeEvery(PRACTICE_AREAS.REQUEST, requestPracticeAreasSaga),
    takeEvery(INSTITUTIONS.REQUEST, requestInstitutionsSaga),
  ]);
}
