//-----------  Imports  -----------//

import faker            from 'faker'

import { randNum,
         mockResponse } from '@miro/core-ui/lib/utilities/mocks'

//-----------  Mock Data  -----------//

export const verifyTokensMock = (num) => new Array(num).fill().map(verifyTokenMock)

export const verifyTokenMock = (_, index) => ({
  id: randNum(10000, 99999)
})

//-----------  Mock Endpoints  -----------//

export const verifyTokensActivity = () => {
  const data = verifyTokensMock(randNum(1, 10))
  return mockResponse(data)
}
