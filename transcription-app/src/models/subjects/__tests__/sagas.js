//-----------  Imports  -----------//

import { put, call, select }            from 'redux-saga/effects'
import { cloneableGenerator }           from 'redux-saga/utils'

import { isReviewerSelector }           from 'models/user/selectors'
import { assignmentMock }               from 'models/assignments/__mocks__/api'

import { subjectsActions, sagaActions } from '../actions'
import { requestSubjectsSaga }          from '../sagas'
import { requestReviewerSubjects,
         requestTranscriberSubjects }   from '../api'

//-----------  Definitions  -----------//

const subjects = assignmentMock()

//-----------  Saga Tests  -----------//

describe('Subjects Model: Requst Saga', () => {
  const generator = cloneableGenerator(requestSubjectsSaga)(subjectsActions.request())
  let reviwer, transcriber

  test('should select for reviewer status', () => {
    expect(generator.next().value).toEqual(select(isReviewerSelector))
  })

  test('and trigger a request for open reviewer subjects', () => {
    reviwer = generator.clone()
    expect(reviwer.next(true).value).toEqual(call(requestReviewerSubjects))
  })

  test('and trigger a request for open transcriber subjects', () => {
    transcriber = generator.clone()
    expect(transcriber.next(false).value).toEqual(call(requestTranscriberSubjects))
  })

  test('and trigger a success response action', () => {
    const clone = transcriber.clone()
    expect(clone.next(subjects).value).toEqual(put(sagaActions.success(subjects)))
  })

  test('and a failure response action', () => {
    const clone = transcriber.clone()
    expect(clone.throw().value).toEqual(put(sagaActions.failure()))
  })
})
