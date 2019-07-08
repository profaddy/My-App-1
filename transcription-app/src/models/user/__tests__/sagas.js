//-----------  Imports  -----------//

import { put, call }                  from 'redux-saga/effects'
import { cloneableGenerator }         from 'redux-saga/utils'

import { sagaActions as authActions } from '@miro/core-ui/src/models/auth/actions'

import { userMock }                   from '../__mocks__/api'
import { requestUserSaga }            from '../sagas'
import { sagaActions }                from '../actions'
import { requestUser }                from '../api'

//-----------  Saga Tests  -----------//

const data = userMock('test@miro.one')

//-----------  Saga Tests  -----------//

describe('User Model: Requst Saga', () => {
  const generator = cloneableGenerator(requestUserSaga)(authActions.success('abcdefg'))

  test('should request data', () => {
    expect(generator.next().value).toEqual(call(requestUser))
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
