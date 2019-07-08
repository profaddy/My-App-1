//-----------  Imports  -----------//

import { REQUEST, SUCCESS, FAILURE } from 'utilities/sagas';
import { appName } from 'utilities/constants';

import { REQUESTS } from './actions';

//-----------  Definitions  -----------//

export const initialState = {
  count: 0,
  error: false,
};

//-----------  Reducers  -----------//

export default function requestsReducer(state = initialState, action) {
  const { count } = state;

  // RegExp to match app-created actions (ex: 'app/USER_REQUEST')

  function isCrudRequestOfType(type) {
    return RegExp(`${appName}\\/\\w*\\_${type}`).test(action.type);
  }

  // Hanlde any CRUD-type actions from within the app

  if (isCrudRequestOfType(REQUEST)) return { ...state, count: count + 1 };

  if (isCrudRequestOfType(SUCCESS))
    return { ...state, count: 1 > count ? 0 : count - 1 };

  if (isCrudRequestOfType(FAILURE))
    return { ...state, error: true, count: 1 > count ? 0 : count - 1 };

  // Hanlde any manually reated request actions

  switch (action.type) {
    case REQUESTS.ADD:
      return { ...state, count: count + 1 };

    case REQUESTS.REMOVE:
      return { ...state, count: 1 > count ? 0 : count - 1 };

    default:
      return state;
  }
}
