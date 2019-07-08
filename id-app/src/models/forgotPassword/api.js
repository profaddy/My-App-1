//-----------  Imports  -----------//

import api from '@miro/core-ui/lib/utilities/api';

//-----------  Endpoints  -----------//

export const forgotPassword = data => {
  return api.post('/rest-auth/password/reset/', data);
};
