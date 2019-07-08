//-----------  Imports  -----------//

import api from '@miro/core-ui/lib/utilities/api'

//-----------  Endpoints  -----------//

export const requestUser = () => {
  // XXX  need to change this?  same as requestStudy() in src/models/study/api.js
  return api.get('/participantstudy/')
}
