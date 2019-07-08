//-----------  Imports  -----------//

import { all, put, call, select }          from 'redux-saga/effects'
import { cloneableGenerator }              from 'redux-saga/utils'

import { isReviewerSelector }              from 'models/user/selectors'
import { requestSubjectsSaga }             from 'models/subjects/sagas'

import { assignmentsActions, sagaActions } from '../actions'
import { assignReviewer,
         assignTranscriber,
         requestAssignments }              from '../api'
import { assignmentMock }                  from '../__mocks__/api'
import { assignUserSaga,
         requestAssignmentsSaga }          from '../sagas'

//-----------  Definitions  -----------//

const userId      = 15
const assignments = assignmentMock()

//-----------  Saga Tests  -----------//

describe('Assignments Model: Requst Saga', () => {
  const generator = cloneableGenerator(requestAssignmentsSaga)(assignmentsActions.request())

  test('should request data', () => {
    expect(generator.next().value).toEqual(call(requestAssignments))
  })

  test('and trigger a success response action', () => {
    const clone = generator.clone()
    expect(clone.next(assignments).value).toEqual(put(sagaActions.success(assignments)))
  })

  test('and a failure response action', () => {
    const clone = generator.clone()
    expect(clone.throw().value).toEqual(put(sagaActions.failure()))
  })
})

describe('Assignments Model: Assign User Saga', () => {
  const generator = cloneableGenerator(assignUserSaga)(assignmentsActions.assign(userId))
  let reviewer, transcriber

  test('should select for reviewer', () => {
    expect(generator.next().value).toEqual(select(isReviewerSelector))
  })

  test('and call the reviewer assignment endpoint', () => {
    reviewer = generator.clone()
    expect(reviewer.next(true).value).toEqual(call(assignReviewer, userId))
  })

  test('and call the transcriber assignment endpoint', () => {
    transcriber = generator.clone()
    expect(transcriber.next(false).value).toEqual(call(assignTranscriber, userId))
  })

  test('and trigger assignment & subject requests', () => {
    const clone = reviewer.clone()
    expect(clone.next().value).toEqual(all([call(requestAssignmentsSaga), call(requestSubjectsSaga)]))
  })

  test('and a failure response action', () => {
    const clone = reviewer.clone()
    expect(clone.throw().value).toEqual(put(sagaActions.failure()))
  })
})
