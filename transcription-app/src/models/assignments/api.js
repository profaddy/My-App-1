//-----------  Imports  -----------//

import api from '@miro/core-ui/src/utilities/api'

//-----------  Endpoints  -----------//

export const requestAssignments = () => {
  return api.get('/transcribers/me/assignments/')
}

export const requestAssignment = (id) => {
  return api.get(`/assignments/${id}/`)
}

export const assignTranscriber = (id) => {
  return api.post(`/assignments/${id}/assign_transcriber/`)
}

export const assignReviewer = (id) => {
  return api.post(`/assignments/${id}/assign_reviewer/`)
}
