//-----------  Imports  -----------//

import get                                from 'lodash/get'
import findKey                            from 'lodash/findKey'

import { currentTranscriptionFunc,
         nextTranscriptionUrlFunc,
         currentTranscriptionTextIdFunc } from '../selectors'
import { currentModulesFunc }             from 'models/modules/selectors'
import { roleMock, assignmentMock }       from 'models/assignments/__mocks__/api'

//-----------  Definitions  -----------//

const assignment = assignmentMock()
const role       = roleMock()

const modules    = currentModulesFunc(assignment, role)
const moduleId   = findKey(modules, ({ records }) => (records >= 3))
const module     = modules[moduleId]
const params     = { assignments: 2, modules: 1 }

const firstTranscription = get(module, 'audioAssignments.0')
const lastTranscription  = get(module, `audioAssignments.${get(module, 'audioAssignments.length', 1) - 1}`)

//-----------  Reducer Tests  -----------//

describe('Transcriptions Model: Selectors', () => {

  it('should return current transcription audio assignments', () => {
    const selector = currentTranscriptionFunc(module, firstTranscription.id)
    const expected = firstTranscription

    expect(selector).toEqual(expected)
  })

  it('should return the next transcription URL (when more transcriptions in module)', () => {
    const selector = nextTranscriptionUrlFunc(module, firstTranscription.id, params, '/next/link')
    const expected = `/assignments/2/modules/1/transcriptions/${get(module, 'audioAssignments.1.id')}`

    expect(selector).toEqual(expected)
  })

  it('should return the next transcription URL (when no more transcriptions in module)', () => {
    const selector = nextTranscriptionUrlFunc(module, lastTranscription.id, params, '/next/link')
    const expected = '/next/link'

    expect(selector).toEqual(expected)
  })

  it('should return the current transcription text ID', () => {
    firstTranscription._assignTranscription = 'id-string'

    const selector = currentTranscriptionTextIdFunc(firstTranscription, role)
    const expected = 'id-string'

    expect(selector).toEqual(expected)
  })
})
