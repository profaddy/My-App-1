//-----------  Imports  -----------//

import { all, put, call, takeEvery } from 'redux-saga/effects'

import { requestActivity }           from './api'
import { ACTIVITY, sagaActions }     from './actions'

//-----------  Sagas  -----------//

export function* requestActivitySaga(){
  try {
    const data = yield call(requestActivity)

    yield put(sagaActions.success(data))
  } catch(error){
    yield put(sagaActions.failure(error))
  }
}

//-----------  Watchers  -----------//

export default function* activitySagas(){
  yield all([
    takeEvery(ACTIVITY.REQUEST, requestActivitySaga)
  ])
}
