//-----------  Imports  -----------//

import { userFunc,
         userIdFunc,
         isReviewerFunc } from '../selectors'
import { userMock }       from '../__mocks__/api'

//-----------  Definitions  -----------//

const data = userMock('test@miro.one')

//-----------  Reducer Tests  -----------//

describe('User Model: Selectors', () => {

  it('should return decorated user model', () => {
    const selector = userFunc(data)

    expect(selector).toHaveProperty('email')
    expect(selector).toHaveProperty('_avatar')
    expect(selector).toHaveProperty('_stats.totalMins')
  })

  it('should return user ID', () => {
    const selector = userIdFunc(data)

    expect(selector).toEqual(data.id)
  })

  it('should return user ID', () => {
    const selector = isReviewerFunc(data)

    expect(selector).toEqual(false)
  })
})
