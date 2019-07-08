//-----------  Imports  -----------//

import { combineReducers } from 'redux';

import miroReducers from '@miro/core-ui/lib/models/app/reducers';
import userReducer from '@miro/core-ui/lib/models/user/reducer';

import authReducer from 'models/auth/reducer';
import signUpReducer from 'models/signup/reducer';
import setPasswordReducer from 'models/setPassword/reducer';
import forgotPasswordReducer from 'models/forgotPassword/reducer';
import emailverificationReducer from 'models/emailverification/reducer';
import routingReducer from 'models/routing/reducer';
import verifyTokenReducer from 'models/verifyToken/reducer';

//-----------  Exports  -----------//

export default function createReducers() {
  return combineReducers({
    ...miroReducers,
    user: userReducer,
    signUp: signUpReducer,
    setPassword: setPasswordReducer,
    forgotPassword: forgotPasswordReducer,
    routing: routingReducer,
    auth: authReducer,
    emailverification: emailverificationReducer,
    verifyToken: verifyTokenReducer,
  });
}
