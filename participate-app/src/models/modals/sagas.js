//-----------  Imports  -----------//

import { all, select, call, takeLatest, put } from 'redux-saga/effects';

import { afterCloseSelector } from './selectors';
import { isEligibleSelector, isScreenedSelector } from 'models/user/selectors';
import { studySelector } from 'models/user/selectors';
import { MODALS } from './actions';
import { authActions } from '@miro/core-ui/lib/models/auth/actions';
import { userActions } from 'models/user/actions';
import { removeCookie } from '@miro/core-ui/lib/utilities/persistence';
import { submitEligibility } from 'models/routing/api';

const accessKey = `${process.env.MIRO_ENV}-miro-jwt-access`;
const refreshKey = `${process.env.MIRO_ENV}-miro-jwt-refresh`;

//-----------  Sagas  -----------//

export function* hideModalSaga() {
  try {
    const afterClose = yield select(afterCloseSelector);

    if (afterClose) setTimeout(afterClose, 0);
  } catch (error) {
    console.error('Modals Hide Action:', error);
  }
}

export function* signoutUser() {
  try {
    const isEligible = yield select(isEligibleSelector);
    const isScreened = yield select(isScreenedSelector);
    yield put(userActions.update({ isError: false }));

    if (isEligible && !isScreened) {
      let { id } = yield select(studySelector);
      yield call(submitEligibility, `${id}`);
      yield call(removeCookie, accessKey);
      yield call(removeCookie, refreshKey);
      window.location.replace('https://calendly.com/miroresearch/miro-004/');
    } else {
      yield put(authActions.signOut());
    }
  } catch (error) {
    console.error('particpate redirect to callendly link', error);
  }
}
//-----------  Watchers  -----------//

export default function* modalsSagas() {
  yield all([
    takeLatest(MODALS.HIDE, hideModalSaga),
    takeLatest(MODALS.SIGNOUT, signoutUser),
  ]);
}
