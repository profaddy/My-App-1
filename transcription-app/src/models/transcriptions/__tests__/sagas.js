//-----------  Imports  -----------//

import { put, call, select }                  from 'redux-saga/effects'
import { cloneableGenerator }                 from 'redux-saga/utils'

import { currentTranscriptionIdSelector,
         currentTranscriptionTextIdSelector } from '../selectors'
import { currentAssignmentIdSelector }        from 'models/assignments/selectors'

import { transcriptionsActions, sagaActions } from '../actions'
import { submitTranscriptionsSaga }           from '../sagas'
import { submitTranscription,
         updateTranscription }                from '../api'

//-----------  Definitions  -----------//

const text                = 'Just a string of example text...'
const assignmentId        = 1
const transcriptionId     = 2
const transcriptionTextId = 3

const data = {
  audio_source       : transcriptionId,
  is_final           : false,
  subject_assignment : assignmentId,
  transcription_text : text
}

//-----------  Saga Tests  -----------//

describe('Transcriptions Model: Requst Saga', () => {
  const generator = cloneableGenerator(submitTranscriptionsSaga)(transcriptionsActions.submit(text, false))
  let submit, update

  test('should select assignment ID', () => {
    expect(generator.next().value).toEqual(select(currentAssignmentIdSelector))
  })

  test('should select transcription ID', () => {
    expect(generator.next(assignmentId).value).toEqual(select(currentTranscriptionIdSelector))
  })

  test('should select transcription text ID', () => {
    expect(generator.next(transcriptionId).value).toEqual(select(currentTranscriptionTextIdSelector))
  })

  test('and trigger a submit call (if no ID)', () => {
    submit = generator.clone()
    expect(submit.next().value).toEqual(call(submitTranscription, data))
  })

  test('and trigger an update call (id ID)', () => {
    update = generator.clone()
    expect(update.next(transcriptionTextId).value).toEqual(call(updateTranscription, data, transcriptionTextId))
  })

  test('and trigger a success response action', () => {
    const clone = submit.clone()
    expect(clone.next().value).toEqual(put(sagaActions.success()))
  })

  test('and a failure response action', () => {
    const clone = submit.clone()
    expect(clone.throw().value).toEqual(put(sagaActions.failure()))
  })
})
