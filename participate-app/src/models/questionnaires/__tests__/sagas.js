//-----------  Imports  -----------//

import { call, put }          from 'redux-saga/effects'
import { cloneableGenerator } from 'redux-saga/utils'

import { questionnairesActions, sagaActions } from '../actions'
import { requestQuestionnairesSaga }         from '../sagas'
import { requestQuestionnaires }             from '../api'

//-----------  Definitions  -----------//

const questionnaires = requestQuestionnaires()

//-----------  Saga Tests  -----------//

describe('Questionnaires Model: Requst Saga', () => {
  const generator = cloneableGenerator(requestQuestionnairesSaga)(questionnairesActions.request())

  test('should request data', () => {
    expect(generator.next().value).toEqual(call(requestQuestionnaires))
  })

  test('and trigger a success response action', () => {
    const clone = generator.clone()
    expect(clone.next(questionnaires).value).toEqual(put(sagaActions.success()))
  })

  test('and a failure response action', () => {
    const clone = generator.clone()
    expect(clone.throw().value).toEqual(put(sagaActions.failure()))
  })
})
