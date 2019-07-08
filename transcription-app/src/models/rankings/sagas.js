//-----------  Imports  -----------//

import { all, put, call, takeEvery } from 'redux-saga/effects'

import { requestRankings }           from './api'
import { RANKINGS, sagaActions }     from './actions'

//-----------  Sagas  -----------//

export function* requestRankingsSaga(){
  try {
    const data = yield call(requestRankings)

    yield put(sagaActions.success(data))
  } catch(error){
    yield put(sagaActions.failure(error))
  }
}

//-----------  Watchers  -----------//

export default function* rankingsSagas(){
  yield all([
    takeEvery(RANKINGS.REQUEST, requestRankingsSaga)
  ])
}
