//-----------  Imports  -----------//

import { AUTH, authActions, sagaActions } from '../actions'

//-----------  Definitions  -----------//

const email    = 'test@gmail.com'
const password = 'password123'
const token    = '12345'
const error    = new Error('User is already signed in')

//-----------  Actions Tests  -----------//

describe('Auth Model: Actions', () => {
  it('should create an sign in action', () => {
    const action   = authActions.signIn(email, password)
    const expected = { type: AUTH.SIGN_IN, email, password }

    expect(action).toEqual(expected)
  })

  it('should create an sign out action', () => {
    const action   = authActions.signOut()
    const expected = { type: AUTH.SIGN_OUT }

    expect(action).toEqual(expected)
  })

  it('should create an success action', () => {
    const action   = sagaActions.success(token)
    const expected = { type: AUTH.SUCCESS, token }

    expect(action).toEqual(expected)
  })

  it('should create an failure action', () => {
    const action   = sagaActions.failure(error)
    const expected = { type: AUTH.FAILURE, error }

    expect(action).toEqual(expected)
  })
})
