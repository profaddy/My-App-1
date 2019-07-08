//-----------  Imports  -----------//

import { SET_PASSWORD, setPasswordActions } from '../actions'

//-----------  Actions Tests  -----------//

describe('SetPassword Model: Actions', () => {
  it('should create an request action', () => {
    const action   = setPasswordActions.request()
    const expected = { type: SET_PASSWORD.REQUEST }

    expect(action).toEqual(expected)
  })
})
