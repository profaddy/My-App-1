//-----------  Imports  -----------//

import { actionTypes } from 'redux-form';

import { USER } from './actions';

import { form, over18 } from 'forms/SignatureForm/config';

//-----------  Definitions  -----------//

export const initialState = {
  data: null,
  error: null,
  over_18: null,
  attempts: 3,
  passed: false,
  hasLoaded: false,
  eligible: false,
  screened: false,
  isError: true,
};

//-----------  Reducers  -----------//

export default function participantReducer(state = initialState, action) {
  const { data, meta, error, passed, payload } = action;

  switch (action.type) {
    case USER.UPDATE:
      return { ...state, ...data };

    case USER.ATTEMPT:
      return { ...state, passed, attempts: state.attempts - 1 };

    case actionTypes.CHANGE:
      if (form === meta.form && over18 === meta.field)
        return { ...state, over_18: 'yes' === payload };
      else return state;

    case USER.SUCCESS:
      return { ...initialState, data, hasLoaded: true };

    case USER.FAILURE:
      return { ...initialState, error, hasLoaded: true };

    default:
      return state;
  }
}
