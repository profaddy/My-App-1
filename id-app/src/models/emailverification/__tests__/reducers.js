//-----------  Imports  -----------//

import { EMAIL_VERIFICATION } from '../actions'
import emailverificationReducer, { initialState } from '../reducer'

//-----------  Reducer Tests  -----------//

describe('EmailVerification Model: Reducer', () => {
  it('should return the initial state', () => {
    const action   = emailverificationReducer(undefined, {})
    const expected = initialState

    expect(action).toEqual(expected)
  })

  it('should handle a request action', () => {
    const action   = emailverificationReducer(undefined, { type: EMAIL_VERIFICATION.REQUEST })
    const expected = { ...initialState, isLoading: true }

    expect(action).toEqual(expected)
  })
})
