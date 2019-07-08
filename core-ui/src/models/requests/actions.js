//-----------  Imports  -----------//

import { createActionConstants } from 'utilities/sagas';

//-----------  Definitions  -----------//

export const REQUESTS = createActionConstants('REQUESTS', ['ADD', 'REMOVE']);

//-----------  Requests Actions  -----------//

export const requestsActions = {
  add: () => ({ type: REQUESTS.ADD }),
  remove: () => ({ type: REQUESTS.REMOVE }),
};
