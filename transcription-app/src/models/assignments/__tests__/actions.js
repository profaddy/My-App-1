//-----------  Imports  -----------//

import { ASSIGNMENTS,
         sagaActions,
         assignmentsActions } from '../actions'

//-----------  Definitions  -----------//

const data  = [{ id: 1 },{ id: 2 }]
const error = new Error('Invalid password')

//-----------  Model Actions Tests  -----------//

describe('Assignments Model: Actions', () => {
  it('should create a request action', () => {
    const action   = assignmentsActions.request()
    const expected = { type: ASSIGNMENTS.REQUEST }

    expect(action).toEqual(expected)
  })

  it('should create an assign action', () => {
    const action   = assignmentsActions.assign(15)
    const expected = { type: ASSIGNMENTS.ASSIGN, id: 15 }

    expect(action).toEqual(expected)
  })
})

//-----------  Saga Actions Tests  -----------//

describe('Assignments Model: Saga Actions', () => {
  it('should create an success action', () => {
    const action   = sagaActions.success(data)
    const expected = { type: ASSIGNMENTS.SUCCESS, data }

    expect(action).toEqual(expected)
  })

  it('should create an failure action', () => {
    const action   = sagaActions.failure(error)
    const expected = { type: ASSIGNMENTS.FAILURE, error }

    expect(action).toEqual(expected)
  })
})