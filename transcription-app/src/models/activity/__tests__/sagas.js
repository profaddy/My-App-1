//-----------  Imports  -----------//

import { call, put }                    from 'redux-saga/effects'
import { cloneableGenerator }           from 'redux-saga/utils'

import { activityActions, sagaActions } from '../actions'
import { requestActivitySaga }          from '../sagas'
import { requestActivity }              from '../api'

//-----------  Definitions  -----------//

const data = [{ id: 1 },{ id: 2 }]

//-----------  Saga Tests  -----------//

describe('Activity Model: Requst Saga', () => {
  const generator = cloneableGenerator(requestActivitySaga)(activityActions.request())

  test('should request data', () => {
    expect(generator.next().value).toEqual(call(requestActivity))
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
