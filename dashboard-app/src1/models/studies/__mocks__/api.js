//-----------  Imports  -----------//

import faker from 'faker';

import { randNum, mockResponse } from '@miro/core-ui/lib/utilities/mocks';

//-----------  Mock Data  -----------//

export const studiesMock = num => new Array(num).fill().map(studyMock);

export const studyMock = (_, index) => ({
  name: 'Study Name',
  description: faker.lorem.paragraph(),
  created: faker.date.recent(),
});

//-----------  Mock Endpoints  -----------//

export const requestStudies = () => {
  const data = studiesMock(randNum(1, 20));
  return mockResponse(data);
};
