//-----------  Imports  -----------//

import { createFormAction } from '@miro/core-ui/lib/utilities/sagas';
import { createActionConstants } from '@miro/core-ui/lib/utilities/sagas';

//-----------  Definitions  -----------//

export const TESTS = createActionConstants('TESTS', ['SUBMIT']);

//-----------  Tests Actions  -----------//

export const testSubmitAction = createFormAction(TESTS.SUBMIT);
