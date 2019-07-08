//-----------  Imports  -----------//

import { SIDEBAR } from './actions';

//-----------  Definitions  -----------//

export const initialState = [
  {
    to: '/',
    icon: 'dashboard.svg',
    title: 'Dashboard',
    exact: true,
  },
];

//-----------  Reducers  -----------//

export default function sidebarReducer(state = initialState, action) {
  const { data } = action;

  switch (action.type) {
    case SIDEBAR.UPDATE:
      return data;

    default:
      return state;
  }
}
