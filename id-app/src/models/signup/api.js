//-----------  Imports  -----------//

import api from '@miro/core-ui/lib/utilities/api';

//-----------  Endpoints  -----------//

export const signUp = signUpForm => {
  let temp = {
    ...signUpForm,
  };
  if (!temp.is_licensed) {
    delete temp.license_number;
    delete temp.licensing_board_id;
  }
  if (temp.licensing_board_id === 'other') {
    delete temp.licensing_board_id;
    temp.other_licensing_board = true;
  } else {
    delete temp.licensing_board_text;
  }
  if (temp.institution_id === 'other') {
    delete temp.institution_id;
    temp.other_institution = true;
  } else {
    delete temp.institution_text;
  }
  if (temp.practice_area_id === 'other') {
    delete temp.practice_area_id;
    temp.other_practice_area = true;
  } else {
    delete temp.practice_area_text;
  }
  return api.post('/rest-auth/registration/', temp);
};

export const requestResendVerificationEmail = email => {
  return api.post(
    `/rest-auth/email_verification/resend_verification_email/`,
    email,
  );
};
export const requestRegistrationCheck = ({ email }) => {
  return api.get(`/rest-auth/email_exists/`, { params: { email } });
};

// export const requestRegistrationCheck = require('./__mocks__/api')
//   .requestRegistrationCheck;
// export const requestLicensingBoards = require('./__mocks__/api')
//   .requestLicensingBoards;
// export const requestPracticeAreas = require('./__mocks__/api')
//   .requestPracticeAreas;
// export const requestInstitutions = require('./__mocks__/api')
//   .requestInstitutions;

export const requestLicensingBoards = () => {
  return api.get('/api/v1/licensingboards/');
};

export const requestPracticeAreas = () => {
  return api.get('/api/v1/practiceareas/');
};

export const requestInstitutions = () => {
  return api.get('/api/v1/institutions/');
};
