//-----------  Imports  -----------//

import get                from 'lodash/get'
import isEmpty            from 'lodash/isEmpty'

import { createSelector } from 'reselect'

import { userSelector }   from 'models/user/selectors'

//-----------  Inputs  -----------//

export const studySelector     = state => state.study.data
export const errorSelector     = state => state.study.error
export const hasLoadedSelector = state => state.study.hasLoaded

//-----------  Selectors  -----------//

export const studySlugSelector = createSelector([userSelector], studySlugFunc)
export const studyPdfSelector  = createSelector([userSelector], studyPdfFunc)
export const hasStudySelector  = createSelector([studySelector], hasStudyFunc)
export const consentsSelector  = createSelector([studySelector], consentsFunc)

//-----------  Functions  -----------//

export function studySlugFunc(user){
  return get(user, 'study.type.code')
}

export function hasStudyFunc(study, hasLoaded){
  return !isEmpty(study)
}

export function consentsFunc(study){
  return get(study, 'consents')
    ? require(`../../data/${study.consents}`).default
    : []
}

export function studyPdfFunc(user){
  return get(user, 'data.study.concentform')
}