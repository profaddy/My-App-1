//-----------  Imports  -----------//

import get                from 'lodash/get'
import isEmpty            from 'lodash/isEmpty'
import { createSelector } from 'reselect'
import md5                from 'blueimp-md5'

import { statsMock }      from './__mocks__/api'

//-----------  Inputs  -----------//

export const dataSelector    = state => state.user.data
export const loadingSelector = state => state.user.isLoading

//-----------  Selectors  -----------//

export const userSelector       = createSelector([dataSelector], userFunc)
export const userIdSelector     = createSelector([dataSelector], userIdFunc)
export const isReviewerSelector = createSelector([dataSelector], isReviewerFunc)

//-----------  Funcitons  -----------//

export function userFunc(data){
  return !isEmpty(data) ? {
    _name   : `${get(data, 'first_name')} ${get(data, 'last_name')}`,
    _avatar : `https://www.gravatar.com/avatar/${md5(get(data, 'email'))}`,
    _stats  : statsMock(),
    ...data
  } : null
}

export function userIdFunc(data){
  return get(data, 'id')
}

export function isReviewerFunc(data){
  return get(data, 'is_transcription_reviewer', false)
}