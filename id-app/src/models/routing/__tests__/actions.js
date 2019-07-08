//-----------  Imports  -----------//

import { ROUTING, routingActions } from '../actions'

//-----------  Actions Tests  -----------//

describe('Routing Model: Actions', () => {
  it('should create an request action', () => {
    const action   = routingActions.request()
    const expected = { type: ROUTING.REQUEST }

    expect(action).toEqual(expected)
  })
})
