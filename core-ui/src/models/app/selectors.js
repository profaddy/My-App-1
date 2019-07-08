//-----------  Imports  -----------//

import get from 'lodash/get';
import compact from 'lodash/compact';
import queryString from 'query-string';
import { createSelector } from 'reselect';

import {
  tokenSelector,
  loadingSelector as loadingAuth,
} from 'models/auth/selectors';
import { loadingSelector as loadingUser } from 'models/user/selectors';

//-----------  Selectors  -----------//

export const pathSelector = state => get(state, 'router.location.pathname', '');
export const searchSelector = state => get(state, 'router.location.search', '');
export const isReadySelector = state => state.app.isReady;

//-----------  Combined Selectors  -----------//

export const isLoadingSelector = createSelector(
  [loadingAuth, loadingUser],
  (authLoading, userLoading) => {
    return authLoading || userLoading;
  },
);

export const isLoggedInSelector = createSelector(
  [tokenSelector, isLoadingSelector],
  (token, isLoading) => {
    return !!token && !isLoading;
  },
);

export const pathParamsSelector = createSelector(
  [pathSelector],
  path => {
    const routes = compact(path.split('/'));
    const params = {};
    let index = 0;

    while (index < routes.length) {
      params[routes[index]] = routes[index + 1];
      index += 2;
    }

    return params;
  },
);

export const searchQuerySelector = createSelector(
  [searchSelector],
  search => {
    return queryString.parse(search);
  },
);
