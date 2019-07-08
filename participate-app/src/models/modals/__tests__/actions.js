//-----------  Imports  -----------//

import { MODALS, modalsActions } from '../actions'

//-----------  Actions Tests  -----------//

describe('Modals Model: Actions', () => {
  it('should create an request action', () => {
    const action   = modalsActions.request()
    const expected = { type: MODALS.REQUEST }

    expect(action).toEqual(expected)
  })
})
