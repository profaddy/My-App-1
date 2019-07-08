//-----------  Imports  -----------//

import { hasLoadedFunc } from '../selectors'

//-----------  Definitions  -----------//

const data = [{ id: 1 },{ id: 2 }]

//-----------  Reducer Tests  -----------//

describe('Rankings Model: Selectors', () => {

  it('should return if has loaded data', () => {
    const selector = hasLoadedFunc(data)

    expect(selector).toEqual(true)
  })
})
