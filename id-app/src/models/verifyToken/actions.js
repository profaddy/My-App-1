//-----------  Imports  -----------//

import { createActionConstants } from '@miro/core-ui/lib/utilities/sagas';

//-----------  Definitions  -----------//

export const VERIFY_TOKEN = createActionConstants('VERIFY_TOKEN');

//-----------  Verify Token Actions  -----------//

export const verifyTokenActions = {
  request: token => ({ type: VERIFY_TOKEN.REQUEST, token }),
};

//-----------  Saga Actions  -----------//

export const sagaActions = {
  success: () => ({ type: VERIFY_TOKEN.SUCCESS }),
  failure: error => ({ type: VERIFY_TOKEN.FAILURE, error }),
};
