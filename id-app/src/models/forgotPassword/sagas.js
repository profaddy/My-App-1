//-----------  Imports  -----------//

import { all, put, call, takeEvery } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import { parse } from 'query-string';
import { forgotPassword } from './api';
import { forgotPasswordActions } from './actions';

//-----------  Sagas  -----------//

export function* forgotPasswordSaga({ payload }) {
  const { email } = payload;

  try {
    const referrer = parse(window.location.search).referrer;
    const redirect_host = !!referrer
      ? new URL(referrer).host
      : process.env.APP_URL.replace('//', '');

    const res = yield call(forgotPassword, {
      email,
      redirect_host,
    });

    yield put(forgotPasswordActions.reset.success(res));
    yield put(push(`/forgot-password/reset?email=${email}`));
  } catch (error) {
    yield put(forgotPasswordActions.reset.failure(error));
  }
}
//-----------  Watchers  -----------//

export default function* forgotPasswordSagas() {
  yield all([
    takeEvery(forgotPasswordActions.reset.REQUEST, forgotPasswordSaga),
  ]);
}
