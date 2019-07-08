//-----------  Imports  -----------//

import { createActionConstants } from 'utilities/sagas'

//-----------  Definitions  -----------//

export const RANKINGS = createActionConstants('RANKINGS')

//-----------  Rankings Actions  -----------//

export const rankingsActions = {
  request: () => ({ type: RANKINGS.REQUEST }),
}

//-----------  Saga Actions  -----------//

export const sagaActions = {
  success: (data) => ({ type: RANKINGS.SUCCESS, data }),
  failure: (error) => ({ type: RANKINGS.FAILURE, error }),
}
