//-----------  Imports  -----------//

import faker            from 'faker'
import md5              from 'blueimp-md5'

import { randNum,
         mockResponse } from '@miro/core-ui/lib/utilities/mocks'

//-----------  Mock Data  -----------//

export const userMock = (email) => ({
  id         : faker.random.uuid(),
  email      : email || faker.internet.email(),
  last_name  : faker.name.lastName(),
  first_name : faker.name.firstName(),
})

//-----------  Mock Functions  -----------//

export const requestUser = (email) => {
  const data = userMock(email)
  return mockResponse(data, false, true)
}