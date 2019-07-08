//-----------  Imports  -----------//

import faker            from 'faker'

import { randNum,
         mockResponse } from '@miro/core-ui/src/utilities/mocks'

//-----------  Mock Data  -----------//

export const subjectsMock = (num) => new Array(num).fill().map(subjectsMock)

export const subjectMock = (_, index) => ({
  subject_id : randNum(10000, 99999),
  user       : null
})

//-----------  Mock Endpoints  -----------//

export const subjectsActivity = () => {
  const data = subjectsMock(randNum(1, 10))
  return mockResponse(data)
}
