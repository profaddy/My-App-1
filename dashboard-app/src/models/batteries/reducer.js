//-----------  Imports  -----------//

import { BATTERIES } from './actions';

//-----------  Definitions  -----------//

export const initialState = {
  data: [],
  error: null,
  isLoading: false,
};

//-----------  Reducers  -----------//

export default function batteriesReducer(state = initialState, action) {
  const { data, error } = action;

  switch (action.type) {

    case BATTERIES.CREATE:
    case BATTERIES.REQUEST:
      return { ...state, isLoading: true };

    case BATTERIES.SUCCESS:
      return { ...initialState, data };

    case BATTERIES.FAILURE:
      return { ...initialState, error };

    default:
      return state;
  }
}
