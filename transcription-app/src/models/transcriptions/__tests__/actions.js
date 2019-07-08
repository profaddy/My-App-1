//-----------  Imports  -----------//

import { sagaActions,
         TRANSCRIPTIONS,
         transcriptionsActions } from '../actions'

//-----------  Definitions  -----------//

const text  = 'Just a string of example text...'
const error = new Error('Invalid password')

//-----------  Model Actions Tests  -----------//

describe('Transcriptions Model: Actions', () => {
  it('should create an submit action', () => {
    const action   = transcriptionsActions.submit(text, false)
    const expected = { type: TRANSCRIPTIONS.SUBMIT, text, isReview: false }

    expect(action).toEqual(expected)
  })
})

//-----------  Saga Actions Tests  -----------//

describe('Transcriptions Model: Saga Actions', () => {
  it('should create an success action', () => {
    const action   = sagaActions.success()
    const expected = { type: TRANSCRIPTIONS.SUCCESS }

    expect(action).toEqual(expected)
  })

  it('should create an failure action', () => {
    const action   = sagaActions.failure(error)
    const expected = { type: TRANSCRIPTIONS.FAILURE, error }

    expect(action).toEqual(expected)
  })
})