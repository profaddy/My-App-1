//-----------  Imports  -----------//

import {
  createFormAction,
  createActionConstants,
} from '@miro/core-ui/lib/utilities/sagas';

//-----------  Definitions  -----------//

export const SIGN_UP = createActionConstants('SIGN_UP');

export const REGISTRATION_CHECK = createActionConstants('REGISTRATION_CHECK');
export const LICENSING_BOARDS = createActionConstants('LICENSING_BOARDS');
export const PRACTICE_AREAS = createActionConstants('PRACTICE_AREAS');
export const INSTITUTIONS = createActionConstants('INSTITUTIONS');
export const RESEND_VERIFICATION_EMAIL = createActionConstants(
  'RESEND_VERIFICATION_EMAIL',
);

//-----------  Auth Actions  -----------//

export const signUpActions = {
  signUp: createFormAction(SIGN_UP.REQUEST),
};
export const resendVerificationEmailActions = {
  resendVerificationEmail: createFormAction(RESEND_VERIFICATION_EMAIL.REQUEST),
};

export const registrationCheckActions = {
  request: email => ({ type: REGISTRATION_CHECK.REQUEST, email }),
};
export const licensingBoardActions = {
  request: () => ({ type: LICENSING_BOARDS.REQUEST }),
};
export const practiceAreaActions = {
  request: () => ({ type: PRACTICE_AREAS.REQUEST }),
};
export const institutionActions = {
  request: () => ({ type: INSTITUTIONS.REQUEST }),
};

export const registrationCheckSagaActions = {
  success: data => ({
    type: REGISTRATION_CHECK.SUCCESS,
    data,
  }),
  failure: error => ({ type: REGISTRATION_CHECK.FAILURE, error }),
};
export const licensingBoardSagaActions = {
  success: licensingBoards => ({
    type: LICENSING_BOARDS.SUCCESS,
    licensingBoards,
  }),
  failure: error => ({ type: LICENSING_BOARDS.FAILURE, error }),
};
export const practiceAreaSagaActions = {
  success: practiceAreas => ({ type: PRACTICE_AREAS.SUCCESS, practiceAreas }),
  failure: error => ({ type: PRACTICE_AREAS.FAILURE, error }),
};
export const institutionSagaActions = {
  success: institutions => ({ type: INSTITUTIONS.SUCCESS, institutions }),
  failure: error => ({ type: INSTITUTIONS.FAILURE, error }),
};
