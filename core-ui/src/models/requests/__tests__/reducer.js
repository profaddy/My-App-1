//-----------  Imports  -----------//

import { requestTypeConst,
         successTypeConst,
         failureTypeConst,
         createActionConstant }          from 'utilities/sagas'

import { REQUESTS }                      from '../actions'
import requestsReducer, { initialState } from '../reducer'

//-----------  Definitions  -----------//

const base = 'SAMPLE'

//-----------  Reducer Tests  -----------//

describe('Requests Model: Reducer', () => {
  it('should return the initial state', () => {
    const action   = requestsReducer(undefined, {})
    const expected = initialState

    expect(action).toEqual(expected)
  })

  it('should handle an add action', () => {
    const action   = requestsReducer({ ...initialState, count: 1 }, { type: REQUESTS.ADD })
    const expected = { ...initialState, count: 2 }

    expect(action).toEqual(expected)
  })

  it('should handle a remove action', () => {
    const action   = requestsReducer({ ...initialState, count: 1 }, { type: REQUESTS.REMOVE })
    const expected = { ...initialState, count: 0 }

    expect(action).toEqual(expected)
  })

  it('should ignore non-CRUD actions', () => {
    const action   = requestsReducer(undefined, { type: createActionConstant(base, 'ANYTHING') })
    const expected = initialState

    expect(action).toEqual(expected)
  })

  it('should recognize & handle a request action', () => {
    const action   = requestsReducer(undefined, { type: createActionConstant(base, requestTypeConst) })
    const expected = { ...initialState, count: 1 }

    expect(action).toEqual(expected)
  })

  it('should recognize & handle a success action', () => {
    const action   = requestsReducer({ ...initialState, count: 1 }, { type: createActionConstant(base, successTypeConst) })
    const expected = { ...initialState, count: 0 }

    expect(action).toEqual(expected)
  })

  it('should recognize & handle a failure action', () => {
    const action   = requestsReducer({ ...initialState, count: 1 }, { type: createActionConstant(base, failureTypeConst) })
    const expected = { ...initialState, error: true, count: 0 }

    expect(action).toEqual(expected)
  })
})
