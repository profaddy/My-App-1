//-----------  Imports  -----------//

import faker            from 'faker'

import { mockResponse } from 'utilities/mocks'

//-----------  Mock Data  -----------//

export const tokenMock = () => ({ key: faker.random.uuid() })

//-----------  Mock Functions  -----------//

export const signIn = (email, password) => {
  if (!email || !password) return Promise.reject()

  const data = tokenMock()
  return mockResponse(data, true)
}

export const signOut = () => {
  return mockResponse(undefined, false, true)
}