//-----------  Imports  -----------//

import { EMAIL_VERIFICATION } from './actions';

//-----------  Definitions  -----------//

export const initialState = {
  data: null,
  error: null,
  isLoading: false,
};

//-----------  Reducers  -----------//

export default function emailverificationReducer(state = initialState, action) {
  const { data, error } = action;

  switch (action.type) {
    case EMAIL_VERIFICATION.REQUEST:
      return { ...state, isLoading: true };

    case EMAIL_VERIFICATION.SUCCESS:
      return { ...initialState, data };

    case EMAIL_VERIFICATION.FAILURE:
      return { ...initialState, error };

    default:
      return state;
  }
}
