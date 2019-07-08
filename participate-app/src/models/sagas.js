//-----------  Imports  -----------//

import { all }                from 'redux-saga/effects'

import miroSagas              from '@miro/core-ui/lib/models/app/sagas'
import { actionsWatcherSaga } from '@miro/core-ui/lib/utilities/sagas'

import userSagas              from 'models/user/sagas'
import studySagas             from 'models/study/sagas'
import modalsSagas            from 'models/modals/sagas'
import routingSagas           from 'models/routing/sagas'
import questionnairesSagas    from 'models/questionnaires/sagas'

//-----------  Exports  -----------//

export default function* rootSaga(){
  yield all([
    ...miroSagas,
    userSagas(),
    studySagas(),
    modalsSagas(),
    routingSagas(),
    questionnairesSagas(),
    actionsWatcherSaga(),
  ])
}
