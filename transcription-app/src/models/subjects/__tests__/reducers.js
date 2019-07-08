//-----------  Imports  -----------//

import { SUBJECTS }                      from '../actions'
import subjectsReducer, { initialState } from '../reducer'

//-----------  Reducer Tests  -----------//

describe('Subjects Model: Reducer', () => {
  it('should return the initial state', () => {
    const action   = subjectsReducer(undefined, {})
    const expected = initialState

    expect(action).toEqual(expected)
  })

  it('should handle a request action', () => {
    const action   = subjectsReducer(undefined, { type: SUBJECTS.REQUEST })
    const expected = { ...initialState, isLoading: true }

    expect(action).toEqual(expected)
  })
})
