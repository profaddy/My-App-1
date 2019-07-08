//-----------  Imports  -----------//

import { ACTIVITY,
         sagaActions,
         activityActions } from '../actions'

//-----------  Definitions  -----------//

const data  = [{ id: 1 },{ id: 2 }]
const error = new Error('Invalid password')

//-----------  Model Actions Tests  -----------//

describe('Activity Model: Actions', () => {
  it('should create an request action', () => {
    const action   = activityActions.request()
    const expected = { type: ACTIVITY.REQUEST }

    expect(action).toEqual(expected)
  })
})

//-----------  Saga Actions Tests  -----------//

describe('Activity Model: Saga Actions', () => {
  it('should create an success action', () => {
    const action   = sagaActions.success(data)
    const expected = { type: ACTIVITY.SUCCESS, data }

    expect(action).toEqual(expected)
  })

  it('should create an failure action', () => {
    const action   = sagaActions.failure(error)
    const expected = { type: ACTIVITY.FAILURE, error }

    expect(action).toEqual(expected)
  })
})