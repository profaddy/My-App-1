//-----------  Imports  -----------//

import moment from 'moment';

import { all, put, call, takeEvery, select } from 'redux-saga/effects';

import { testSubmitAction } from './actions';
import { participantActions } from 'models/participant/action';
import { submitTest } from './api';
import { ticsDataSelector } from './selectors';

//-----------  Sagas  -----------//

export function* submitTestSaga({ props, payload }) {
  const { studyId, participantId, ...formValues } = payload;

  try {
    const { notes, ...formData } = formValues;
    const data = {
      notes: notes,
      study_id: studyId,
      ...props.calculated,
      test_date: moment().format('YYYY-MM-DD'),
      data: Object.keys(formData).map(item => {
        return { item, score: formData[item], description: item };
      }),
      change_reason: 'NA',
    };
    const ticsData = yield select(ticsDataSelector);
    // console.log('ticsData', ticsData);
    yield call(submitTest, participantId, data, ticsData);

    yield put(testSubmitAction.success(props));
    yield put(participantActions.getParticipant(studyId, participantId));
  } catch (error) {
    yield put(testSubmitAction.failure({ error }));
  }
}

//-----------  Watchers  -----------//

export default function* testsSagas() {
  yield all([takeEvery(testSubmitAction.REQUEST, submitTestSaga)]);
}
