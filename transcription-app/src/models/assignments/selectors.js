//-----------  Imports  -----------//

import get                    from 'lodash/get'
import some                   from 'lodash/some'
import filter                 from 'lodash/filter'
import isEmpty                from 'lodash/isEmpty'
import { createSelector }     from 'reselect'

import { estimateTime }       from 'utilities/performance'
import { pathParamsSelector } from 'models/app/selectors'
import { userIdSelector }     from 'models/user/selectors'

//-----------  Inputs  -----------//

export const dataSelector      = state => state.assignments.data
export const errorSelector     = state => state.assignments.error
export const isLoadingSelector = state => state.assignments.isLoading

//-----------  Route ID  -----------//

export const currentAssignmentIdSelector = createSelector([pathParamsSelector], (params) => {
  return get(params, 'assignments')
})

//-----------  Selectors  -----------//

export const assignmentsSelector       = createSelector([dataSelector, userIdSelector], assignmentsFunc)
export const hasAssignmentsSelector    = createSelector([assignmentsSelector, isLoadingSelector], hasAssignmentsFunc)
export const currentAssignmentSelector = createSelector([assignmentsSelector, currentAssignmentIdSelector], currentAssignmentFunc)
export const currentSubjectIdSelector  = createSelector([currentAssignmentSelector], currentSubjectIdFunc)
export const currentRoleSelector       = createSelector([currentAssignmentSelector, userIdSelector], currentRoleFunc)

//-----------  Funcitons  -----------//

export function assignmentsFunc(data, userId){
  const assignments = data.map(assignment => {
    const audioFiles = get(assignment, 'audio_assignments', [])
    const userRole   = currentRoleFunc(assignment, userId)

    // TODO: investigate if _createdAt property is nessisary
    return Object.assign({
      _subjectId       : get(assignment, 'subject.subject_id'),
      _createdAt       : get(assignment, 'created', new Date()),
      _isActionable    : some(audioFiles, file => !file[userRole.completed]),
      _estimatedTime   : estimateTime(audioFiles),
      _audioFilesCount : audioFiles.length,
    }, assignment)
  })

  return filter(assignments, ['_isActionable', true])
}

export function hasAssignmentsFunc(assignments, isLoading){
  return (!isEmpty(assignments) && !isLoading)
}

export function currentAssignmentFunc(assignments, assignmentId){
  return assignments.find(({ id }) => (id == assignmentId))
}

export function currentSubjectIdFunc(assignment){
  return get(assignment, '_subjectId')
}

export function currentRoleFunc(assignment, userId){
  if (userId == get(assignment, 'transcriber_1.id'))
    return {
      text       : 'transcription_1',
      assigned   : 'transcriber_1_assigned',
      completed  : 'transcriber_1_completed',
      isReviewer : false,
    }

  if (userId == get(assignment, 'transcriber_2.id'))
    return {
      text       : 'transcription_2',
      assigned   : 'transcriber_2_assigned',
      completed  : 'transcriber_2_completed',
      isReviewer : false,
    }

  if (userId == get(assignment, 'reviewer.id'))
    return {
      text       : 'final_transcription',
      assigned   : 'reviewer_assigned',
      completed  : 'reviewer_completed',
      isReviewer : true,
    }

  return { text: null, assigned: null, completed: null }
}