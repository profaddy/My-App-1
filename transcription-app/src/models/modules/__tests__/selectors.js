//-----------  Imports  -----------//

import get                          from 'lodash/get'
import map                          from 'lodash/map'
import uniqBy                       from 'lodash/uniqBy'

import { nextModuleUrlFunc,
         currentModuleFunc,
         currentModulesFunc,
         orderedModulesFunc }       from '../selectors'
import { modulesMock }              from '../__mocks__/api'
import { roleMock, assignmentMock } from 'models/assignments/__mocks__/api'

//-----------  Definitions  -----------//

const assignment = assignmentMock()
const modules    = modulesMock()
const role       = roleMock()
const modulesObj = modules.reduce((obj, item) => Object.assign(obj, { [item.activity.id]: item }), {})

//-----------  Reducer Tests  -----------//

describe('Modules Model: Selectors', () => {

  it('should return the decorated modules collection', () => {
    const selector = currentModulesFunc(assignment, role)
    const expected = uniqBy(map(assignment.audio_assignments, 'audio_source.activity'), 'id')

    expected.forEach(({ id }) => {
      expect(selector).toHaveProperty(id.toString())
      expect(selector[id]).toHaveProperty('completed')
      expect(selector[id]).toHaveProperty('audioAssignments')
    })
  })

  it('should return the specified module', () => {
    const selector = currentModuleFunc(modulesObj, 1)
    const expected = modules[0]

    expect(selector).toEqual(expected)
  })

  it('should return the next module URL (when more unfinished modules)', () => {
    const selector = nextModuleUrlFunc(modules, 1, 15)
    const expected = `/assignments/15/modules/${get(modules, '1.activity.id')}`

    expect(selector).toEqual(expected)
  })

  it('should return the first incomplete module URL (when working on a finished modules)', () => {
    const selector = nextModuleUrlFunc(modules, 2, 15)
    const expected = `/assignments/15/modules/${get(modules, '0.activity.id')}`

    expect(selector).toEqual(expected)
  })

  it('should return the modules in correct order of completion', () => {
    modules[1]._completedPercentage = 100
    modules[3]._completedPercentage = 50

    const selector = orderedModulesFunc(modulesObj)

    selector.forEach(({ completed }, index) => {
      if (0 === index)
        expect(completed).toEqual(50)
      else if (index === (selector.length - 1))
        expect(completed).toEqual(100)
      else
        expect(completed).toEqual(0)
    })
  })

  it('should return the next module URL (when no more unfinished modules)', () => {
    modules.forEach(module => module._completedPercentage = 100)

    const selector = nextModuleUrlFunc(modules, 0, 15)
    const expected = null

    expect(selector).toEqual(expected)
  })
})
