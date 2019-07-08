//-----------  Imports  -----------//

import { SUBJECTS,
         sagaActions,
         subjectsActions } from '../actions'

//-----------  Definitions  -----------//

const data  = [{ id: 1 },{ id: 2 }]
const error = new Error('Invalid password')

//-----------  Model Actions Tests  -----------//

describe('Subjects Model: Actions', () => {
  it('should create an request action', () => {
    const action   = subjectsActions.request()
    const expected = { type: SUBJECTS.REQUEST }

    expect(action).toEqual(expected)
  })
})

//-----------  Saga Actions Tests  -----------//

describe('Subjects Model: Saga Actions', () => {
  it('should create an success action', () => {
    const action   = sagaActions.success(data)
    const expected = { type: SUBJECTS.SUCCESS, data }

    expect(action).toEqual(expected)
  })

  it('should create an failure action', () => {
    const action   = sagaActions.failure(error)
    const expected = { type: SUBJECTS.FAILURE, error }

    expect(action).toEqual(expected)
  })
})