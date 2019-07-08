//-----------  Imports  -----------//

import { VERIFY_TOKEN } from '../actions'
import verifyTokenReducer, { initialState } from '../reducer'

//-----------  Reducer Tests  -----------//

describe('VerifyToken Model: Reducer', () => {
  it('should return the initial state', () => {
    const action   = verifyTokenReducer(undefined, {})
    const expected = initialState

    expect(action).toEqual(expected)
  })

  it('should handle a request action', () => {
    const action   = verifyTokenReducer(undefined, { type: VERIFY_TOKEN.REQUEST })
    const expected = { ...initialState, isLoading: true }

    expect(action).toEqual(expected)
  })
})
