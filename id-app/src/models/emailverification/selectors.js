//-----------  Inputs  -----------//
import get from 'lodash/get';

export const emailverificationSelector = state => state.emailverification.data;
export const verifiedEmailSelector = state =>
  get(state, 'emailverification.data.email', undefined);
export const emailverificationErrorSelector = state =>
  state.emailverification.error;

//-----------  Selectors  -----------//
