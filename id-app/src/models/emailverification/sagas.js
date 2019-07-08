//-----------  Imports  -----------//

import { all, put, call, takeEvery } from 'redux-saga/effects';

import { requestEmailVerification } from './api';
import { EMAIL_VERIFICATION, sagaActions } from './actions';

//-----------  Sagas  -----------//

export function* requestEmailVerificationSaga({ token }) {
  try {
    const { email } = yield call(requestEmailVerification, token);
    yield put(sagaActions.success({ res: true, email }));
  } catch (error) {
    yield put(sagaActions.failure(error));
  }
}

//-----------  Watchers  -----------//

export default function* emailverificationSagas() {
  yield all([
    takeEvery(EMAIL_VERIFICATION.REQUEST, requestEmailVerificationSaga),
  ]);
}
