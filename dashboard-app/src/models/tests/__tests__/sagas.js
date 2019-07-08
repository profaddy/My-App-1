//-----------  Imports  -----------//

import { call, put }          from 'redux-saga/effects'
import { cloneableGenerator } from 'redux-saga/utils'

import { testsActions, sagaActions } from '../actions'
import { requestTestsSaga }         from '../sagas'
import { requestTests }             from '../api'

//-----------  Definitions  -----------//

const tests = requestTests()

//-----------  Saga Tests  -----------//

describe('Tests Model: Requst Saga', () => {
  const generator = cloneableGenerator(requestTestsSaga)(testsActions.request())

  test('should request data', () => {
    expect(generator.next().value).toEqual(call(requestTests))
  })

  test('and trigger a success response action', () => {
    const clone = generator.clone()
    expect(clone.next(tests).value).toEqual(put(sagaActions.success()))
  })

  test('and a failure response action', () => {
    const clone = generator.clone()
    expect(clone.throw().value).toEqual(put(sagaActions.failure()))
  })
})
