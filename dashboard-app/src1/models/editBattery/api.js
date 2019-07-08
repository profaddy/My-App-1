//-----------  Imports  -----------//

import api from '@miro/core-ui/lib/utilities/api';
import urlCreator from 'utilities/api.creator';

//-----------  Endpoints  -----------//

export const requestActivityCategories = () => {
  return api.get(urlCreator(`/battery/activitycategories/`));
};
export const requestActivities = activityCategoryId => {
  // console.log('activityCategoryId: ', activityCategoryId);
  return api.get(
    urlCreator(
      `/battery/activities/${
        activityCategoryId ? `?activitycategory_id=${activityCategoryId}` : ``
      }`,
    ),
  );
  // return require('./__mocks__/api').requestBatteries();
};
export const requestQuestionnaireCategories = () => {
  return api.get(urlCreator(`/battery/questionnairecategories/`));
};

export const requestEditBattery = ({ batteryId, saveObj }) => {
  // console.log('requestEditBattery: ', saveObj);
  return api.post(urlCreator(`/battery/batteries/${batteryId}/meta/`), saveObj);
};

export const requestQuestionnaires = questionnaireCategoryId => {
  return api.get(
    urlCreator(
      `/battery/questionnaires/${
        questionnaireCategoryId
          ? `?questionnairecategory_id=${questionnaireCategoryId}`
          : ``
      }`,
    ),
  );
};

export const requestBatteryActivitiesQuestionnaires = batteryId => {
  // console.log('batteryId: ', batteryId);
  return api.get(urlCreator(`/battery/batteries/${batteryId}/meta/`));
};

export const requestBatteryActivitiesQuestionnairesUpdate = (
  batteryId,
  batteryActivitiesQuestionnaires,
) => {
  return api.post(
    urlCreator(`/battery/batteries/${batteryId}/meta/`),
    batteryActivitiesQuestionnaires,
  );
};
