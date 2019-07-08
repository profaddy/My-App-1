//-----------  Imports  -----------//

import faker            from 'faker'

import { randNum,
         mockResponse } from '@miro/core-ui/lib/utilities/mocks'

//-----------  Mock Data  -----------//

export const modalssMock = (num) => new Array(num).fill().map(modalsMock)

export const modalsMock = (_, index) => ({
  id: randNum(10000, 99999)
})

//-----------  Mock Endpoints  -----------//

export const modalssActivity = () => {
  const data = modalssMock(randNum(1, 10))
  return mockResponse(data)
}
