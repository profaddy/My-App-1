//-----------  Imports  -----------//

import { QUESTIONNAIRES } from '../actions'
import questionnairesReducer, { initialState } from '../reducer'

//-----------  Reducer Tests  -----------//

describe('Questionnaires Model: Reducer', () => {
  it('should return the initial state', () => {
    const action   = questionnairesReducer(undefined, {})
    const expected = initialState

    expect(action).toEqual(expected)
  })

  it('should handle a request action', () => {
    const action   = questionnairesReducer(undefined, { type: QUESTIONNAIRES.REQUEST })
    const expected = { ...initialState, isLoading: true }

    expect(action).toEqual(expected)
  })
})
