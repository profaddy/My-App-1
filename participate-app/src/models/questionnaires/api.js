//-----------  Imports  -----------//

import api from '@miro/core-ui/lib/utilities/api'

//-----------  Endpoints  -----------//

export const requestQuestionnaire = (name) => {
  return api.get(`/questionnaire/${name}/`)
}

export const submitQuestionnaire = (name, data) => {
  return api.post(`/questionnaire/${name}/`, data)
}

export const updateQuestionnaire = (id, name, data) => {
  return api.patch(`/questionnaire/${name}/${id}/`, data)
}
