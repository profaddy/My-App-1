//-----------  Imports  -----------//

import { SET_PASSWORD } from '../actions'
import setPasswordReducer, { initialState } from '../reducer'

//-----------  Reducer Tests  -----------//

describe('SetPassword Model: Reducer', () => {
  it('should return the initial state', () => {
    const action   = setPasswordReducer(undefined, {})
    const expected = initialState

    expect(action).toEqual(expected)
  })

  it('should handle a request action', () => {
    const action   = setPasswordReducer(undefined, { type: SET_PASSWORD.REQUEST })
    const expected = { ...initialState, isLoading: true }

    expect(action).toEqual(expected)
  })
})
