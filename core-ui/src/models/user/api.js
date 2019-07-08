//-----------  Imports  -----------//

import api from 'utilities/api';

//-----------  Endpoints  -----------//
export const requestUser = async () => {
  return api.get(`/api/v1/me/`);
};
