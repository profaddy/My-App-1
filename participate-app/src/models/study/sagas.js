//-----------  Imports  -----------//

import { all, put, call, select, takeEvery } from 'redux-saga/effects'

import { requestStudy }                      from './api'
import { sagaActions }                       from './actions'
import { userActions }                       from 'models/user/actions'
import { studySlugSelector }                 from './selectors'

import { USER }                              from 'models/user/actions'
import studies                               from 'data/studies'

//-----------  Sagas  -----------//

export function* requestStudySaga(){
  try {
    const slug = yield select(studySlugSelector)
    const resp = yield call(requestStudy, slug)
    const data = studies[slug] || studies[resp[0].study.type.code]
    const {screen_eligible} = resp[0];
    const {screening_complete} = resp[0];
    yield put(userActions.update({ eligible: screen_eligible , screened:screening_complete}));

    yield put(sagaActions.success(data))
  } catch(error){
    console.error('Study failure',error)
    yield put(sagaActions.failure(error))
  }
}

//-----------  Watchers  -----------//

export default function* questionnairesSagas(){
  yield all([
    takeEvery(USER.SUCCESS, requestStudySaga),
  ])
}
