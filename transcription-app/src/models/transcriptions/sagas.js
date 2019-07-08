//-----------  Imports  -----------//

import { all, put, call, select, takeEvery }  from 'redux-saga/effects'

import { submitTranscription,
         updateTranscription }                from './api'
import { TRANSCRIPTIONS, sagaActions }        from './actions'
import { currentTranscriptionIdSelector,
         currentTranscriptionTextIdSelector } from './selectors'
import { currentAssignmentIdSelector }        from 'models/assignments/selectors'

//-----------  Sagas  -----------//

export function* submitTranscriptionsSaga({ text, isReview }){
  try {
    const assignmentId        = yield select(currentAssignmentIdSelector)
    const transcriptionId     = yield select(currentTranscriptionIdSelector)
    const transcriptionTextId = yield select(currentTranscriptionTextIdSelector)

    const data = {
      audio_source       : transcriptionId,
      is_final           : isReview,
      subject_assignment : assignmentId,
      transcription_text : text,
    }

    if (transcriptionTextId)
      yield call(updateTranscription, data, transcriptionTextId)
    else
      yield call(submitTranscription, data)

    yield put(sagaActions.success())
  } catch(error){
    yield put(sagaActions.failure(error))
  }
}

//-----------  Watchers  -----------//

export default function* transcriptionsSagas(){
  yield all([
    takeEvery(TRANSCRIPTIONS.SUBMIT, submitTranscriptionsSaga)
  ])
}
