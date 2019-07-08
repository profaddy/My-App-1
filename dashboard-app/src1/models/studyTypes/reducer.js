//-----------  Imports  -----------//

import { STUDY_TYPES } from './actions';

//-----------  Definitions  -----------//

export const initialState = {
  data: [],
  error: null,
  isLoading: false,
};

//-----------  Reducers  -----------//

export default function studyTypesReducer(state = initialState, action) {
  const { data, error } = action;

  switch (action.type) {
    case STUDY_TYPES.CREATE:
    case STUDY_TYPES.REQUEST:
      return { ...state, isLoading: true };

    case STUDY_TYPES.SUCCESS:
      return { ...initialState, data };

    case STUDY_TYPES.FAILURE:
      return { ...initialState, error };

    default:
      return state;
  }
}
