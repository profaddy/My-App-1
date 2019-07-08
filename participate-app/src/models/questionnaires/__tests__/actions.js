//-----------  Imports  -----------//

import { QUESTIONNAIRES, questionnairesActions } from '../actions'

//-----------  Actions Tests  -----------//

describe('Questionnaires Model: Actions', () => {
  it('should create an request action', () => {
    const action   = questionnairesActions.request()
    const expected = { type: QUESTIONNAIRES.REQUEST }

    expect(action).toEqual(expected)
  })
})
