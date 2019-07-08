//-----------  Imports  -----------//

import {
  createFormAction,
  createActionConstants,
} from '@miro/core-ui/lib/utilities/sagas';

//-----------  Definitions  -----------//

export const STUDIES = createActionConstants('STUDIES', ['CREATE']);

STUDIES.CREATE = createFormAction(STUDIES.CREATE);

//-----------  Studies Actions  -----------//

export const studiesActions = {
  request: () => ({ type: STUDIES.REQUEST }),
};

//-----------  Saga Actions  -----------//

export const sagaActions = {
  success: data => ({ type: STUDIES.SUCCESS, data }),
  failure: error => ({ type: STUDIES.FAILURE, error }),
};
