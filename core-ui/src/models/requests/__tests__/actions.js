//-----------  Imports  -----------//

import { REQUESTS, requestsActions } from '../actions'

//-----------  Actions Tests  -----------//

describe('Requests Model: Actions', () => {
  it('should create an add action', () => {
    const action   = requestsActions.add()
    const expected = { type: REQUESTS.ADD }

    expect(action).toEqual(expected)
  })

  it('should create a remove action', () => {
    const action   = requestsActions.remove()
    const expected = { type: REQUESTS.REMOVE }

    expect(action).toEqual(expected)
  })
})
