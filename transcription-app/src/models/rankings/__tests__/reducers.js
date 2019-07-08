//-----------  Imports  -----------//

import { RANKINGS }                      from '../actions'
import rankingsReducer, { initialState } from '../reducer'

//-----------  Reducer Tests  -----------//

describe('Rankings Model: Reducer', () => {
  it('should return the initial state', () => {
    const action   = rankingsReducer(undefined, {})
    const expected = initialState

    expect(action).toEqual(expected)
  })

  it('should handle a request action', () => {
    const action   = rankingsReducer(undefined, { type: RANKINGS.REQUEST })
    const expected = { ...initialState, isLoading: true }

    expect(action).toEqual(expected)
  })
})
