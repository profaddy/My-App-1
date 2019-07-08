//-----------  Imports  -----------//

import { subjectsFunc }    from '../selectors'
import { assignmentsMock } from 'models/assignments/__mocks__/api'

//-----------  Definitions  -----------//

const data = assignmentsMock()

//-----------  Reducer Tests  -----------//

describe('Subjects Model: Selectors', () => {

  it('should return decorated subject models', () => {
    const selector = subjectsFunc(data)[0]

    expect(selector).toHaveProperty('subject')
    expect(selector).toHaveProperty('_subjectId')
    expect(selector).toHaveProperty('_createdAt')
    expect(selector).toHaveProperty('_audioFilesCount')
  })
})
