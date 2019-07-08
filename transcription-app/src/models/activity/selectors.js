//-----------  Imports  -----------//

import isEmpty            from 'lodash/isEmpty'
import { createSelector } from 'reselect'

//-----------  Inputs  -----------//

export const activitySelector  = state => state.activity.data
export const errorSelector     = state => state.activity.error
export const isLoadingSelector = state => state.activity.isLoading

//-----------  Selectors  -----------//

export const hasLoadedSelector = createSelector([activitySelector], hasLoadedFunc)

//-----------  Funcitons  -----------//

export function hasLoadedFunc(activity){
  return !isEmpty(activity)
}