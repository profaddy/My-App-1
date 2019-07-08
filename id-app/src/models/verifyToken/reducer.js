//-----------  Imports  -----------//

import { VERIFY_TOKEN } from './actions';

//-----------  Definitions  -----------//

export const initialState = {
  error: null,
  verified: false,
  isLoading: false,
};

//-----------  Reducers  -----------//

export default function verifyTokenReducer(state = initialState, action) {
  const { error } = action;

  switch (action.type) {
    case VERIFY_TOKEN.REQUEST:
      return { ...state, isLoading: true };

    case VERIFY_TOKEN.SUCCESS:
      return { ...initialState, verified: true };

    case VERIFY_TOKEN.FAILURE:
      return { ...initialState, error };

    default:
      return state;
  }
}
