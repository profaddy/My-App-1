//-----------  Imports  -----------//

import faker            from 'faker'
import md5              from 'blueimp-md5'

import { randNum,
         mockResponse } from '@miro/core-ui/src/utilities/mocks'

//-----------  Mock Data  -----------//

export const userMock = (email, isReviewer = false) => ({
  id                        : faker.random.uuid(),
  email                     : email,
  last_name                 : faker.name.lastName(),
  first_name                : faker.name.firstName(),
  is_transcriber            : !isReviewer,
  is_transcription_reviewer : isReviewer,
})

export const statsMock = () => ({
  totalMins     : randNum(28, 754),
  totalFiles    : randNum(0, 14),
  totalSubjects : randNum(14, 1200),
})

//-----------  Mock Functions  -----------//

export const requestUser = (email) => {
  const data = userMock(email)
  return mockResponse(data, false, true)
}