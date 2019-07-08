//-----------  Imports  -----------//

import faker from 'faker';

import { randNum, mockResponse } from '@miro/core-ui/lib/utilities/mocks';

//-----------  Mock Data  -----------//

export const batteriesMock = num => new Array(num).fill().map(batteryMock);

export const batteryMock = (_, index) => ({
  id: randNum(),
  name: 'Battery Name',
  description: faker.lorem.paragraph(),
  created: faker.date.recent(),
});

//-----------  Mock Endpoints  -----------//

export const requestBatteries = () => {
  const data = batteriesMock(randNum(1, 20));
  return mockResponse(data);
};
