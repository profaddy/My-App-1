//-----------  Imports  -----------//

// import { createSelector } from 'reselect';
import get from 'lodash/get';

//-----------  Inputs  -----------//

export const testsSelector = state => state.tests.data;

export const ticsDataSelector = state =>
  get(state, 'participant.participantDetails.eligibility_test_data', null);

//-----------  Selectors  -----------//
