//-----------  Imports  -----------//

import get                from 'lodash/get'
import isEmpty            from 'lodash/isEmpty'
import { createSelector } from 'reselect'

import { estimateTime }   from 'utilities/performance'

//-----------  Inputs  -----------//

export const dataSelector      = state => state.subjects.data
export const errorSelector     = state => state.subjects.error
export const isLoadingSelector = state => state.subjects.isLoading

//-----------  Selectors  -----------//

export const subjectsSelector = createSelector([dataSelector], subjectsFunc)

//-----------  Funcitons  -----------//

export function subjectsFunc(data){
  return data.map(subject => Object.assign({
    _subjectId       : get(subject, 'subject.subject_id'),
    _createdAt       : get(subject, 'created', new Date()),
    _estimatedTime   : estimateTime(get(subject, 'audio_files_count', 0)),
    _audioFilesCount : get(subject, 'audio_files_count', 0),
  }, subject))
}