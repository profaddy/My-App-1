//-----------  Imports  -----------//

import { createActionConstants } from 'utilities/sagas';

//-----------  Definitions  -----------//

export const APP = createActionConstants('APP', ['INIT']);

//-----------  User Actions  -----------//

export const appActions = {
  init: () => ({ type: APP.INIT }),
};
