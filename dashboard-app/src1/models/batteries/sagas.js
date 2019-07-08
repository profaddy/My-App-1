//-----------  Imports  -----------//

import { all, put, call, takeEvery } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import { createBattery, requestBatteries } from './api';
import { BATTERIES, sagaActions } from './actions';

//-----------  Sagas  -----------//

export function* requestBatteriesSaga() {
  try {
    const data = yield call(requestBatteries);

    yield put(sagaActions.success(data));
  } catch (error) {
    yield put(sagaActions.failure(error));
  }
}

export function* createBatterySaga({ payload }) {
  try {
    const data = yield call(createBattery, payload);

    yield put(BATTERIES.CREATE.success(data));
    yield put(push(`/batteries/${data.id}`));
  } catch (error) {
    yield put(BATTERIES.CREATE.failure(error));
  }
}
// export function* chooseActivitiesSaga() {
//   try {
//     yield put(push(`/batteries/activities/questionnaires/`));
//   } catch (error) {}
// }

//-----------  Watchers  -----------//

export default function* batteriesSagas() {
  yield all([
    takeEvery(BATTERIES.REQUEST, requestBatteriesSaga),
    takeEvery(BATTERIES.CREATE.REQUEST, createBatterySaga),
    // takeEvery(BATTERIES.CHOOSE_ACTIVITIES, createBatterySaga),
  ]);
}
