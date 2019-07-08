//-----------  Imports  -----------//

import { connect } from 'react-redux';
import { getFormValues } from 'redux-form';

import BatteryPreview from './BatteryPreview';

import {
  chosenActivitiesSelector,
  activitiesSelector,
  chosenQuestionnairesSelector,
  // questionnairesSelector,
  orderSelector,
  batterySaveSelector,
  editSuccessSelector,
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

// const mapState = state => ({
//   studyTypes: studyTypesSelector(state),
// });

// const mapDispatch = (dispatch, props) => ({
//   // onSubmit: ({ ...params }) => console.log("onSubmit: ", params),
//   onSubmit: ({ name, description, type }) => {
//     dispatch(studiesActions.create(name, description, type));
//     props.cancel();
//   },
//   requestStudyTypes: () => dispatch(studiesActions.requestTypes()),
// });

const mapState = state => ({
  chosenActivities: chosenActivitiesSelector(state),
  activities: activitiesSelector(state),
  chosenQuestionnaires: chosenQuestionnairesSelector(state),
  questionnaires: questionnairesSelector(state),
  order: orderSelector(state),
  batterySaveObj: batterySaveSelector(state),
  editSuccess: editSuccessSelector(state),
});

const mapDispatch = dispatch => ({
  requestBatteryActivitiesQuestionnaires: batteryId =>
    dispatch(batteryActivitiesQuestionnairesActions.request(batteryId)),
  requestEditBattery: (batteryId, batterySaveObj) =>
    dispatch(editBatteryActions.request(batteryId, batterySaveObj)),

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
)(BatteryPreview);
