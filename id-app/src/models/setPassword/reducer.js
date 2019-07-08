//-----------  Imports  -----------//

import { setPasswordActions } from './actions';

//-----------  Definitions  -----------//

export const initialState = {
  data: null,
  error: null,
  isLoading: false,
};

//-----------  Reducers  -----------//

export default function setPasswordReducer(state = initialState, action) {
  const { payload } = action;

  switch (action.type) {
    case setPasswordActions.request.REQUEST:
      return { ...state, isLoading: true };

    case setPasswordActions.request.SUCCESS:
      return { ...initialState, data: payload };

    case setPasswordActions.request.FAILURE:
      return { ...initialState, error: payload };

    default:
      return state;
  }
}
