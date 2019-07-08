//-----------  Imports  -----------//

import { TESTS, testsActions } from '../actions'

//-----------  Actions Tests  -----------//

describe('Tests Model: Actions', () => {
  it('should create an request action', () => {
    const action   = testsActions.request()
    const expected = { type: TESTS.REQUEST }

    expect(action).toEqual(expected)
  })
})
