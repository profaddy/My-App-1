//-----------  Imports  -----------//

import { createActionConstants } from '@miro/core-ui/lib/utilities/sagas'

//-----------  Definitions  -----------//

export const ROUTING = createActionConstants('ROUTING', ['FINISHED'])

//-----------  Modals Actions  -----------//

export const routingActions = {
  finished: () => ({ type: ROUTING.FINISHED })
}

//-----------  Saga Actions  -----------//

export const sagaActions = {
  success: (stage) => ({ type: ROUTING.SUCCESS, stage }),
  failure: (error) => ({ type: ROUTING.FAILURE, error }),
}
