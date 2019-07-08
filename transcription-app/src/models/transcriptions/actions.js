//-----------  Imports  -----------//

import { createActionConstants } from 'utilities/sagas'

//-----------  Definitions  -----------//

export const TRANSCRIPTIONS = createActionConstants('TRANSCRIPTIONS', ['SUBMIT'])

//-----------  Transcriptions Actions  -----------//

export const transcriptionsActions = {
  submit: (text, isReview) => ({ type : TRANSCRIPTIONS.SUBMIT, text, isReview }),
}

//-----------  Saga Actions  -----------//

export const sagaActions = {
  success: () => ({ type: TRANSCRIPTIONS.SUCCESS }),
  failure: (error) => ({ type: TRANSCRIPTIONS.FAILURE, error }),
}
