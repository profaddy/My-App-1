//-----------  Imports  -----------//

import api from '@miro/core-ui/src/utilities/api'

//-----------  Endpoints  -----------//

export const requestTranscriberSubjects = () => {
  return api.get('/open_transcriber_assignments/')
}

export const requestReviewerSubjects = () => {
  return api.get('/open_reviewer_assignments/')
}
