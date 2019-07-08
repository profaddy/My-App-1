//-----------  Imports  -----------//

import { TESTS } from '../actions'
import testsReducer, { initialState } from '../reducer'

//-----------  Reducer Tests  -----------//

describe('Tests Model: Reducer', () => {
  it('should return the initial state', () => {
    const action   = testsReducer(undefined, {})
    const expected = initialState

    expect(action).toEqual(expected)
  })

  it('should handle a request action', () => {
    const action   = testsReducer(undefined, { type: TESTS.REQUEST })
    const expected = { ...initialState, isLoading: true }

    expect(action).toEqual(expected)
  })
})
