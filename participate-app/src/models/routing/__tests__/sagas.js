//-----------  Imports  -----------//

import { put, call, take, select }    from 'redux-saga/effects'
import { cloneableGenerator }         from 'redux-saga/utils'

import history                        from 'models/history'

import { sagaActions as authActions } from '@miro/core-ui/lib/models/auth/actions'

import { watchTestComplete }          from '../sagas'

//-----------  Definitions  -----------//

const error = new Error('Invalid password')

//-----------  Saga Tests  -----------//

describe('Routing Model: Watch Test Completion Saga', () => {
  const generator = cloneableGenerator(watchTestComplete)(authActions.success('abcdefg'))
  let failure, success
})
