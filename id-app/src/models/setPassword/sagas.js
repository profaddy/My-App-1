//-----------  Imports  -----------//

import { all, put, call, takeEvery, select } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import { referrerSelector } from './selectors';

import { requestSetPassword } from './api';
import { setPasswordActions } from './actions';

//-----------  Sagas  -----------//

export function* requestSetPasswordSaga({ payload }) {
  try {
    const referrer = yield select(referrerSelector);
    const encodeUrl = encodeURIComponent(referrer);

    const { data } = yield call(requestSetPassword, payload);

    yield put(setPasswordActions.request.success(data));
    yield put(push(`/signin?referrer=${encodeUrl}`));
  } catch (error) {
    yield put(setPasswordActions.request.failure(error));
  }
}

//-----------  Watchers  -----------//

export default function* setPasswordSagas() {
  yield all([
    takeEvery(setPasswordActions.request.REQUEST, requestSetPasswordSaga),
  ]);
}
