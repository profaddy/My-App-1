//-----------  Imports  -----------//

import { createActionConstants } from 'utilities/sagas';

//-----------  Definitions  -----------//

export const USER = createActionConstants('USER');

//-----------  Saga Actions  -----------//

export const sagaActions = {
  success: data => ({ type: USER.SUCCESS, data }),
  failure: error => ({ type: USER.FAILURE, error }),
};
