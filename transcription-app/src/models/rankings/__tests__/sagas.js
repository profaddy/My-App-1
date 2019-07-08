//-----------  Imports  -----------//

import { call, put }                    from 'redux-saga/effects'
import { cloneableGenerator }           from 'redux-saga/utils'

import { rankingsActions, sagaActions } from '../actions'
import { requestRankingsSaga }          from '../sagas'
import { requestRankings }              from '../api'

//-----------  Definitions  -----------//

const data = [{ id: 1 },{ id: 2 }]

//-----------  Saga Tests  -----------//

describe('Rankings Model: Requst Saga', () => {
  const generator = cloneableGenerator(requestRankingsSaga)(rankingsActions.request())

  test('should request data', () => {
    expect(generator.next().value).toEqual(call(requestRankings))
  })

  test('and trigger a success response action', () => {
    const clone = generator.clone()
    expect(clone.next(data).value).toEqual(put(sagaActions.success(data)))
  })

  test('and a failure response action', () => {
    const clone = generator.clone()
    expect(clone.throw().value).toEqual(put(sagaActions.failure()))
  })
})
