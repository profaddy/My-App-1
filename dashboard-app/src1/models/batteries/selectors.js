//-----------  Imports  -----------//

import moment from 'moment';

import { createSelector } from 'reselect';

//-----------  Inputs  -----------//

export const dataSelector = state => state.batteries.data;

//-----------  Selectors  -----------//

export const batteriesSelector = createSelector([dataSelector], batteriesFunc);

//-----------  Selector Functions  -----------//

export function batteriesFunc(data){
  return data.map(battery => ({
    active: 'n/a',
    duration: 'n/a',
    questionnaires: 'n/a',
    createdDate: moment(battery.created).format('MM/DD/YYYY'),
    ...battery,
  }));
};