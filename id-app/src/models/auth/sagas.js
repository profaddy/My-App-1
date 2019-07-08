//-----------  Imports  -----------//

import { all, put, call, takeEvery, select } from 'redux-saga/effects';

import { signIn, signOut } from './api';
import { AUTH, sagaActions, authActions } from './actions';
import jsonwebtoken from 'jsonwebtoken';
import { parseUrl } from 'query-string';
import { referrerSelector } from 'models/routing/selectors';
import { SubmissionError } from 'redux-form';
import JWT from '@miro/core-ui/lib/utilities/jwt';
//-----------  Sagas  -----------//

// for local setup assuming following ports
// const portAppMap = {
//   4000: 'participant',
//   3000: 'researcher',
// };

// const roleAppMap = {
//   participant: 'participate.mirohealth.com',
//   researcher: 'dashboard.mirohealth.com',
// };

// const checkForLocal = referrer => {
//   if (referrer.includes('localhost')) {
//     const referrerUrl = new URL(referrer);
//     console.log('referrerUrl.port', referrerUrl.port);
//     return portAppMap[referrerUrl.port];
//   }
// };

export function* signInSaga({ payload }) {
  try {
    const { email, password } = payload;
    const { access, refresh } = yield call(signIn, email, password);
    const decodedWebToken = jsonwebtoken.decode(access);
    const referrer = yield select(referrerSelector);
    const { url } = parseUrl(referrer);
    const error = {
      _error:
        'You are not authorized to use this app, enter correct url or credentials',
    };
    // if (
    //   url.includes('localhost') &&
    //   decodedWebToken.group !== checkForLocal(referrer)
    // ) {
    //   throw new SubmissionError(error);
    // }
    // if (
    //   !url.includes('localhost') &&
    //   !url.includes(roleAppMap[decodedWebToken.group])
    // ) {
    //   throw new SubmissionError(error);
    // }
    JWT.accessToken = access;
    JWT.refreshToken = refresh;
    yield put(authActions.signIn.success());
    yield put(sagaActions.success(access, refresh));
  } catch (error) {
    yield put(authActions.signIn.failure(error));
    yield put(sagaActions.failure(error));
  }
}

export function* signOutSaga() {
  try {
    yield call(signOut);

    yield put(sagaActions.failure(null));
  } catch (error) {
    yield put(sagaActions.failure(error));
  }
}

//-----------  Watchers  -----------//

export default function* authSagas() {
  yield all([
    takeEvery(authActions.signIn.REQUEST, signInSaga),
    takeEvery(AUTH.SIGN_OUT, signOutSaga),
  ]);
}
