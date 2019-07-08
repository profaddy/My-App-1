//-----------  Imports  -----------//

import { all } from 'redux-saga/effects';

import userSagas from '@miro/core-ui/lib/models/user/sagas';
import { actionsWatcherSaga } from '@miro/core-ui/lib/utilities/sagas';

import authSagas from 'models/auth/sagas';
import signUpSagas from 'models/signup/sagas';
import setPasswordSagas from 'models/setPassword/sagas';
import forgotPasswordSagas from 'models/forgotPassword/sagas';
import emailverificationSagas from './emailverification/sagas';
import routingSagas from 'models/routing/sagas';
import verifyTokenSagas from 'models/verifyToken/sagas';

//-----------  Exports  -----------//

export default function* rootSaga() {
  yield all([
    userSagas(),
    authSagas(),
    signUpSagas(),
    setPasswordSagas(),
    forgotPasswordSagas(),
    emailverificationSagas(),
    routingSagas(),
    verifyTokenSagas(),
    actionsWatcherSaga(),
  ]);
}
