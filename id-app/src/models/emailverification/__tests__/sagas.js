//-----------  Imports  -----------//

import { call, put }          from 'redux-saga/effects'
import { cloneableGenerator } from 'redux-saga/utils'

import { emailverificationActions, sagaActions } from '../actions'
import { requestEmailVerificationSaga }         from '../sagas'
import { requestEmailVerification }             from '../api'

//-----------  Definitions  -----------//

const emailverification = requestEmailVerification()

//-----------  Saga Tests  -----------//

describe('EmailVerification Model: Requst Saga', () => {
  const generator = cloneableGenerator(requestEmailVerificationSaga)(emailverificationActions.request())

  test('should request data', () => {
    expect(generator.next().value).toEqual(call(requestEmailVerification))
  })

  test('and trigger a success response action', () => {
    const clone = generator.clone()
    expect(clone.next(emailverification).value).toEqual(put(sagaActions.success()))
  })

  test('and a failure response action', () => {
    const clone = generator.clone()
    expect(clone.throw().value).toEqual(put(sagaActions.failure()))
  })
})
