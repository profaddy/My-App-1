//-----------  Imports  -----------//

import { createActionConstants } from '@miro/core-ui/src/utilities/sagas'

//-----------  Definitions  -----------//

export const SUBJECTS = createActionConstants('SUBJECTS')

//-----------  Subjects Actions  -----------//

export const subjectsActions = {
  request: () => ({ type: SUBJECTS.REQUEST }),
}

//-----------  Saga Actions  -----------//

export const sagaActions = {
  success : (data) => ({ type: SUBJECTS.SUCCESS, data }),
  failure : (error) => ({ type: SUBJECTS.FAILURE, error }),
}
