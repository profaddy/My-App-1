//-----------  Imports  -----------//

import { all, put, call, takeEvery, select } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import {
  requestActivityCategories,
  requestActivities,
  requestQuestionnaireCategories,
  // requestQuestionnaires,
  requestBatteryActivitiesQuestionnaires,
  requestEditBattery,
} from './api';
import {
  EDIT_BATTERY,
  ACTIVITY_CATEGORIES,
  ACTIVITIES,
  QUESTIONNAIRE_CATEGORIES,
  // QUESTIONNAIRES,
  BATTERY_ACTIVITIES_QUESTIONNAIRES,
  activityCategoriesActions,
  activitiesActions,
  questionnaireCategoriesActions,
  // questionnairesActions,
  batteryActivitiesQuestionnairesActions,
  editBatteryActions,
} from './actions';

import {
  questionnaireCategoriesSelector,
  activitiesSelector,
  activityCategoriesSelector,
  batteryActivitiesQuestionnairesSelector,
} from 'models/editBattery/selectors';

//-----------  Sagas  -----------//

export function* requestActivityCategoriesSaga() {
  try {
    const activityCategories = yield select(activityCategoriesSelector);
    if (!activityCategories.length) {
      const data = yield call(requestActivityCategories);
      yield put(activityCategoriesActions.success(data));
    }
  } catch (error) {
    yield put(activityCategoriesActions.failure(error));
  }
}
export function* requestActivitiesSaga(action) {
  try {
    const activities = yield select(activitiesSelector);
    // console.log('requestActivitiesSaga: ', activities);
    if (!activities.length) {
      const data = yield call(requestActivities, action.activityCategoryId);
      yield put(activitiesActions.success(data));
    }
  } catch (error) {
    yield put(activitiesActions.failure(error));
  }
}
export function* requestQuestionnaireCategoriesSaga() {
  try {
    const questionnaireCategories = yield select(
      questionnaireCategoriesSelector,
    );
    if (!questionnaireCategories.length) {
      const data = yield call(requestQuestionnaireCategories);
      yield put(questionnaireCategoriesActions.success(data));
    }
  } catch (error) {
    yield put(questionnaireCategoriesActions.failure(error));
  }
}
// export function* requestQuestionnairesSaga() {
//   try {
//     console.log('requestQuestionnairesSaga');
//     const data = yield call(requestQuestionnaires);
//     yield put(questionnairesActions.success(data));
//   } catch (error) {
//     yield put(questionnairesActions.failure(error));
//   }
// }
export function* requestBatteryActivitiesQuestionnairesSaga(action) {
  try {
    const batteryActivitiesQuestionnaires = yield select(
      batteryActivitiesQuestionnairesSelector,
    );
    if (
      !batteryActivitiesQuestionnaires.activities &&
      !batteryActivitiesQuestionnaires.questionnaires
    ) {
      const data = yield call(
        requestBatteryActivitiesQuestionnaires,
        action.batteryId,
      );
      yield put(batteryActivitiesQuestionnairesActions.success(data));
    }
  } catch (error) {
    yield put(batteryActivitiesQuestionnairesActions.failure(error));
  }
}
export function* requestEditBatterySaga(action) {
  try {
    const editSuccess = yield call(requestEditBattery, action);
    yield put(editBatteryActions.success(editSuccess));
  } catch (error) {
    yield put(editBatteryActions.failure(error));
  }
}

//-----------  Watchers  -----------//

export default function* editbatterySagas() {
  yield all([
    takeEvery(ACTIVITY_CATEGORIES.REQUEST, requestActivityCategoriesSaga),
    takeEvery(EDIT_BATTERY.REQUEST, requestEditBatterySaga),
    takeEvery(ACTIVITIES.REQUEST, requestActivitiesSaga),
    takeEvery(
      QUESTIONNAIRE_CATEGORIES.REQUEST,
      requestQuestionnaireCategoriesSaga,
    ),
    // takeEvery(QUESTIONNAIRES.REQUEST, requestQuestionnairesSaga),
    takeEvery(
      BATTERY_ACTIVITIES_QUESTIONNAIRES.REQUEST,
      requestBatteryActivitiesQuestionnairesSaga,
    ),
  ]);
}
