//-----------  Imports  -----------//

import faker from 'faker';

import { randNum, mockResponse } from 'utilities/mocks';

//-----------  Mock Data  -----------//

export const tokenMock = () => ({ key: faker.random.uuid() });

//-----------  Mock Functions  -----------//

export const signIn = (email, password) => {
  if (!email || !password) return Promise.reject();

  const data = tokenMock();
  return mockResponse(data, true);
};

export const signOut = () => {
  return mockResponse(undefined, false, true);
};

//-----------  Mock Data  -----------//

export const registrationCheckMock = () => ({
  doesEmailExist: false /* faker.random.boolean() */,
});
export const licensingBoardsMock = num =>
  new Array(num).fill().map(licensingBoardMock);

export const licensingBoardMock = (_, index) => ({
  id: index,
  name: `Licensing Board ${index}`,
});
export const practiceAreasMock = num =>
  new Array(num).fill().map(practiceAreaMock);

export const practiceAreaMock = (_, index) => ({
  id: index,
  name: `Practice Area ${index}`,
});
export const institutionsMock = num =>
  new Array(num).fill().map(institutionMock);

export const institutionMock = (_, index) => ({
  id: index,
  name: `Institution ${index}`,
});

//-----------  Mock Endpoints  -----------//

export const requestRegistrationCheck = ({ email }) => {
  const data = registrationCheckMock();
  return mockResponse(data);
};
export const requestLicensingBoards = () => {
  const data = licensingBoardsMock(randNum(5, 10));
  return mockResponse({ data });
};
export const requestPracticeAreas = () => {
  const data = practiceAreasMock(randNum(5, 10));
  return mockResponse({ data });
};
export const requestInstitutions = () => {
  const data = institutionsMock(randNum(5, 10));
  return mockResponse({ data });
};
