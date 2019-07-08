//-----------  Imports  -----------//

import { ASSIGNMENTS }                      from '../actions'
import assignmentsReducer, { initialState } from '../reducer'

//-----------  Reducer Tests  -----------//

describe('Assignments Model: Reducer', () => {
  it('should return the initial state', () => {
    const action   = assignmentsReducer(undefined, {})
    const expected = initialState

    expect(action).toEqual(expected)
  })

  it('should handle a request action', () => {
    const action   = assignmentsReducer(undefined, { type: ASSIGNMENTS.REQUEST })
    const expected = { ...initialState, isLoading: true }

    expect(action).toEqual(expected)
  })
})
