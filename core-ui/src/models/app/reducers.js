//-----------  Imports  -----------//

import { reducer as formReducer } from 'redux-form';

import appReducer from 'models/app/reducer';
import authReducer from 'models/auth/reducer';
import sidebarReducer from 'models/sidebar/reducer';
import requestsReducer from 'models/requests/reducer';

//-----------  Exports  -----------//

export default {
  app: appReducer,
  auth: authReducer,
  form: formReducer,
  sidebar: sidebarReducer,
  requests: requestsReducer,
};
