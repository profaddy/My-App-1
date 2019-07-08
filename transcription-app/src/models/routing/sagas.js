//-----------  Imports  -----------//

import { all, call, take, select, takeEvery } from 'redux-saga/effects'

import { AUTH }                               from '@miro/core-ui/src/models/auth/actions'
import { ASSIGNMENTS }                        from 'models/assignments/actions'
import { TRANSCRIPTIONS }                     from 'models/transcriptions/actions'

import { errorSelector,
         currentSubjectIdSelector }           from 'models/assignments/selectors'
import { nextTranscriptionUrlSelector }       from 'models/transcriptions/selectors'
import history                                from 'models/history'

//-----------  Sagas  -----------//

export function* watchTranscriptionSave(){
  while (true){
    yield take(TRANSCRIPTIONS.SUCCESS)
    yield take([ASSIGNMENTS.SUCCESS, ASSIGNMENTS.FAILURE])

    const error = yield select(errorSelector)
    if (!error){
      const subjectId = yield select(currentSubjectIdSelector)
      const nextUrl   = yield select(nextTranscriptionUrlSelector)

      if (nextUrl)
        yield call(history.push, nextUrl)
      else
        yield call(history.push, `/?completed=${subjectId}`)
    }
  }
}

//-----------  Watchers  -----------//

export default function* routingSagas(){
  yield all([
    takeEvery(AUTH.SUCCESS, watchTranscriptionSave)
  ])
}
