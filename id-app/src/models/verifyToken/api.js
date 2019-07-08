//-----------  Imports  -----------//

import api from '@miro/core-ui/lib/utilities/api';

//-----------  Endpoints  -----------//

export const requestVerifyToken = data => {
  return api.post(
    `/rest-auth/email_verification/verify_token/${data.uid}/${data.token}/`,
  );
};
