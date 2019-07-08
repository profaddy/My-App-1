//-----------  Imports  -----------//

import { SIDEBAR, sidebarActions } from '../actions'

//-----------  Actions Tests  -----------//

describe('Sidebar Model: Actions', () => {
  it('should create an request action', () => {
    const action   = sidebarActions.request()
    const expected = { type: SIDEBAR.REQUEST }

    expect(action).toEqual(expected)
  })
})
