//-----------  Imports  -----------//

import faker            from 'faker'

import { randNum,
         mockResponse } from '@miro/core-ui/src/utilities/mocks'

//-----------  Mock Data  -----------//

export const rankingsMock = (num) => new Array(num).fill().map(rankingMock)

export const rankingMock = (_, index) => ({
  id      : index + 1,
  name    : faker.name.firstName(),
  time    : randNum(1580, 24300),
  avatar  : faker.image.avatar(),
  ranking : index + 1,
})

//-----------  Mock Endpoints  -----------//

export const requestRankings = () => {
  const data = rankingsMock(randNum(5, 9))
  return mockResponse(data)
}
