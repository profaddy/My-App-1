//-----------  Imports  -----------//

import {
  createFormAction,
  createActionConstants,
} from '@miro/core-ui/lib/utilities/sagas';

//-----------  Definitions  -----------//

export const SET_PASSWORD = createActionConstants('SET_PASSWORD');

//-----------  Set Password Actions  -----------//

export const setPasswordActions = {
  request: createFormAction(SET_PASSWORD.REQUEST),
};
