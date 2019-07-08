//-----------  Imports  -----------//

import {
  createFormAction,
  createActionConstants,
} from '@miro/core-ui/lib/utilities/sagas';

//-----------  Definitions  -----------//

export const FORGOT_PASSWORD = createActionConstants('FORGOT_PASSWORD', [
  'RESET',
]);

//-----------  Auth Actions  -----------//

export const forgotPasswordActions = {
  reset: createFormAction(FORGOT_PASSWORD.RESET),
};
