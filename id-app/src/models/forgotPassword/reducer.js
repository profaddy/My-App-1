//-----------  Imports  -----------//

import { forgotPasswordActions } from './actions';

//-----------  Definitions  -----------//

export const initialState = {
  email: '',
  success: null,
  error: null,
  isLoading: true,
};

//-----------  Reducers  -----------//

export default function forgotPasswordReducer(state = initialState, action) {
  const { payload } = action;

  switch (action.type) {
    case forgotPasswordActions.reset.REQUEST:
      return { ...state, isLoading: true, email: payload.email };

    case forgotPasswordActions.reset.SUCCESS:
      return { ...state, isLoading: false, success: payload };

    case forgotPasswordActions.reset.FAILURE:
      return { ...state, isLoading: false, error: payload };

    default:
      return state;
  }
}
