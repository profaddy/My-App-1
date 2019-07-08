//-----------  Imports  -----------//

import moment from 'moment';

import { createSelector } from 'reselect';

//-----------  Inputs  -----------//

export const dataSelector = state => state.questionnaires.data;

//-----------  Selectors  -----------//

export const questionnairesSelector = createSelector(
  [dataSelector],
  questionnairesFunc,
);

//-----------  Selector Functions  -----------//

export function questionnairesFunc(data) {
  return data.map(questionnaire => ({
    pages: 'n/a',
    createdDate: moment(questionnaire.created).format('MM/DD/YYYY'),
    ...questionnaire,
  }));
}
