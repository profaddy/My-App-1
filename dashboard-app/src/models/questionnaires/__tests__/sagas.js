//-----------  Imports  -----------//

import { call, put }          from 'redux-saga/effects'
import { cloneableGenerator } from 'redux-saga/utils'

import { studiesActions, sagaActions } from '../actions'
import { requestStudiesSaga }         from '../sagas'
import { requestStudies }             from '../api'

//-----------  Definitions  -----------//

const studies = requestStudies()

//-----------  Saga Tests  -----------//

describe('Studies Model: Requst Saga', () => {
  const generator = cloneableGenerator(requestStudiesSaga)(studiesActions.request())

  test('should request data', () => {
    expect(generator.next().value).toEqual(call(requestStudies))
  })

  test('and trigger a success response action', () => {
    const clone = generator.clone()
    expect(clone.next(studies).value).toEqual(put(sagaActions.success()))
  })

  test('and a failure response action', () => {
    const clone = generator.clone()
    expect(clone.throw().value).toEqual(put(sagaActions.failure()))
  })
})
