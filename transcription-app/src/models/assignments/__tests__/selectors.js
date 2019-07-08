//-----------  Imports  -----------//

import get                           from 'lodash/get'

import { assignmentsFunc,
         currentRoleFunc,
         hasAssignmentsFunc,
         currentSubjectIdFunc,
         currentAssignmentFunc }     from '../selectors'
import { roleMock, assignmentsMock } from '../__mocks__/api'

//-----------  Definitions  -----------//

const data   = assignmentsMock()
const role   = roleMock(true)
const userId = 15

//-----------  Reducer Tests  -----------//

describe('Assignments Model: Selectors', () => {

  it('should return decorated assignmenmt model', () => {
    const selector = assignmentsFunc(data, userId)[0]

    expect(selector).toHaveProperty('subject')
    expect(selector).toHaveProperty('_createdAt')
    expect(selector).toHaveProperty('_isActionable')
    expect(selector).toHaveProperty('_audioFilesCount')
  })

  it('should return the current role object', () => {
    data[0]._assignReviewer = 'name@email.com'

    const selector = currentRoleFunc(data[0], get(data[0], 'reviewer.id'))
    const expected = role

    expect(selector).toEqual(expected)
  })

  it('should return if has assignment data', () => {
    const selector = hasAssignmentsFunc(data, false)
    const expected = true

    expect(selector).toEqual(expected)
  })

  it('should return the current subject ID', () => {
    const selector = currentSubjectIdFunc(data[0])
    const expected = get(data[0], '_subjectId')

    expect(selector).toEqual(expected)
  })

  it('should return the current assignment ID', () => {
    const selector = currentAssignmentFunc(data, data[0].id)
    const expected = data[0]

    expect(selector).toEqual(expected)
  })
})
