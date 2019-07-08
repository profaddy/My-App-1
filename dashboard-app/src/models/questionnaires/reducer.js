//-----------  Imports  -----------//

import { QUESTIONNAIRES } from './actions';

//-----------  Definitions  -----------//

export const initialState = {
  data: [],
  error: null,
  isLoading: false,
};

//-----------  Reducers  -----------//

export default function questionnairesReducer(state = initialState, action) {
  const { data, error } = action;

  switch (action.type) {
    case QUESTIONNAIRES.CREATE:
    case QUESTIONNAIRES.REQUEST:
      return { ...state, isLoading: true };

    case QUESTIONNAIRES.SUCCESS:
      return { ...initialState, data };

    case QUESTIONNAIRES.FAILURE:
      return { ...initialState, error };

    default:
      return state;
  }
}
