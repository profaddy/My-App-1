//-----------  Imports  -----------//

import { connect } from 'react-redux';
import { getFormValues } from 'redux-form';

import BatteryOrdering from './BatteryOrdering';

import {
  chosenActivitiesSelector,
  activitiesSelector,
  chosenQuestionnairesSelector,
  editSuccessSelector,
  batterySaveSelector,
  orderSelector,
} from 'models/editBattery/selectors';
import { questionnairesSelector } from 'models/questionnaires/selectors';

import {
  editBatteryActions,
  activityCategoriesActions,
  activitiesActions,
  batteryActivitiesQuestionnairesActions,
  questionnaireCategoriesActions,
} from 'models/editBattery/actions';
import { questionnairesActions } from 'models/questionnaires/actions';

//-----------  Redux Maps  -----------//

const mapState = state => ({
  chosenActivities: chosenActivitiesSelector(state),
  activities: activitiesSelector(state),
  chosenQuestionnaires: chosenQuestionnairesSelector(state),
  questionnaires: questionnairesSelector(state),
  order: orderSelector(state),
  editSuccess: editSuccessSelector(state),
  batterySaveObj: batterySaveSelector(state),
});

const mapDispatch = dispatch => ({
  reorderItems: newOrder => dispatch(editBatteryActions.reorderItems(newOrder)),
  requestEditBattery: (batteryId, batterySaveObj) =>
    dispatch(editBatteryActions.request(batteryId, batterySaveObj)),
  requestBatteryActivitiesQuestionnaires: batteryId =>
    dispatch(batteryActivitiesQuestionnairesActions.request(batteryId)),

  requestQuestionnaires: questionnaireCategoryId =>
    dispatch(questionnairesActions.request(questionnaireCategoryId)),
  requestQuestionnaireCategories: () =>
    dispatch(questionnaireCategoriesActions.request()),
  requestActivities: activityCategoryId =>
    dispatch(activitiesActions.request(activityCategoryId)),
  requestActivityCategories: () =>
    dispatch(activityCategoriesActions.request()),
});

//-----------  Exports  -----------//

export default connect(
  mapState,
  mapDispatch,
)(BatteryOrdering);
