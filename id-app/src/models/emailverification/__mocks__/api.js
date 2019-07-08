//-----------  Imports  -----------//

import faker            from 'faker'

import { randNum,
         mockResponse } from '@miro/core-ui/lib/utilities/mocks'

//-----------  Mock Data  -----------//

export const emailverificationsMock = (num) => new Array(num).fill().map(emailverificationMock)

export const emailverificationMock = (_, index) => ({
  id: randNum(10000, 99999)
})

//-----------  Mock Endpoints  -----------//

export const emailverificationsActivity = () => {
  const data = emailverificationsMock(randNum(1, 10))
  return mockResponse(data)
}
