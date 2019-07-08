//-----------  Imports  -----------//

import {
  signUpActions,
  resendVerificationEmailActions,
  REGISTRATION_CHECK,
  LICENSING_BOARDS,
  PRACTICE_AREAS,
  INSTITUTIONS,
} from './actions';

//-----------  Definitions  -----------//

export const initialState = {
  success: null,
  error: null,
  isLoading: true,
  registrationCheck: false,
  licensingBoards: [],
  practiceAreas: [],
  institutions: [],
};

//-----------  Reducers  -----------//

export default function signUpReducer(state = initialState, action) {
  const {
    data,
    payload,
    error,
    // registrationCheck,
    licensingBoards,
    practiceAreas,
    institutions,
  } = action;

  switch (action.type) {
    case resendVerificationEmailActions.resendVerificationEmail.REQUEST:
      return { ...state, isLoading: true };

    case resendVerificationEmailActions.resendVerificationEmail.SUCCESS:
      return { ...state, isLoading: false, success: payload };

    case resendVerificationEmailActions.resendVerificationEmail.FAILURE:
      return { ...state, isLoading: false, error: payload };

    case signUpActions.signUp.REQUEST:
      return { ...state, isLoading: true };

    case signUpActions.signUp.SUCCESS:
      return { ...state, isLoading: false, success: payload };

    case signUpActions.signUp.FAILURE:
      return { ...state, isLoading: false, error: payload };

    case REGISTRATION_CHECK.REQUEST:
      return { ...state, isLoading: true, registrationCheck: false };

    case REGISTRATION_CHECK.SUCCESS:
      return { ...state, isLoading: false, registrationCheck: data };

    case REGISTRATION_CHECK.FAILURE:
      return { ...state, isLoading: false, error };

    case LICENSING_BOARDS.REQUEST:
      return { ...state, isLoading: true };

    case LICENSING_BOARDS.SUCCESS:
      return { ...state, isLoading: false, licensingBoards };

    case LICENSING_BOARDS.FAILURE:
      return { ...state, isLoading: false, error };

    case PRACTICE_AREAS.REQUEST:
      return { ...state, isLoading: true };

    case PRACTICE_AREAS.SUCCESS:
      return { ...state, isLoading: false, practiceAreas };

    case PRACTICE_AREAS.FAILURE:
      return { ...state, isLoading: false, error };

    case INSTITUTIONS.REQUEST:
      return { ...state, isLoading: true };

    case INSTITUTIONS.SUCCESS:
      return { ...state, isLoading: false, institutions };

    case INSTITUTIONS.FAILURE:
      return { ...state, isLoading: false, error };

    default:
      return state;
  }
}
