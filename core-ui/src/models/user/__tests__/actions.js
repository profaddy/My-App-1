//-----------  Imports  -----------//

import { USER, sagaActions } from '../actions'

//-----------  Definitions  -----------//

const data  = { name : 'User', email : 'user@email.com' }
const error = new Error('Invalid password')

//-----------  Actions Tests  -----------//

describe('User Model: Saga Actions', () => {
  it('should create an success action', () => {
    const action   = sagaActions.success(data)
    const expected = { type: USER.SUCCESS, data }

    expect(action).toEqual(expected)
  })

  it('should create an failure action', () => {
    const action   = sagaActions.failure(error)
    const expected = { type: USER.FAILURE, error }

    expect(action).toEqual(expected)
  })
})
