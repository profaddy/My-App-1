//-----------  Imports  -----------//

import { APP, appActions } from '../actions'

//-----------  Actions Tests  -----------//

describe('App Model: Actions', () => {
  it('should create an init action', () => {
    const action   = appActions.init()
    const expected = { type: APP.INIT }

    expect(action).toEqual(expected)
  })
})
