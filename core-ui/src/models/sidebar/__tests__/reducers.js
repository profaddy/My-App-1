//-----------  Imports  -----------//

import { SIDEBAR } from '../actions'
import sidebarReducer, { initialState } from '../reducer'

//-----------  Reducer Tests  -----------//

describe('Sidebar Model: Reducer', () => {
  it('should return the initial state', () => {
    const action   = sidebarReducer(undefined, {})
    const expected = initialState

    expect(action).toEqual(expected)
  })

  it('should handle a request action', () => {
    const action   = sidebarReducer(undefined, { type: SIDEBAR.REQUEST })
    const expected = { ...initialState, isLoading: true }

    expect(action).toEqual(expected)
  })
})
