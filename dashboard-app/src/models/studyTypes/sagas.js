//-----------  Imports  -----------//

import { all, put, call, takeEvery } from 'redux-saga/effects';

import { requestStudyTypes } from './api';
import { STUDY_TYPES, sagaActions } from './actions';

//-----------  Sagas  -----------//

export function* requestStudyTypesSaga() {
  try {
    const data = yield call(requestStudyTypes);

    yield put(sagaActions.success(data));
  } catch (error) {
    yield put(sagaActions.failure(error));
  }
}

//-----------  Watchers  -----------//

export default function* studyTypesSagas() {
  yield all([takeEvery(STUDY_TYPES.REQUEST, requestStudyTypesSaga)]);
}
