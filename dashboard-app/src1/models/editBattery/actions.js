//-----------  Imports  -----------//

import {
  createFormAction,
  createActionConstants,
} from '@miro/core-ui/lib/utilities/sagas';

//-----------  Definitions  -----------//

export const EDIT_BATTERY = createActionConstants('EDIT_BATTERY', [
  'CHOOSE_ACTIVITY',
  'CHOOSE_QUESTIONNAIRE',
  'REORDER_ITEMS',
  'INIT',
]);
export const ACTIVITY_CATEGORIES = createActionConstants('ACTIVITY_CATEGORIES');
export const QUESTIONNAIRE_CATEGORIES = createActionConstants(
  'QUESTIONNAIRE_CATEGORIES',
);
export const ACTIVITIES = createActionConstants('ACTIVITIES');
// export const QUESTIONNAIRES = createActionConstants('QUESTIONNAIRES');
export const BATTERY_ACTIVITIES_QUESTIONNAIRES = createActionConstants(
  'BATTERY_ACTIVITIES_QUESTIONNAIRES',
);

//-----------  Studies Actions  -----------//

export const editBatteryActions = {
  init: batteryId => ({
    type: EDIT_BATTERY.INIT,
    batteryId,
  }),
  reorderItems: newOrder => {
    return {
      type: EDIT_BATTERY.REORDER_ITEMS,
      newOrder,
    };
  },
  chooseActivity: activityId => {
    return {
      type: EDIT_BATTERY.CHOOSE_ACTIVITY,
      activityId,
    };
  },
  chooseQuestionnaire: questionnaireId => {
    return {
      type: EDIT_BATTERY.CHOOSE_QUESTIONNAIRE,
      questionnaireId,
    };
  },
  request: (batteryId, saveObj) => {
    // console.log('editBatteryActions.request: ', saveObj);
    return {
      type: EDIT_BATTERY.REQUEST,
      batteryId,
      saveObj,
    };
  },
  success: editSuccess => ({
    type: EDIT_BATTERY.SUCCESS,
    editSuccess,
  }),
  failure: error => ({ type: EDIT_BATTERY.FAILURE, error }),
};

export const activityCategoriesActions = {
  request: () => ({ type: ACTIVITY_CATEGORIES.REQUEST }),
  success: activityCategories => ({
    type: ACTIVITY_CATEGORIES.SUCCESS,
    activityCategories,
  }),
  failure: error => ({ type: ACTIVITY_CATEGORIES.FAILURE, error }),
};
export const activitiesActions = {
  request: activityCategoryId => ({
    type: ACTIVITIES.REQUEST,
    activityCategoryId,
  }),
  success: activities => ({ type: ACTIVITIES.SUCCESS, activities }),
  failure: error => ({ type: ACTIVITIES.FAILURE, error }),
};
export const questionnaireCategoriesActions = {
  request: () => ({ type: QUESTIONNAIRE_CATEGORIES.REQUEST }),
  success: questionnaireCategories => ({
    type: QUESTIONNAIRE_CATEGORIES.SUCCESS,
    questionnaireCategories,
  }),
  failure: error => ({ type: QUESTIONNAIRE_CATEGORIES.FAILURE, error }),
};
// export const questionnairesActions = {
//   request: () => ({ type: QUESTIONNAIRES.REQUEST }),
//   success: questionnaires => {
//     console.log('questionnairesActions: ', questionnaires);
//     return { type: QUESTIONNAIRES.SUCCESS, questionnaires };
//   },
//   failure: error => ({ type: QUESTIONNAIRES.FAILURE, error }),
// };
export const batteryActivitiesQuestionnairesActions = {
  request: batteryId => ({
    type: BATTERY_ACTIVITIES_QUESTIONNAIRES.REQUEST,
    batteryId,
  }),
  success: batteryActivitiesQuestionnaires => ({
    type: BATTERY_ACTIVITIES_QUESTIONNAIRES.SUCCESS,
    batteryActivitiesQuestionnaires,
  }),
  failure: error => ({
    type: BATTERY_ACTIVITIES_QUESTIONNAIRES.FAILURE,
    error,
  }),
};
