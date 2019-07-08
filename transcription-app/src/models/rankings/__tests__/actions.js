//-----------  Imports  -----------//

import { RANKINGS,
         sagaActions,
         rankingsActions } from '../actions'

//-----------  Definitions  -----------//

const data  = [{ id: 1 },{ id: 2 }]
const error = new Error('Invalid password')

//-----------  Model Actions Tests  -----------//

describe('Rankings Model: Actions', () => {
  it('should create an request action', () => {
    const action   = rankingsActions.request()
    const expected = { type: RANKINGS.REQUEST }

    expect(action).toEqual(expected)
  })
})

//-----------  Saga Actions Tests  -----------//

describe('Rankings Model: Saga Actions', () => {
  it('should create an success action', () => {
    const action   = sagaActions.success(data)
    const expected = { type: RANKINGS.SUCCESS, data }

    expect(action).toEqual(expected)
  })

  it('should create an failure action', () => {
    const action   = sagaActions.failure(error)
    const expected = { type: RANKINGS.FAILURE, error }

    expect(action).toEqual(expected)
  })
})