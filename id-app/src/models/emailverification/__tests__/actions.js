//-----------  Imports  -----------//

import { EMAIL_VERIFICATION, emailverificationActions } from '../actions'

//-----------  Actions Tests  -----------//

describe('EmailVerification Model: Actions', () => {
  it('should create an request action', () => {
    const action   = emailverificationActions.request()
    const expected = { type: EMAIL_VERIFICATION.REQUEST }

    expect(action).toEqual(expected)
  })
})
