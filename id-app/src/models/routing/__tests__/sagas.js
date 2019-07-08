//-----------  Imports  -----------//

import { call, put }          from 'redux-saga/effects'
import { cloneableGenerator } from 'redux-saga/utils'

import { routingActions, sagaActions } from '../actions'
import { requestRoutingSaga }         from '../sagas'
import { requestRouting }             from '../api'

//-----------  Definitions  -----------//

const routing = requestRouting()

//-----------  Saga Tests  -----------//

describe('Routing Model: Requst Saga', () => {
  const generator = cloneableGenerator(requestRoutingSaga)(routingActions.request())

  test('should request data', () => {
    expect(generator.next().value).toEqual(call(requestRouting))
  })

  test('and trigger a success response action', () => {
    const clone = generator.clone()
    expect(clone.next(routing).value).toEqual(put(sagaActions.success()))
  })

  test('and a failure response action', () => {
    const clone = generator.clone()
    expect(clone.throw().value).toEqual(put(sagaActions.failure()))
  })
})
