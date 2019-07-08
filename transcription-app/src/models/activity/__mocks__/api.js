//-----------  Imports  -----------//

import faker            from 'faker'
import orderBy          from 'lodash/orderBy'

import { randNum,
         mockResponse } from '@miro/core-ui/src/utilities/mocks'

//-----------  Mock Data  -----------//

export const activitiesMock = (num) => orderBy(new Array(num).fill().map(activityMock), ['createdAt'], ['desc'])

export const activityMock = (_, index) => faker.random.arrayElement([{
  id        : index + 1,
  color     : 'red',
  title     : `${faker.name.firstName()} accepted Subject ${randNum(100000, 999999)}`,
  createdAt : faker.date.recent(3),
},{
  id        : index + 1,
  color     : 'yellow',
  title     : `${faker.name.firstName()} submitted Subject ${randNum(100000, 999999)}`,
  createdAt : faker.date.recent(3),
},{
  id        : index + 1,
  color     : 'green',
  title     : `Subject ${randNum(100000, 999999)} added`,
  createdAt : faker.date.recent(3),
}])

//-----------  Mock Endpoints  -----------//

export const requestActivity = () => {
  const data = activitiesMock(randNum(18, 25))
  return mockResponse(data)
}
