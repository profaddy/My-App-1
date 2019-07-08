//-----------  Imports  -----------//

import { AUTH }                      from '../actions'
import authReducer, { initialState } from '../reducer'

//-----------  Definitions  -----------//

const token = '12345'
const error = 'User is already signed in'

//-----------  Reducer Tests  -----------//

describe('Auth Model: Reducer', () => {

  it('should return the initial state', () => {
    const action   = authReducer(undefined, {})
    const expected = initialState

    expect(action).toEqual(expected)
  })

  it('should handle a sign in action', () => {
    const action   = authReducer(undefined, { type: AUTH.SIGN_IN })
    const expected = { ...initialState, isLoading: true }

    expect(action).toEqual(expected)
  })

  it('should handle a sign out action', () => {
    const action   = authReducer(undefined, { type: AUTH.SIGN_OUT })
    const expected = { ...initialState, isLoading: false }

    expect(action).toEqual(expected)
  })

  it('should handle a success action', () => {
    const action   = authReducer(undefined, { type: AUTH.SUCCESS, token })
    const expected = { ...initialState, token, isLoading: false }

    expect(action).toEqual(expected)
  })

  it('should handle a failure action', () => {
    const action   = authReducer(undefined, { type: AUTH.FAILURE, error })
    const expected = { ...initialState, error, isLoading: false }

    expect(action).toEqual(expected)
  })
})
