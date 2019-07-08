//-----------  Imports  -----------//

import {
  createFormAction,
  createActionConstants,
} from '@miro/core-ui/lib/utilities/sagas';

//-----------  Definitions  -----------//

export const AUTH = createActionConstants('AUTH', ['SIGN_IN', 'SIGN_OUT']);

//-----------  Auth Actions  -----------//

export const authActions = {
  signIn: createFormAction(AUTH.SIGN_IN),
  signOut: () => ({ type: AUTH.SIGN_OUT }),
};

//-----------  Saga Actions  -----------//

export const sagaActions = {
  success: (access, refresh) => {
    return { type: AUTH.SUCCESS, access, refresh };
  },
  failure: error => {
    return { type: AUTH.FAILURE, error };
  },
};
