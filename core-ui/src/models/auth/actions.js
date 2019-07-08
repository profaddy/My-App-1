//-----------  Imports  -----------//

import { createActionConstants } from 'utilities/sagas';

//-----------  Definitions  -----------//

export const AUTH = createActionConstants('AUTH', ['SIGN_OUT']);

//-----------  Auth Actions  -----------//

export const authActions = {
  signOut: () => {
    return { type: AUTH.SIGN_OUT };
  },
};

//-----------  Saga Actions  -----------//

export const sagaActions = {
  success: token => {
    return { type: AUTH.SUCCESS, token };
  },
  failure: error => {
    return { type: AUTH.FAILURE, error };
  },
};
