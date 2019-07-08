//-----------  Imports  -----------//

import api from '@miro/core-ui/src/utilities/api'

//-----------  Endpoints  -----------//

export const submitTranscription = (data) => {
  return api.post('/transcriptions/', data)
}

export const updateTranscription = (data, id) => {
  return api.put(`/transcriptions/${id}/`, data)
}
