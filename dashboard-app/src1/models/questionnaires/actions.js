//-----------  Imports  -----------//

import {
  createFormAction,
  createActionConstants,
} from '@miro/core-ui/lib/utilities/sagas';

//-----------  Definitions  -----------//

export const QUESTIONNAIRES = createActionConstants('QUESTIONNAIRES', [
  'CREATE',
]);

QUESTIONNAIRES.CREATE = createFormAction(QUESTIONNAIRES.CREATE);

//-----------  Studies Actions  -----------//

export const questionnairesActions = {
  request: () => ({ type: QUESTIONNAIRES.REQUEST }),
};

//-----------  Saga Actions  -----------//

export const sagaActions = {
  success: data => ({ type: QUESTIONNAIRES.SUCCESS, data }),
  failure: error => ({ type: QUESTIONNAIRES.FAILURE, error }),
};
