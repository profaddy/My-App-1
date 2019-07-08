//-----------  Imports  -----------//

import {
  createFormAction,
  createActionConstants,
} from '@miro/core-ui/lib/utilities/sagas';

//-----------  Definitions  -----------//

export const BATTERIES = createActionConstants('BATTERIES', [
  'CREATE',
  // 'CHOOSE_ACTIVITIES',
]);

BATTERIES.CREATE = createFormAction(BATTERIES.CREATE);
// BATTERIES.CHOOSE_ACTIVITIES = createFormAction(BATTERIES.CHOOSE_ACTIVITIES);

//-----------  Studies Actions  -----------//

export const batteriesActions = {
  request: () => ({ type: BATTERIES.REQUEST }),
  // chooseActivities: () => ({ type: BATTERIES.CHOOSE_ACTIVITIES }),
};

//-----------  Saga Actions  -----------//

export const sagaActions = {
  success: data => ({ type: BATTERIES.SUCCESS, data }),
  failure: error => ({ type: BATTERIES.FAILURE, error }),
};

//-----------  Definitions  -----------//
