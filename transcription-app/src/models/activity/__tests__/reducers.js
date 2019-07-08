//-----------  Imports  -----------//

import { ACTIVITY }                      from '../actions'
import activityReducer, { initialState } from '../reducer'

//-----------  Reducer Tests  -----------//

describe('Activity Model: Reducer', () => {
  it('should return the initial state', () => {
    const action   = activityReducer(undefined, {})
    const expected = initialState

    expect(action).toEqual(expected)
  })

  it('should handle a request action', () => {
    const action   = activityReducer(undefined, { type: ACTIVITY.REQUEST })
    const expected = { ...initialState, isLoading: true }

    expect(action).toEqual(expected)
  })
})
