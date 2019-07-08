//-----------  Imports  -----------//

import api from '@miro/core-ui/lib/utilities/api';

//-----------  Endpoints  -----------//

export const requestEligibility = id => {
  return api.get(`api/v1/screening_eligibility/?study_id=${id}`);
};

export const submitEligibility = id => {
  return api.post(`api/v1/screening_complete/?study_id=${id}`, { screening_complete: true });
};