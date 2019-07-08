//-----------  Imports  -----------//

import api from 'utilities/api';

//-----------  Endpoints  -----------//

export const signOut = () => {
  return api.post('/rest-auth/logout/');
};
