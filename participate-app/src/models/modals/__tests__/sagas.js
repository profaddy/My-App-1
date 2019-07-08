//-----------  Imports  -----------//

import { call, put }          from 'redux-saga/effects'
import { cloneableGenerator } from 'redux-saga/utils'

import { modalsActions, sagaActions } from '../actions'
import { requestModalsSaga }         from '../sagas'
import { requestModals }             from '../api'

//-----------  Definitions  -----------//

const modals = requestModals()

//-----------  Saga Tests  -----------//

describe('Modals Model: Requst Saga', () => {
  const generator = cloneableGenerator(requestModalsSaga)(modalsActions.request())

  test('should request data', () => {
    expect(generator.next().value).toEqual(call(requestModals))
  })

  test('and trigger a success response action', () => {
    const clone = generator.clone()
    expect(clone.next(modals).value).toEqual(put(sagaActions.success()))
  })

  test('and a failure response action', () => {
    const clone = generator.clone()
    expect(clone.throw().value).toEqual(put(sagaActions.failure()))
  })
})
