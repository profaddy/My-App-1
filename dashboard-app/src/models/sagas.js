//-----------  Imports  -----------//

import { all } from 'redux-saga/effects';

import { coreSagas } from '@miro/core-ui/lib/models';
import userSagas from '@miro/core-ui/lib/models/user/sagas';
import { actionsWatcherSaga } from '@miro/core-ui/lib/utilities/sagas';

import testsSagas from 'models/tests/sagas';
import studiesSagas from 'models/studies/sagas';
import batteriesSagas from 'models/batteries/sagas';
import editbatterySagas from 'models/editBattery/sagas';
import questionnairesSagas from 'models/questionnaires/sagas';
import studyTypesSagas from 'models/studyTypes/sagas';
import {
  participantsSagas,
  addParticipantSagas,
  deleteParticipantSagas,
  editParticipantSagas,
  addParticipantsSagas,
  getParticipantSaga,
  verifyParticipantSagas,
  reviewedParticipantSagas,
  drugTestSagas,
} from 'models/participant/sagas';

//-----------  Exports  -----------//

export default function* rootSaga() {
  yield all([
    ...coreSagas,
    userSagas(),
    testsSagas(),
    studiesSagas(),
    batteriesSagas(),
    editbatterySagas(),
    participantsSagas(),
    studyTypesSagas(),
    addParticipantSagas(),
    deleteParticipantSagas(),
    editParticipantSagas(),
    addParticipantsSagas(),
    getParticipantSaga(),
    questionnairesSagas(),
    actionsWatcherSaga(),
    verifyParticipantSagas(),
    reviewedParticipantSagas(),
    drugTestSagas(),
  ]);
}
