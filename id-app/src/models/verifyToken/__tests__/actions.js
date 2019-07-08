//-----------  Imports  -----------//

import { VERIFY_TOKEN, verifyTokenActions } from '../actions'

//-----------  Actions Tests  -----------//

describe('VerifyToken Model: Actions', () => {
  it('should create an request action', () => {
    const action   = verifyTokenActions.request()
    const expected = { type: VERIFY_TOKEN.REQUEST }

    expect(action).toEqual(expected)
  })
})
