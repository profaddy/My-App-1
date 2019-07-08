//-----------  Imports  -----------//

import { put, call, take, select }           from 'redux-saga/effects'
import { cloneableGenerator }                from 'redux-saga/utils'

import { ASSIGNMENTS }                       from 'models/assignments/actions'
import { TRANSCRIPTIONS }                    from 'models/transcriptions/actions'
import { errorSelector,
         currentSubjectIdSelector }          from 'models/assignments/selectors'
import { nextTranscriptionUrlSelector }      from 'models/transcriptions/selectors'
import history                               from 'models/history'

import { sagaActions as authActions }        from '@miro/core-ui/src/models/auth/actions'
import { sagaActions as assignmentsActions } from 'models/assignments/actions'

import { watchTranscriptionSave }            from '../sagas'

//-----------  Definitions  -----------//

const error = new Error('Invalid password')

//-----------  Saga Tests  -----------//

describe('Routing Model: Requst Saga', () => {
  const generator = cloneableGenerator(watchTranscriptionSave)(authActions.success('abcdefg'))
  let failure, success

  test('should take a transcription success action', () => {
    expect(generator.next().value).toEqual(take(TRANSCRIPTIONS.SUCCESS))
  })

  test('should take assignment sagas actions', () => {
    expect(generator.next().value).toEqual(take([ASSIGNMENTS.SUCCESS, ASSIGNMENTS.FAILURE]))
  })

  test('and should select the assignment error action', () => {
    failure = generator.clone()
    expect(failure.next(assignmentsActions.failure()).value).toEqual(select(errorSelector))
  })

  test('and should loop to the top', () => {
    expect(failure.next(error).value).toEqual(take(TRANSCRIPTIONS.SUCCESS))
  })

  test('and should select the assignment success action', () => {
    success = generator.clone()
    expect(success.next(assignmentsActions.success()).value).toEqual(select(errorSelector))
  })

  test('and should select for the current subject id', () => {
    expect(success.next(null).value).toEqual(select(currentSubjectIdSelector))
  })

  test('and should select for the next transcription url', () => {
    expect(success.next('123').value).toEqual(select(nextTranscriptionUrlSelector))
  })

  test('and should route to the next transcription url', () => {
    const nextUrl = success.clone()
    expect(nextUrl.next('/next/url').value).toEqual(call(history.push, '/next/url'))
  })

  test('and should select for the next transcription url', () => {
    const completeUrl = success.clone()
    expect(completeUrl.next().value).toEqual(call(history.push, '/?completed=123'))
  })
})
