//-----------  Imports  -----------//

import api from '@miro/core-ui/lib/utilities/api';

//-----------  Endpoints  -----------//

export const signIn = (email, password) => {
  return api.post('/rest-auth/token/', { email, password });
};

export const signOut = () => {
  return api.post('/rest-auth/logout/');
};
