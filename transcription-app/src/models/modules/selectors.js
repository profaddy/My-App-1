//-----------  Imports  -----------//

import get                             from 'lodash/get'
import map                             from 'lodash/map'
import find                            from 'lodash/find'
import some                            from 'lodash/some'
import reduce                          from 'lodash/reduce'
import values                          from 'lodash/values'
import uniqBy                          from 'lodash/uniqBy'
import groupBy                         from 'lodash/groupBy'
import orderBy                         from 'lodash/orderBy'
import isEmpty                         from 'lodash/isEmpty'
import inRange                         from 'lodash/inRange'
import findIndex                       from 'lodash/findIndex'
import findLastIndex                   from 'lodash/findLastIndex'
import { createSelector }              from 'reselect'

import { pathParamsSelector }          from 'models/app/selectors'
import { currentRoleSelector,
         currentAssignmentSelector,
         currentAssignmentIdSelector } from 'models/assignments/selectors'

//-----------  Inputs  -----------//

export const modulesSelector = state => state.modules.data

//-----------  Route ID  -----------//

export const currentModuleIdSelector = createSelector([pathParamsSelector], (params) => {
  return get(params, 'modules')
})

//-----------  Selectors  -----------//

export const currentModulesSelector = createSelector([currentAssignmentSelector, currentRoleSelector], currentModulesFunc)
export const orderedModulesSelector = createSelector([currentModulesSelector], orderedModulesFunc)
export const currentModuleSelector  = createSelector([currentModulesSelector, currentModuleIdSelector], currentModuleFunc)
export const nextModuleUrlSelector  = createSelector([orderedModulesSelector, currentModuleIdSelector, currentAssignmentIdSelector], nextModuleUrlFunc)

//-----------  Funcitons  -----------//

export function currentModulesFunc(assignment, role){
  if (isEmpty(assignment)) return null

  let activities = []
  let modules    = {}

  // Collect all included activites
  activities = map(assignment.audio_assignments, 'audio_source.activity')
  activities = uniqBy(activities, 'id')

  // Group audio assignments by activity
  modules = groupBy(assignment.audio_assignments, 'audio_source.activity.id')

  // Map to array w/ computed properties
  Object.keys(modules).map(moduleId => {
    const audio = modules[moduleId].map(file => Object.assign(file, {
      id      : get(file, 'audio_source.id'),
      created : get(file, 'audio_source.created')
    }))

    modules[moduleId] = {
      records          : audio.length,
      activity         : find(activities, ['id', parseInt(moduleId)]),
      totalTime        : null,
      completed        : (reduce(audio, (count, file) => count += !!file[role.completed], 0) / audio.length) * 100,
      started          : some(audio,  file => !!file[role.completed]),
      audioAssignments : orderBy(audio, ['created'], ['asc']),
    }
  })

  return modules
}

export function orderedModulesFunc(modulesObj){
  if (isEmpty(modulesObj)) return null

  // Order by completion percentage; completed at bottom, current at top
  const modules = values(modulesObj)
  const ordered = orderBy(modules, ['completed'], ['asc'])
  let nextIdx   = findIndex(ordered, ({ completed }) => inRange(completed, 1, 99))

  if (-1 === nextIdx)
    nextIdx = findLastIndex(ordered, { completed: 100 }) - 1

  if (-1 === nextIdx)
    nextIdx = 0

  const nextMod = ordered.splice(nextIdx, 1)[0]
  return [ nextMod, ...ordered ]
}

export function currentModuleFunc(modulesObj, moduleId){
  if (isEmpty(modulesObj)) return null
  return modulesObj[moduleId]
}

export function nextModuleUrlFunc(modules, moduleId, assignmentId){
  let nextId

  if (moduleId != get(modules, '0.activity.id') && (get(modules, '0.completed') != 100))
    nextId = get(modules, '0.activity.id')
  else
    nextId = (get(modules, '1.completed') != 100) ? get(modules, '1.activity.id') : null

  return (assignmentId && nextId)
    ? `/assignments/${assignmentId}/modules/${nextId}`
    : null
}