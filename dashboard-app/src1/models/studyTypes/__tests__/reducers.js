//-----------  Imports  -----------//

import { STUDIES } from '../actions'
import studiesReducer, { initialState } from '../reducer'

//-----------  Reducer Tests  -----------//

describe('Studies Model: Reducer', () => {
  it('should return the initial state', () => {
    const action   = studiesReducer(undefined, {})
    const expected = initialState

    expect(action).toEqual(expected)
  })

  it('should handle a request action', () => {
    const action   = studiesReducer(undefined, { type: STUDIES.REQUEST })
    const expected = { ...initialState, isLoading: true }

    expect(action).toEqual(expected)
  })
})
