//-----------  Imports  -----------//

import faker            from 'faker'

import { randNum,
         mockResponse } from '@miro/core-ui/lib/utilities/mocks'

//-----------  Mock Data  -----------//

export const setPasswordsMock = (num) => new Array(num).fill().map(setPasswordMock)

export const setPasswordMock = (_, index) => ({
  id: randNum(10000, 99999)
})

//-----------  Mock Endpoints  -----------//

export const setPasswordsActivity = () => {
  const data = setPasswordsMock(randNum(1, 10))
  return mockResponse(data)
}
