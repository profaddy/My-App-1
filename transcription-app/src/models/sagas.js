//-----------  Imports  -----------//

import { all }             from 'redux-saga/effects'

import { miroSagas }       from '@miro/core-ui'

import userSagas           from 'models/user/sagas'
import routingSagas        from 'models/routing/sagas'
import activitySagas       from 'models/activity/sagas'
import rankingsSagas       from 'models/rankings/sagas'
import subjectsSagas       from 'models/subjects/sagas'
import assignmentsSagas    from 'models/assignments/sagas'
import transcriptionsSagas from 'models/transcriptions/sagas'

//-----------  Exports  -----------//

export default function* rootSaga(){
  yield all([
    ...miroSagas,
    userSagas(),
    routingSagas(),
    activitySagas(),
    rankingsSagas(),
    subjectsSagas(),
    assignmentsSagas(),
    transcriptionsSagas(),
  ])
}
