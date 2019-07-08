//-----------  Imports  -----------//

import { call, put }          from 'redux-saga/effects'
import { cloneableGenerator } from 'redux-saga/utils'

import { verifyTokenActions, sagaActions } from '../actions'
import { requestVerifyTokenSaga }         from '../sagas'
import { requestVerifyToken }             from '../api'

//-----------  Definitions  -----------//

const verifyToken = requestVerifyToken()

//-----------  Saga Tests  -----------//

describe('VerifyToken Model: Requst Saga', () => {
  const generator = cloneableGenerator(requestVerifyTokenSaga)(verifyTokenActions.request())

  test('should request data', () => {
    expect(generator.next().value).toEqual(call(requestVerifyToken))
  })

  test('and trigger a success response action', () => {
    const clone = generator.clone()
    expect(clone.next(verifyToken).value).toEqual(put(sagaActions.success()))
  })

  test('and a failure response action', () => {
    const clone = generator.clone()
    expect(clone.throw().value).toEqual(put(sagaActions.failure()))
  })
})
