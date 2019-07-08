//-----------  Imports  -----------//

import { createActionConstants } from 'utilities/sagas';

//-----------  Definitions  -----------//

export const SIDEBAR = createActionConstants('SIDEBAR', ['UPDATE']);

//-----------  Sidebar Actions  -----------//

export const sidebarActions = {
  update: data => ({ type: SIDEBAR.UPDATE, data }),
};
