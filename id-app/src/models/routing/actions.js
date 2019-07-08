//-----------  Imports  -----------//

import { createActionConstants } from '@miro/core-ui/lib/utilities/sagas';

//-----------  Definitions  -----------//

export const ROUTING = createActionConstants('ROUTING');

//-----------  Routing Actions  -----------//

export const routingActions = {
  request: () => ({ type: ROUTING.REQUEST }),
};
