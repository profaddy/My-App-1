//-----------  Imports  -----------//

import get                       from 'lodash/get'
import find                      from 'lodash/find'
import isEmpty                   from 'lodash/isEmpty'
import findIndex                 from 'lodash/findIndex'
import { createSelector }        from 'reselect'

import { pathParamsSelector }    from 'models/app/selectors'
import { currentRoleSelector }   from 'models/assignments/selectors'
import { currentModuleSelector,
         nextModuleUrlSelector } from 'models/modules/selectors'

//-----------  Route ID  -----------//

export const currentTranscriptionIdSelector = createSelector([pathParamsSelector], (params) => {
  return get(params, 'transcriptions')
})

//-----------  Selectors  -----------//

export const currentTranscriptionSelector       = createSelector([currentModuleSelector, currentTranscriptionIdSelector], currentTranscriptionFunc)
export const currentTranscriptionTextIdSelector = createSelector([currentTranscriptionSelector, currentRoleSelector], currentTranscriptionTextIdFunc)
export const nextTranscriptionUrlSelector       = createSelector([currentModuleSelector, currentTranscriptionIdSelector, pathParamsSelector, nextModuleUrlSelector], nextTranscriptionUrlFunc)

//-----------  Funcitons  -----------//

export function currentTranscriptionFunc(module, transcriptionId){
  if (isEmpty(module)) return null
  return find(module.audioAssignments, ['id', transcriptionId])
}

export function currentTranscriptionTextIdFunc(transcription, role){
  if (isEmpty(role) || isEmpty(transcription)) return null
  return get(transcription, `${role.text}.id`)
}

export function nextTranscriptionUrlFunc(module, transcriptionId, params, nextModuleUrl){
  const index = findIndex(get(module, 'audioAssignments', []), ['id', transcriptionId])

  if (-1 === index || index === (get(module, 'audioAssignments.length') - 1))
    return nextModuleUrl

  const nextId = get(module, `audioAssignments.${index + 1}.id`)
  const { modules: moduleId, assignments: assignmentId } = params
  return `/assignments/${assignmentId}/modules/${moduleId}/transcriptions/${nextId}`
}