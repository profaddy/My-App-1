//-----------  Imports  -----------//

import faker            from 'faker'

import { randNum,
         mockResponse } from '@miro/core-ui/src/utilities/mocks'

//-----------  Mock Data  -----------//

export const transcriptionsMock = (num) => new Array(num).fill().map(transcriptionMock)

export const transcriptionMock = (id, index) => ({
  id: id || randNum(10000, 99999)
})

//-----------  Mock Endpoints  -----------//

export const requestTranscriptions = () => {
  const data = transcriptionsMock(randNum(1, 10))
  return mockResponse(data)
}
