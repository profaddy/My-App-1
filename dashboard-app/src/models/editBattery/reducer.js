//-----------  Imports  -----------//

import {
  EDIT_BATTERY,
  ACTIVITY_CATEGORIES,
  QUESTIONNAIRE_CATEGORIES,
  ACTIVITIES,
  // QUESTIONNAIRES,
  BATTERY_ACTIVITIES_QUESTIONNAIRES,
} from './actions';
import { BATTERIES } from 'models/batteries/actions';

//-----------  Definitions  -----------//

export const initialState = {
  activityCategories: [],
  questionnaireCategories: [],
  activities: [],
  // questionnaires: [],
  batteryActivitiesQuestionnaires: {},
  order: [],
  chosenActivities: [],
  chosenQuestionnaires: [],
  editSuccess: null,
  error: null,
  isLoading: false,
};

//-----------  Reducers  -----------//

export default function editBatteryReducer(state = initialState, action) {
  const {
    batteryId,
    activityCategories,
    questionnaireCategories,
    activities,
    // questionnaires,
    batteryActivitiesQuestionnaires,
    editSuccess,
    error,
  } = action;

  switch (action.type) {
    case BATTERIES.CREATE.REQUEST:
      return {
        ...state,
        batteryId: null,
        batteryActivitiesQuestionnaires: {},
        chosenActivities: [],
        chosenQuestionnaires: [],
        order: [],
        editSuccess: null,
      };

    case EDIT_BATTERY.INIT:
      // If we have a pre-loaded battery, clear it if the ID doesn't match.
      if (state.batteryId !== undefined && state.batteryId !== batteryId) {
        return {
          ...state,
          batteryActivitiesQuestionnaires: {},
          order: [],
          editSuccess: null,
          batteryId: batteryId,
        };
      }
      return {
        ...state,
      };

    case EDIT_BATTERY.REORDER_ITEMS:
      return {
        ...state,
        order: action.newOrder,
      };

    case EDIT_BATTERY.CHOOSE_ACTIVITY:
      return {
        ...state,
        chosenActivities: state.chosenActivities.includes(action.activityId)
          ? state.chosenActivities.filter(id => id !== action.activityId)
          : [action.activityId, ...state.chosenActivities],

        order: state.chosenActivities.includes(action.activityId)
          ? state.order.filter(element =>
              element.type !== 'activity'
                ? true
                : element.activity !== action.activityId,
            )
          : [
              ...state.order,
              {
                type: 'activity',
                activity: action.activityId,
                counter: state.order.length,
              },
            ],
      };

    case EDIT_BATTERY.CHOOSE_QUESTIONNAIRE:
      return {
        ...state,
        chosenQuestionnaires: state.chosenQuestionnaires.includes(
          action.questionnaireId,
        )
          ? state.chosenQuestionnaires.filter(
              id => id !== action.questionnaireId,
            )
          : [action.questionnaireId, ...state.chosenQuestionnaires],

        order: state.chosenQuestionnaires.includes(action.questionnaireId)
          ? state.order.filter(element =>
              element.type !== 'questionnaire'
                ? true
                : element.questionnaire !== action.questionnaireId,
            )
          : [
              ...state.order,
              {
                type: 'questionnaire',
                questionnaire: action.questionnaireId,
                counter: state.order.length,
              },
            ],
      };

    case EDIT_BATTERY.REQUEST:
      return { ...state, isLoading: true, error: null };

    case EDIT_BATTERY.SUCCESS:
      return { ...state, isLoading: false, editSuccess };

    case EDIT_BATTERY.FAILURE:
      return { ...state, error };

    case ACTIVITY_CATEGORIES.REQUEST:
      return { ...state, isLoading: true, error: null };

    case ACTIVITY_CATEGORIES.SUCCESS:
      return { ...state, isLoading: false, activityCategories };

    case ACTIVITY_CATEGORIES.FAILURE:
      return { ...state, error };

    case QUESTIONNAIRE_CATEGORIES.REQUEST:
      return { ...state, isLoading: true, error: null };

    case QUESTIONNAIRE_CATEGORIES.SUCCESS:
      return { ...state, isLoading: false, questionnaireCategories };

    case QUESTIONNAIRE_CATEGORIES.FAILURE:
      return { ...state, error };

    case ACTIVITIES.REQUEST:
      return { ...state, isLoading: true, error: null };

    case ACTIVITIES.SUCCESS:
      return { ...state, isLoading: false, activities };

    case ACTIVITIES.FAILURE:
      return { ...state, error };

    // case QUESTIONNAIRES.REQUEST:
    //   return {
    //     ...state,
    //     isLoading: true,
    //     error: null /* , questionnaires: [] */,
    //   };

    // case QUESTIONNAIRES.SUCCESS:
    //   return { ...state, isLoading: false, questionnaires };

    // case QUESTIONNAIRES.FAILURE:
    //   return { ...state, error };

    case BATTERY_ACTIVITIES_QUESTIONNAIRES.REQUEST:
      return { ...state, isLoading: true, error: null, batteryId };

    case BATTERY_ACTIVITIES_QUESTIONNAIRES.SUCCESS:
      const temp_order = [];

      batteryActivitiesQuestionnaires.activities.forEach(activity => {
        temp_order[Number(activity.counter)] = {
          ...activity,
          type: 'activity',
        };
      });
      batteryActivitiesQuestionnaires.questionnaires.forEach(questionnaire => {
        temp_order[Number(questionnaire.counter)] = {
          ...questionnaire,
          type: 'questionnaire',
        };
      });

      return {
        ...state,
        isLoading: false,
        batteryActivitiesQuestionnaires,
        chosenActivities: batteryActivitiesQuestionnaires.activities.map(
          activity => activity.activity,
        ),
        chosenQuestionnaires: batteryActivitiesQuestionnaires.questionnaires.map(
          questionnaire => questionnaire.questionnaire,
        ),
        order: temp_order,
      };

    case BATTERY_ACTIVITIES_QUESTIONNAIRES.FAILURE:
      return { ...state, error };

    default:
      return state;
  }
}
