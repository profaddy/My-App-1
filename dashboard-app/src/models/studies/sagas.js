//-----------  Imports  -----------//

import { all, put, call, takeEvery } from 'redux-saga/effects';
import { push } from 'connected-react-router';

import { createStudy, requestStudies } from './api';
import { STUDIES, sagaActions } from './actions';

//-----------  Sagas  -----------//

export function* requestStudiesSaga() {
  try {
    const data = yield call(requestStudies);

    yield put(sagaActions.success(data));
  } catch (error) {
    yield put(sagaActions.failure(error));
  }
}

export function* createStudySaga({ payload }) {
  try {
    const data = yield call(createStudy, payload);

    yield put(STUDIES.CREATE.success(data));
    yield put(push(`/studies/${data.id}`));
  } catch (error) {
    yield put(STUDIES.CREATE.failure(error));
  }
}

//-----------  Watchers  -----------//

export default function* studiesSagas() {
  yield all([
    takeEvery(STUDIES.REQUEST, requestStudiesSaga),
    takeEvery(STUDIES.CREATE.REQUEST, createStudySaga),
  ]);
}
