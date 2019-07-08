//-----------  Imports  -----------//

import api from '@miro/core-ui/lib/utilities/api';

//-----------  Endpoints  -----------//

export const requestEmailVerification = token => {
  return api.get(`rest-auth/email_verification/verify_email/${token}/`);
};
