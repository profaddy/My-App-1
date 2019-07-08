//-----------  Imports  -----------//

import api from '@miro/core-ui/lib/utilities/api';
import urlCreator from 'utilities/api.creator';
import isEmpty from 'lodash/isEmpty';

//-----------  Endpoints  -----------//

export const submitTest = (participantId, data, ticsData) => {
  let methodType = isEmpty(ticsData) ? 'post' : 'put';
  return api[methodType](
    urlCreator(`/participants/${participantId}/eligibility_test/`),
    data,
  );
};
