//-----------  Imports  -----------//

import { createActionConstants } from '@miro/core-ui/lib/utilities/sagas';

//-----------  Definitions  -----------//

export const STUDY_TYPES = createActionConstants('STUDY_TYPES');

//-----------  Studies Actions  -----------//

export const studyTypesActions = {
  request: () => ({ type: STUDY_TYPES.REQUEST }),
};

//-----------  Saga Actions  -----------//

export const sagaActions = {
  success: data => ({ type: STUDY_TYPES.SUCCESS, data }),
  failure: error => ({ type: STUDY_TYPES.FAILURE, error }),
};
