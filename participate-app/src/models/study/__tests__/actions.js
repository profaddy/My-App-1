//-----------  Imports  -----------//

import { STUDY, studyActions } from '../actions'

//-----------  Actions Tests  -----------//

describe('Study Model: Actions', () => {
  it('should create an request action', () => {
    const action   = studyActions.request()
    const expected = { type: STUDY.REQUEST }

    expect(action).toEqual(expected)
  })
})
