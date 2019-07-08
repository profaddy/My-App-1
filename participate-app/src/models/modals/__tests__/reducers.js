//-----------  Imports  -----------//

import { MODALS } from '../actions'
import modalsReducer, { initialState } from '../reducer'

//-----------  Reducer Tests  -----------//

describe('Modals Model: Reducer', () => {
  it('should return the initial state', () => {
    const action   = modalsReducer(undefined, {})
    const expected = initialState

    expect(action).toEqual(expected)
  })

  it('should handle a request action', () => {
    const action   = modalsReducer(undefined, { type: MODALS.REQUEST })
    const expected = { ...initialState, isLoading: true }

    expect(action).toEqual(expected)
  })
})
