//-----------  Imports  -----------//

import { all, put, call, select, takeEvery } from 'redux-saga/effects'

import { USER }                              from 'models/user/actions'
import { isReviewerSelector }                from 'models/user/selectors'
import { requestReviewerSubjects,
         requestTranscriberSubjects }        from './api'
import { SUBJECTS, sagaActions }             from './actions'

//-----------  Sagas  -----------//

export function* requestSubjectsSaga(){
  try {
    const isReviewer = yield select(isReviewerSelector)

    const data = (isReviewer)
      ? yield call(requestReviewerSubjects)
      : yield call(requestTranscriberSubjects)

    yield put(sagaActions.success(data))
  } catch(error){
    yield put(sagaActions.failure(error))
  }
}

//-----------  Watchers  -----------//

export default function* subjectsSagas(){
  yield all([
    takeEvery(USER.SUCCESS, requestSubjectsSaga),
    takeEvery(SUBJECTS.REQUEST, requestSubjectsSaga)
  ])
}
