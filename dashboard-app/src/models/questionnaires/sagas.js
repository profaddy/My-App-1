//-----------  Imports  -----------//

import { all, put, call, takeEvery, select } from 'redux-saga/effects';

import { createQuestionnaire, requestQuestionnaires } from './api';
import { QUESTIONNAIRES, sagaActions } from './actions';

//-----------  Sagas  -----------//
import { questionnairesSelector } from 'models/questionnaires/selectors';

//-----------  Sagas  -----------//

export function* requestQuestionnairesSaga(action) {
  try {
    const questionnaires = yield select(questionnairesSelector);
    if (!questionnaires.length) {
      const data = yield call(
        requestQuestionnaires,
        action.questionnaireCategoryId,
      );

      yield put(sagaActions.success(data));
    }
  } catch (error) {
    yield put(sagaActions.failure(error));
  }
}

export function* createQuestionnaireSaga({ payload }) {
  try {
    const data = yield call(createQuestionnaire, payload);

    yield put(QUESTIONNAIRES.CREATE.success(data));
  } catch (error) {
    yield put(QUESTIONNAIRES.CREATE.failure(error));
  }
}

//-----------  Watchers  -----------//

export default function* questionnairesSagas() {
  yield all([
    takeEvery(QUESTIONNAIRES.REQUEST, requestQuestionnairesSaga),
    takeEvery(QUESTIONNAIRES.CREATE.REQUEST, createQuestionnaireSaga),
  ]);
}
