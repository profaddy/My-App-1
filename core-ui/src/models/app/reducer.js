//-----------  Imports  -----------//

import { APP } from './actions';

//-----------  Definitions  -----------//

export const initialState = {
  isReady: false,
};

//-----------  Reducers  -----------//

export default function searchReducer(state = initialState, action) {
  switch (action.type) {
    case APP.INIT:
      return { isReady: true };

    default:
      return state;
  }
}
