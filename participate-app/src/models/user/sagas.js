//-----------  Imports  -----------//

import get                           from 'lodash/get'

import { all, put, call, takeEvery } from 'redux-saga/effects'

import { modalProps }                from './helpers'
import { USER, sagaActions }         from './actions'
import { requestUser }               from './api'
import { modalsActions }             from 'models/modals/actions'
import { exitiedAction }             from 'models/questionnaires/actions'

import history                       from 'models/history'

import { AUTH }                      from '@miro/core-ui/lib/models/auth/actions'

//-----------  Sagas  -----------//

export function* requestUserSaga(){
  try {
    const [ data, ..._ ] = yield call(requestUser)

    yield put(sagaActions.success(data))
  } catch(err){
    const error = get(err, 'response.data', {})
    yield put(sagaActions.failure(error))
  }
}

export function* exitUserSaga(){
  try {
    const confirm = yield call([window, 'confirm'], 'Are you sure? If you exit now, any data you input will be deleted permanently.')

    if (confirm){
      yield all([
        put(exitiedAction()),
        call(history.replace, '/'),
        put(sagaActions.failure()),
        put(modalsActions.show('ERROR', modalProps, { preventClose: true }))
      ])
    }
  } catch(err){
    const error = get(err, 'response.data', {})
    yield put(sagaActions.failure(error))
  }
}

//-----------  Watchers  -----------//

export default function* questionnairesSagas(){
  yield all([
    takeEvery(AUTH.SUCCESS, requestUserSaga),
    takeEvery(USER.EXIT, exitUserSaga),
  ])
}
