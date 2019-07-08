//-----------  Imports  -----------//

import { createActionConstants } from '@miro/core-ui/lib/utilities/sagas'

//-----------  Definitions  -----------//

export const MODALS = createActionConstants('MODALS', ['SHOW', 'HIDE','SIGNOUT'])

//-----------  Modals Actions  -----------//

export const modalsActions = {
  signout:() => ({ type:MODALS.SIGNOUT }),
  show: (modal, props, options) => ({ type: MODALS.SHOW, modal, props, options }),
  hide: () => ({ type: MODALS.HIDE }),
}