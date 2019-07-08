//-----------  Imports  -----------//

import { call, put }          from 'redux-saga/effects'
import { cloneableGenerator } from 'redux-saga/utils'

import { setPasswordActions, sagaActions } from '../actions'
import { requestSetPasswordSaga }         from '../sagas'
import { requestSetPassword }             from '../api'

//-----------  Definitions  -----------//

const setPassword = requestSetPassword()

//-----------  Saga Tests  -----------//

describe('SetPassword Model: Requst Saga', () => {
  const generator = cloneableGenerator(requestSetPasswordSaga)(setPasswordActions.request())

  test('should request data', () => {
    expect(generator.next().value).toEqual(call(requestSetPassword))
  })

  test('and trigger a success response action', () => {
    const clone = generator.clone()
    expect(clone.next(setPassword).value).toEqual(put(sagaActions.success()))
  })

  test('and a failure response action', () => {
    const clone = generator.clone()
    expect(clone.throw().value).toEqual(put(sagaActions.failure()))
  })
})
