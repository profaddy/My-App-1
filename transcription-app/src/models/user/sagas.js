//-----------  Imports  -----------//

import { all, put, call, takeEvery } from 'redux-saga/effects'

import { AUTH }                      from '@miro/core-ui/src/models/auth/actions'

import { requestUser }               from './api'
import { sagaActions }               from './actions'

//-----------  Sagas  -----------//

export function* requestUserSaga(){
  try {
    const data = yield call(requestUser)

    yield put(sagaActions.success(data))
  } catch(error){
    yield put(sagaActions.failure(error))
  }
}

//-----------  Watchers  -----------//

export default function* userSagas(){
  yield all([
    takeEvery(AUTH.SUCCESS, requestUserSaga)
  ])
}
