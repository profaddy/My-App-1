//-----------  Imports  -----------//

import { STUDIES } from './actions';

//-----------  Definitions  -----------//

export const initialState = {
  data: [],
  error: null,
  isLoading: false,
};

//-----------  Reducers  -----------//

export default function studiesReducer(state = initialState, action) {
  const { data, error } = action;

  switch (action.type) {

    case STUDIES.CREATE:
    case STUDIES.REQUEST:
      return { ...state, isLoading: true };

    case STUDIES.SUCCESS:
      return { ...initialState, data };

    case STUDIES.FAILURE:
      return { ...initialState, error };

    default:
      return state;
  }
}
