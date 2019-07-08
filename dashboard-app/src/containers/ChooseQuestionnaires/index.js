//-----------  Imports  -----------//

import { connect } from 'react-redux';
import { getFormValues } from 'redux-form';

import ChooseQuestionnaires from './ChooseQuestionnaires';

import {
  chosenQuestionnairesSelector,
  questionnaireCategoriesSelector,
  batteryActivitiesQuestionnairesSelector,
} from 'models/editBattery/selectors';
import { questionnairesSelector } from 'models/questionnaires/selectors';
import {
  editBatteryActions,
  activitiesActions,
  activityCategoriesActions,
  questionnaireCategoriesActions,
  batteryActivitiesQuestionnairesActions,
} from 'models/editBattery/actions';
import { questionnairesActions } from 'models/questionnaires/actions';
//-----------  Redux Maps  -----------//

const mapState = state => ({
  chosenQuestionnaires: chosenQuestionnairesSelector(state),
  questionnaireCategories: questionnaireCategoriesSelector(state),
  questionnaires: questionnairesSelector(state),
  batteryActivitiesQuestionnaires: batteryActivitiesQuestionnairesSelector(
    state,
  ),
});

const mapDispatch = dispatch => ({
  chooseQuestionnaire: questionnaireId => {
    return dispatch(editBatteryActions.chooseQuestionnaire(questionnaireId));
  },

  requestQuestionnaires: questionnaireCategoryId =>
    dispatch(questionnairesActions.request(questionnaireCategoryId)),
  requestQuestionnaireCategories: () =>
    dispatch(questionnaireCategoriesActions.request()),
  requestBatteryActivitiesQuestionnaires: batteryId =>
    dispatch(batteryActivitiesQuestionnairesActions.request(batteryId)),

  requestActivities: activityCategoryId =>
    dispatch(activitiesActions.request(activityCategoryId)),
  requestActivityCategories: () =>
    dispatch(activityCategoriesActions.request()),
});

//-----------  Exports  -----------//

export default connect(
  mapState,
  mapDispatch,
)(ChooseQuestionnaires);
