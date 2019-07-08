//-----------  Imports  -----------//

import { createActionConstants } from '@miro/core-ui/lib/utilities/sagas';

//-----------  Definitions  -----------//

export const EMAIL_VERIFICATION = createActionConstants('EMAIL_VERIFICATION');

//-----------  Email Verification Actions  -----------//

export const emailverificationActions = {
  request: token => ({ type: EMAIL_VERIFICATION.REQUEST, token }),
};

//-----------  Saga Actions  -----------//

export const sagaActions = {
  success: data => ({ type: EMAIL_VERIFICATION.SUCCESS, data }),
  failure: error => ({ type: EMAIL_VERIFICATION.FAILURE, error }),
};
