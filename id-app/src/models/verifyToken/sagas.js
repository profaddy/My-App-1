//-----------  Imports  -----------//

import { all, put, call, takeEvery } from 'redux-saga/effects';

import { requestVerifyToken } from './api';
import { VERIFY_TOKEN, sagaActions } from './actions';

//-----------  Sagas  -----------//

export function* requestVerifyTokenSaga({ token }) {
  try {
    yield call(requestVerifyToken, token);

    yield put(sagaActions.success());
  } catch (error) {
    yield put(sagaActions.failure(error));
  }
}

//-----------  Watchers  -----------//

export default function* verifyTokenSagas() {
  yield all([takeEvery(VERIFY_TOKEN.REQUEST, requestVerifyTokenSaga)]);
}
