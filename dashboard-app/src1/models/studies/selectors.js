//-----------  Imports  -----------//

import get from 'lodash/get';
import moment from 'moment';

import { createSelector } from 'reselect';

import { pathParamsSelector } from '@miro/core-ui/lib/models/app/selectors';

//-----------  Inputs  -----------//

export const dataSelector = state => state.studies.data;
export const reverseDataSelector = state =>
  state.studies.data.slice().reverse();

//-----------  Selectors  -----------//

export const studiesSelector = createSelector(
  [dataSelector],
  studiesFunc,
);
export const reverseStudiesSelector = createSelector(
  [reverseDataSelector],
  studiesFunc,
);
export const studyIdSelector = createSelector(
  [pathParamsSelector],
  studyIdFunc,
);

//-----------  Selector Functions  -----------//

export function studiesFunc(data) {
  return data.map(study => ({
    duration: 'n/a',
    createdDate: moment(study.created).format('MM/DD/YYYY'),
    ...study,
  }));
}

export function studyIdFunc(paths) {
  return get(paths, 'studies');
}
