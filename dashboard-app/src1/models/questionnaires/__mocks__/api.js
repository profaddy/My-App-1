//-----------  Imports  -----------//

import faker from 'faker';

import { randNum, mockResponse } from '@miro/core-ui/lib/utilities/mocks';

//-----------  Mock Data  -----------//

export const questionnairesMock = num => new Array(num).fill().map(questionnaireMock);

export const questionnaireMock = (_, index) => ({
  id: randNum(),
  name: 'Questionnaire Name',
  description: faker.lorem.paragraph(),
  created: faker.date.recent(),
});

//-----------  Mock Endpoints  -----------//

export const requestQuestionnaires = () => {
  const data = questionnairesMock(randNum(1, 20));
  return mockResponse(data);
};
