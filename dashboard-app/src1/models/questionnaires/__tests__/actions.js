//-----------  Imports  -----------//

import { STUDIES, studiesActions } from '../actions'

//-----------  Actions Tests  -----------//

describe('Studies Model: Actions', () => {
  it('should create an request action', () => {
    const action   = studiesActions.request()
    const expected = { type: STUDIES.REQUEST }

    expect(action).toEqual(expected)
  })
})
