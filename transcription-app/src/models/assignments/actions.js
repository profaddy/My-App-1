//-----------  Imports  -----------//

import { createActionConstants } from '@miro/core-ui/src/utilities/sagas'

//-----------  Definitions  -----------//

export const ASSIGNMENTS = createActionConstants('ASSIGNMENTS', ['ASSIGN'])

//-----------  Assignments Actions  -----------//

export const assignmentsActions = {
  request : () => ({ type: ASSIGNMENTS.REQUEST }),
  assign  : (id) => ({ type: ASSIGNMENTS.ASSIGN, id }),
}

//-----------  Saga Actions  -----------//

export const sagaActions = {
  success : (data) => ({ type: ASSIGNMENTS.SUCCESS, data }),
  failure : (error) => ({ type: ASSIGNMENTS.FAILURE, error }),
}
