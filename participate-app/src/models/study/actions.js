//-----------  Imports  -----------//

import { createActionConstants } from '@miro/core-ui/lib/utilities/sagas'

//-----------  Definitions  -----------//

export const STUDY = createActionConstants('STUDY')

//-----------  Saga Actions  -----------//

export const sagaActions = {
  success: (data) => ({ type: STUDY.SUCCESS, data }),
  failure: (error) => ({ type: STUDY.FAILURE, error }),
}
