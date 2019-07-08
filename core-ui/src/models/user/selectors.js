//-----------  Imports  -----------//

import get from 'lodash/get';
import isEmpty from 'lodash/isEmpty';
import { createSelector } from 'reselect';
import md5 from 'blueimp-md5';

//-----------  Inputs  -----------//

export const dataSelector = state => state.user.data;
export const loadingSelector = state => state.user.isLoading;

//-----------  Selectors  -----------//

export const userSelector = createSelector(
  [dataSelector],
  userFunc,
);
export const userIdSelector = createSelector(
  [dataSelector],
  userIdFunc,
);

//-----------  Funcitons  -----------//

export function userFunc(data) {
  return !isEmpty(data)
    ? Object.assign(
        {
          _name: `${get(data, 'first_name')} ${get(data, 'last_name')}`,
          _avatar: `https://www.gravatar.com/avatar/${md5(get(data, 'email'))}`,
        },
        data,
      )
    : null;
}

export function userIdFunc(data) {
  return get(data, 'id');
}
