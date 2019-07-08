//-----------  Imports  -----------//

import queryString from 'query-string';
import { all, put, call, select, takeEvery } from 'redux-saga/effects';

import { APP } from 'models/app/actions';
import {
  requestTokenWithKey,
  stashTokenWithKey,
  removeKeyToken,
} from 'utilities/localStorage';
import api from 'utilities/api';

import { signOut } from './api';
import { tokenSelector } from './selectors';
import { AUTH, sagaActions } from './actions';

//-----------  Helpers  -----------//

export function redirectToID() {
  const { uid, verify, ...params } = queryString.parse(window.location.search);

  const referrer = !!params
    ? `${window.location.origin}${
        window.location.pathname
      }?${queryString.stringify(params)}`
    : `${window.location.origin}${window.location.pathname}`;

  const search = { uid, verify, referrer };

  // TODO: Improve Environment Redirects

  switch (process.env.MIRO_ENV) {
    case 'prod':
      return (window.location = `https://id.mirohealth.com/?${queryString.stringify(
        search,
      )}`);
    default:
      if (process.env.API_ROOT.includes('localhost'))
        return (window.location = `http://localhost:${process.env.ID_APP_PORT ||
          '3001'}/?${queryString.stringify(search)}`);
      else {
        const hostArray = window.location.host.split('.');
        if (hostArray.length === 4) {
          hostArray[1] = 'id';
          return (window.location = `https://${hostArray.join(
            '.',
          )}/?${queryString.stringify(search)}`);
        } else {
          return (window.location = `http://localhost:${process.env
            .ID_APP_PORT || '3001'}/?${queryString.stringify(search)}`);
        }
      }
  }
}

//-----------  Sagas  -----------//

export function* requestAuthSaga() {
  try {
    const { verify } = queryString.parse(window.location.search);
    const tokenKey = `${window.location.hostname}-token`;
    const token = (!verify)
      ? yield call(requestTokenWithKey, tokenKey)
      : null

    if (!token) return redirectToID();
    api.defaults.headers.common['Authorization'] = `Token ${token}`;
    stashTokenWithKey(tokenKey, token);
    yield put(sagaActions.success(token));
  } catch (error) {
    console.log('error', error);
    return redirectToID();
  }
}

export function* signOutSaga() {
  const tokenKey = `${window.location.hostname}-token`;
  try {
    const token = yield select(tokenSelector);

    yield call(signOut, token);
    // return window.location = `https://id.mirohealth.com/?referrer=${window.location.origin}${window.location.pathname}`
  } catch (error) {
    yield put(sagaActions.failure(error));
  } finally {
    removeKeyToken(tokenKey);
    delete api.defaults.headers.common['Authorization'];
    return redirectToID();
  }
}

//-----------  Watchers  -----------//

export default function* authSagas() {
  yield all([
    takeEvery(APP.INIT, requestAuthSaga),
    takeEvery(AUTH.SIGN_OUT, signOutSaga),
  ]);
}
