//-----------  Imports  -----------//

import api from '@miro/core-ui/lib/utilities/api';

//-----------  Endpoints  -----------//

export const requestSetPassword = data => {
  let temp = {
    ...data,
    new_password1: data.password1,
    new_password2: data.password1,
  };
  delete temp.password1;

  return api.post('/rest-auth/password/reset/confirm/', temp);
};
