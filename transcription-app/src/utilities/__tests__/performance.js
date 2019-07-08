//-----------  Imports  -----------//

import { estimateTime } from '../performance'

//-----------  Definitions  -----------//

const files = [{ id: 1 },{ id: 2 },{ id: 3 }]

//-----------  Reducer Tests  -----------//

describe('Utilities: Performace', () => {

  it('should return estimated time (for simple file count)', () => {
    const selector = estimateTime(5)
    const expected = (5 * 300)

    expect(selector).toEqual(expected)
  })

  it('should return estimated time (for array of files)', () => {
    const selector = estimateTime(files)
    const expected = (files.length * 300)

    expect(selector).toEqual(expected)
  })
})
