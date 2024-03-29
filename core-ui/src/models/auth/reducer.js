//-----------  Imports  -----------//

import { AUTH } from './actions';

//-----------  Definitions  -----------//

export const initialState = {
  email: null,
  token: null,
  error: null,
  isLoading: true,
};

//-----------  Reducers  -----------//

export default function authReducer(state = initialState, action) {
  const { email, token, error } = action;
  const isLoading = false;

  switch (action.type) {
    case AUTH.SIGN_IN:
      return { ...state, isLoading: true };

    case AUTH.SIGN_OUT:
      return { ...initialState, isLoading };

    case AUTH.SUCCESS:
      return { ...initialState, email, token, isLoading };

    case AUTH.FAILURE:
      return { ...initialState, error: error, isLoading };

    default:
      return state;
  }
}
