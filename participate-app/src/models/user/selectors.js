//-----------  Imports  -----------//

import path from 'lodash/fp/path';
import identity from 'lodash/identity';

import { createSelector } from 'reselect';

//-----------  Inputs  -----------//

export const userSelector = state => state.participant;

//-----------  Selectors  -----------//

export const dataSelector = createSelector(
  [userSelector],
  path('data'),
);
export const studySelector = createSelector(
  [userSelector],
  path('data.study'),
);
export const errorSelector = createSelector(
  [userSelector],
  path('error'),
);
export const over18Selector = createSelector(
  [userSelector],
  path('over_18'),
);
export const attemptsSelector = createSelector(
  [userSelector],
  path('attempts'),
);
export const hasLoadedSelector = createSelector(
  [userSelector],
  path('hasLoaded'),
);
export const isEligibleSelector = createSelector(
  [userSelector],
  path('eligible'),
);
export const isErrorSelector = createSelector(
  [userSelector],
  path('isError'),
);
export const isScreenedSelector = createSelector(
  [userSelector],
  path('screened'),
);
export const canConsentSelector = createSelector(
  [userSelector],
  canConsentFunc,
);
export const canProceedSelector = createSelector(
  [userSelector],
  canProceedFunc,
);
export const hasUserSelector = createSelector(
  [dataSelector, hasLoadedSelector],
  hasUserFunc,
);
export const loadingSelector = createSelector(
  [hasUserSelector],
  identity,
);

//-----------  Functions  -----------//

export function canConsentFunc(participant) {
  return participant.passed && participant.over_18;
}

export function canProceedFunc(participant) {
  return participant.passed || 0 > participant.attempts;
}

export function hasUserFunc(data, hasLoaded) {
  return !!data && hasLoaded;
}
