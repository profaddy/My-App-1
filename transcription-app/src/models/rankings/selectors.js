//-----------  Imports  -----------//

import isEmpty            from 'lodash/isEmpty'
import { createSelector } from 'reselect'

//-----------  Inputs  -----------//

export const rankingsSelector  = state => state.rankings.data
export const errorSelector     = state => state.rankings.error
export const isLoadingSelector = state => state.rankings.isLoading

//-----------  Selectors  -----------//

export const hasLoadedSelector = createSelector([rankingsSelector], hasLoadedFunc)

//-----------  Funcitons  -----------//

export function hasLoadedFunc(rankings){
  return !isEmpty(rankings)
}