//-----------  Imports  -----------//

import { ROUTING } from '../actions'
import routingReducer, { initialState } from '../reducer'

//-----------  Reducer Tests  -----------//

describe('Routing Model: Reducer', () => {
  it('should return the initial state', () => {
    const action   = routingReducer(undefined, {})
    const expected = initialState

    expect(action).toEqual(expected)
  })

  it('should handle a request action', () => {
    const action   = routingReducer(undefined, { type: ROUTING.REQUEST })
    const expected = { ...initialState, isLoading: true }

    expect(action).toEqual(expected)
  })
})
