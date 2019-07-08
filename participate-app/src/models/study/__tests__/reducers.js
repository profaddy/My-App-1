//-----------  Imports  -----------//

import { STUDY } from '../actions'
import studyReducer, { initialState } from '../reducer'

//-----------  Reducer Tests  -----------//

describe('Study Model: Reducer', () => {
  it('should return the initial state', () => {
    const action   = studyReducer(undefined, {})
    const expected = initialState

    expect(action).toEqual(expected)
  })

  it('should handle a request action', () => {
    const action   = studyReducer(undefined, { type: STUDY.REQUEST })
    const expected = { ...initialState, isLoading: true }

    expect(action).toEqual(expected)
  })
})
