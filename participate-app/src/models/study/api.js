//-----------  Imports  -----------//

import api from '@miro/core-ui/lib/utilities/api';

//-----------  Endpoints  -----------//

export const requestStudy = slug => {
  // XXX  seems copied and pasted randomly to src/models/user/api.js ?!
  return api.get('/participantstudy/');
};
