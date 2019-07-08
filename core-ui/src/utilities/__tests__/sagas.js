//-----------  Imports  -----------//

import { appName }               from 'utilities/constants'

import { requestTypeConst,
         successTypeConst,
         failureTypeConst,
         createActionConstant,
         createActionConstants } from '../sagas'

//-----------  Actions Tests  -----------//

describe('Sagas Untilities: Constants', () => {
  it('should create a constant string', () => {
    const action   = createActionConstant('TEST', 'EXTRA')
    const expected = `${appName}/TEST_EXTRA`

    expect(action).toEqual(expected)
  })

  it('should create a constants object w/ CRUD-strings', () => {
    const action   = createActionConstants('TEST', ['EXTRA'])
    const expected = {
      [requestTypeConst] : `${appName}/TEST_${requestTypeConst}`,
      [successTypeConst] : `${appName}/TEST_${successTypeConst}`,
      [failureTypeConst] : `${appName}/TEST_${failureTypeConst}`,
      EXTRA              : `${appName}/TEST_EXTRA`
    }

    expect(action).toEqual(expected)
  })
})
