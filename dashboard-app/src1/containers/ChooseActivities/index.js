//-----------  Imports  -----------//

import { connect } from 'react-redux';
import { getFormValues } from 'redux-form';

import ChooseActivities from './ChooseActivities';

import {
  chosenActivitiesSelector,
  activitiesSelector,
  activityCategoriesSelector,
  batteryActivitiesQuestionnairesSelector,
} from 'models/editBattery/selectors';
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
  activityCategories: activityCategoriesSelector(state),
  activities: activitiesSelector(state),
  batteryActivitiesQuestionnaires: batteryActivitiesQuestionnairesSelector(
    state,
  ),
});

const mapDispatch = dispatch => ({
  initBatteryEdit: batteryId => dispatch(editBatteryActions.init(batteryId)),
  chooseActivity: activityId =>
    dispatch(editBatteryActions.chooseActivity(activityId)),
  requestActivities: activityCategoryId =>
    dispatch(activitiesActions.request(activityCategoryId)),
  requestActivityCategories: () =>
    dispatch(activityCategoriesActions.request()),
  requestBatteryActivitiesQuestionnaires: batteryId =>
    dispatch(batteryActivitiesQuestionnairesActions.request(batteryId)),

  requestQuestionnaires: questionnaireCategoryId =>
    dispatch(questionnairesActions.request(questionnaireCategoryId)),
  requestQuestionnaireCategories: () =>
    dispatch(questionnaireCategoriesActions.request()),
});

//-----------  Exports  -----------//

export default connect(
  mapState,
  mapDispatch,
)(ChooseActivities);
