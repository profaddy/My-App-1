//-----------  Imports  -----------//

import { USER }                      from '../actions'
import userReducer, { initialState } from '../reducer'

//-----------  Definitions  -----------//

const data = { name : 'User', email : 'user@email.com' }

//-----------  Reducer Tests  -----------//

describe('User Model: Reducer', () => {
  jest.resetModules()
  jest.mock('../../user/api')

  it('should return the initial state', () => {
    const action   = userReducer(undefined, {})
    const expected = initialState

    expect(action).toEqual(expected)
  })

  it('should handle a success action', () => {
    const action   = userReducer(undefined, { type: USER.SUCCESS, data })
    const expected = { ...initialState, isLoading: false, data }

    expect(action).toEqual(expected)
  })
})
