//-----------  Imports  -----------//

import { userFunc,
         userIdFunc } from '../selectors'
import { userMock }   from '../__mocks__/api'

//-----------  Definitions  -----------//

const data = userMock('test@miro.one')

//-----------  Reducer Tests  -----------//

describe('User Model: Selectors', () => {

  it('should return decorated user model', () => {
    const selector = userFunc(data)

    expect(selector).toHaveProperty('email')
    expect(selector).toHaveProperty('_name')
    expect(selector).toHaveProperty('_avatar')
  })

  it('should return user ID', () => {
    const selector = userIdFunc(data)

    expect(selector).toEqual(data.id)
  })
})
