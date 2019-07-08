//-----------  Imports  -----------//

import { createActionConstants } from '@miro/core-ui/lib/utilities/sagas'

//-----------  Definitions  -----------//

export const USER = createActionConstants('USER', ['EXIT', 'UPDATE', 'ATTEMPT'])

//-----------  User Actions  -----------//

export const userActions = {
  exit    : () => ({ type: USER.EXIT }),
  update  : (data) => ({ type: USER.UPDATE, data }),
  attempt : (passed) => ({ type: USER.ATTEMPT, passed }),
}

//-----------  Saga Actions  -----------//

export const sagaActions = {
  success: (data) => ({ type: USER.SUCCESS, data }),
  failure: (error) => ({ type: USER.FAILURE, error }),
}
