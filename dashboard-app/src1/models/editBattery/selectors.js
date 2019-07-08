//-----------  Imports  -----------//

import moment from 'moment';

import { createSelector } from 'reselect';

//-----------  Inputs  -----------//

//-----------  Selectors  -----------//

export const chosenActivitiesSelector = state =>
  state.editBattery.chosenActivities;

export const chosenQuestionnairesSelector = state =>
  state.editBattery.chosenQuestionnaires;

export const questionnairesSelector = state => state.editBattery.questionnaires;

export const questionnaireCategoriesSelector = state =>
  state.editBattery.questionnaireCategories;

export const activitiesSelector = state => state.editBattery.activities;

export const activityCategoriesSelector = state =>
  state.editBattery.activityCategories;

export const batteryActivitiesQuestionnairesSelector = state =>
  state.editBattery.batteryActivitiesQuestionnaires;

export const orderSelector = state => state.editBattery.order;
export const editSuccessSelector = state => state.editBattery.editSuccess;

// export const dataSelector = state => state.questionnaires.data;

// //-----------  Selectors  -----------//

export const batterySaveSelector = createSelector(
  [orderSelector, activitiesSelector, questionnairesSelector],
  batterySaveFunc,
);

//-----------  Selector Functions  -----------//

export function batterySaveFunc(order, activities, questionnaires) {
  // console.log('editBatteryFunc: ', order, activities, questionnaires);
  const batterySaveObj = {
    activities: [],
    questionnaires: [],
  };
  order.forEach((element, index) => {
    if (element.activity) {
      batterySaveObj.activities.push({
        activity: element.activity,
        counter: index,
      });
    } else {
      batterySaveObj.questionnaires.push({
        questionnaire: element.questionnaire,
        counter: element.counter,
      });
    }
  });
  // console.log('batterySaveObj: ', batterySaveObj);
  return batterySaveObj;
}
