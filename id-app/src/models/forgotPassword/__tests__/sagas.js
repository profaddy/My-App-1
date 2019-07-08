//-----------  Imports  -----------//

import { put, call, select }        from 'redux-saga/effects'
import { cloneableGenerator }       from 'redux-saga/utils'
import JsonWebTokenError            from 'jsonwebtoken/lib/JsonWebTokenError'

import { appActions }               from 'models/app/actions'
import { tokenMock }                from 'models/auth/__mocks__/api'
import { requestToken }             from 'utilities/localStorage'

import { signInSaga,
         signOutSaga,
         requestAuthSaga }          from '../sagas'
import { authActions, sagaActions } from '../actions'
import { signIn, signOut }          from '../api'
import { tokenSelector }            from '../selectors'

//-----------  Definitions  -----------//

const email    = 'user@email.com'
const password = '12345'
const token    = tokenMock(email)
const error    = new JsonWebTokenError('jwt must be provided')

//-----------  Saga Tests  -----------//

describe('Auth Model: Requst Saga', () => {
  const generator = cloneableGenerator(requestAuthSaga)(appActions.init())

  test('should grab token', () => {
    expect(generator.next().value).toEqual(call(requestToken))
  })

  test('and trigger a success response action', () => {
    const clone = generator.clone()
    expect(clone.next(token).value).toEqual(put(sagaActions.success(token)))
  })

  test('and a failure response action', () => {
    const clone = generator.clone()
    expect(clone.next().value).toEqual(put(sagaActions.failure(error)))
  })
})

describe('Auth Model: Sign In Saga', () => {
  const generator = cloneableGenerator(signInSaga)(authActions.signIn(email, password))

  test('should call sign in API', () => {
    expect(generator.next().value).toEqual(call(signIn, email, password))
  })

  test('and trigger a success response action', () => {
    const clone = generator.clone()
    expect(clone.next(token).value).toEqual(put(sagaActions.success(token)))
  })

  test('and a failure response action', () => {
    const clone = generator.clone()
    expect(clone.throw().value).toEqual(put(sagaActions.failure()))
  })
})

describe('Auth Model: Sign Out Saga', () => {
  const generator = cloneableGenerator(signOutSaga)(authActions.signOut())

  test('should grab token', () => {
    expect(generator.next().value).toEqual(select(tokenSelector))
  })

  test('should call sign out API', () => {
    expect(generator.next(token).value).toEqual(call(signOut, token))
  })

  test('and trigger a success response action', () => {
    const clone = generator.clone()
    expect(clone.next().value).toEqual(put(sagaActions.failure(null)))
  })

  test('and a failure response action', () => {
    const clone = generator.clone()
    expect(clone.throw().value).toEqual(put(sagaActions.failure()))
  })
})
