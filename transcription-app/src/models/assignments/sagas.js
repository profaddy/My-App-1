//-----------  Imports  -----------//

import { all, put, call, select, takeEvery } from 'redux-saga/effects'

import { AUTH }                              from '@miro/core-ui/src/models/auth/actions'
import { TRANSCRIPTIONS }                    from 'models/transcriptions/actions'
import { isReviewerSelector }                from 'models/user/selectors'
import { assignReviewer,
         assignTranscriber,
         requestAssignments }                from './api'
import { ASSIGNMENTS, sagaActions }          from './actions'
import { requestSubjectsSaga }               from 'models/subjects/sagas'

//-----------  Sagas  -----------//

export function* requestAssignmentsSaga(){
  try {
    const data = yield call(requestAssignments)

    yield put(sagaActions.success(data))
  } catch(error){
    yield put(sagaActions.failure(error))
  }
}

export function* assignUserSaga({ id }){
  try {
    const isReviewer = yield select(isReviewerSelector)

    if (isReviewer)
      yield call(assignReviewer, id)
    else
      yield call(assignTranscriber, id)

    yield all([
      call(requestAssignmentsSaga),
      call(requestSubjectsSaga)
    ])
  } catch(error){
    yield put(sagaActions.failure(error))
  }
}

//-----------  Watchers  -----------//

export default function* assignmentsSagas(){
  yield all([
    takeEvery(AUTH.SUCCESS, requestAssignmentsSaga),
    takeEvery(ASSIGNMENTS.REQUEST, requestAssignmentsSaga),
    takeEvery(TRANSCRIPTIONS.SUCCESS, requestAssignmentsSaga),
    takeEvery(ASSIGNMENTS.ASSIGN, assignUserSaga),
  ])
}
