//-----------  Imports  -----------//

import { parseUrl, stringify } from 'query-string';
import { all, select, takeEvery } from 'redux-saga/effects';

import { referrerSelector } from './selectors';
import { isLocalhost } from '@miro/core-ui/lib/utilities/routing';
import { AUTH } from 'models/auth/actions';

//-----------  Sagas  -----------//

// Token handling logic moved to Core-UI API Intercepts

export function* redirectUserSaga({ access, refresh }) {
  try {
    const referrer = yield select(referrerSelector);

    if (!referrer) {
      // TODO: Redirect to ID page when no referrer query string present
    } else {
      const { url, query } = parseUrl(referrer);
      const redirect = isLocalhost(referrer)
        ? `${url}?${stringify({ ...query, access, refresh })}`
        : referrer;

      window.location = redirect;
    }
  } catch (error) {}
}

//-----------  Watchers  -----------//

export default function* routingSagas() {
  yield all([takeEvery(AUTH.SUCCESS, redirectUserSaga)]);
}
