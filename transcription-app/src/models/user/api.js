//-----------  Imports  -----------//

import api from '@miro/core-ui/src/utilities/api'

//-----------  Endpoints  -----------//

export const requestUser = () => {
  return api.get('/transcribers/me/')
}
