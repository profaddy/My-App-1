//-----------  Imports  -----------//

import { createActionConstants } from 'utilities/sagas'

//-----------  Definitions  -----------//

export const ACTIVITY = createActionConstants('ACTIVITY')

//-----------  Activity Actions  -----------//

export const activityActions = {
  request: () => ({ type: ACTIVITY.REQUEST }),
}

//-----------  Saga Actions  -----------//

export const sagaActions = {
  success: (data) => ({ type: ACTIVITY.SUCCESS, data }),
  failure: (error) => ({ type: ACTIVITY.FAILURE, error }),
}
