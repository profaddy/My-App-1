//-----------  Imports  -----------//

import get from 'lodash/get';
import pick from 'lodash/pick';
import isEmpty from 'lodash/isEmpty';

import { all, put, call, takeEvery, select } from 'redux-saga/effects';

import { STUDY } from 'models/study/actions';
import { userActions } from 'models/user/actions';
import {
  updateQuestionnaire,
  submitQuestionnaire,
  requestQuestionnaire,
} from './api';
import { questionnairesAction, initialaction } from './actions';
import { modalsActions } from 'models/modals/actions';

import { attemptsSelector, canProceedSelector } from 'models/user/selectors';
import {isEligibleSelector} from 'models/user/selectors'
import {isScreenedSelector} from 'models/user/selectors'

 
import { name as eula } from 'forms/EulaForm';
import { name as consent } from 'forms/ConsentForm';
import { name as capacity } from 'forms/CapacityForm';
import { name as signature } from 'forms/SignatureForm';
import { name as sharing } from 'forms/DataSharingForm';
import { name as release } from 'forms/ReleaseForm';
import { name as eulasignature } from 'components/SignatureModal';
import { name  as euladisagree} from 'components/EulaDisgareeModal'

import { name as demographics } from 'questionnaires/DemographicsQuestionnaire';
import { name as mobileUse } from 'questionnaires/MobileUseQuestionnaire';
import { name as participation } from 'questionnaires/ParticipationQuestionnaire';
import { name as medicalHistory } from 'questionnaires/MedicalHistoryQuestionnaire';
import { name as conditions } from 'questionnaires/MedicalConditionsQuestionnaire';
import { name as strokeSeizure } from 'questionnaires/StrokeSeizureLocationQuestionnaire';
import { name as diagnosis } from 'questionnaires/DiagnosisDatesQuestionnaire';
import { name as symptoms } from 'questionnaires/SymptomSeverityQuestionnaire';
import { name as prescriptions } from 'questionnaires/PrescriptionsQuestionnaire';

//-----------  Definitions  -----------//

export const hlForms = [
  'demographics',
  'medical_history',
  'mobile',
  'participation',
  'conditions',
];

//-----------  Helpers  -----------//

export function* saveQuestionnaire(name, data) {
  const [first, ..._] = yield call(requestQuestionnaire, name);

  if (!!first && get(first, 'id', false))
    yield call(updateQuestionnaire, first.id, name, data);
  else yield call(submitQuestionnaire, name, data);
}

export function* saveHealthLifestyleQuestionnaire(type, data) {
  const [first, ..._] = yield call(requestQuestionnaire, 'healthlifestyle');

  if (!!first && get(first, 'id', false))
    yield call(updateQuestionnaire, first.id, 'healthlifestyle', {
      ...pick(first, hlForms),
      [type]: data,
    });
  else yield call(submitQuestionnaire, 'healthlifestyle', { [type]: data });
}

//-----------  Sagas  -----------//

export function* stateInitializationSaga() {
  const screen_eligible = yield select(isEligibleSelector);
  const screen_complete = yield select(isScreenedSelector);
  if (screen_complete == true && screen_eligible !== true) {
    return yield put(
      modalsActions.show('ELIGIBILITYFAILURE', {}, { preventClose: true }),
    );
  } else if (screen_complete == true && screen_eligible == true) {
    return yield put(
      modalsActions.show('SCREENINGCOMPLETE', {}, { preventClose: true }),
    );
  }

  const eulaResp = yield call(requestQuestionnaire, 'eula');
  if (!eulaResp.length) {
    return yield put(initialaction(true));
  } else {
    yield put(initialaction(false));
  }

  const signatureResp = yield call(requestQuestionnaire, 'capacity');
  if (!signatureResp.length)
    return yield put(questionnairesAction.success({ form: eulasignature }));
  else {
    yield put(
      userActions.update({ attempts: signatureResp[0].no_of_attempts, passed:signatureResp[0].capacity_passed }),
    );
  }

  const authorizationResp = yield call(requestQuestionnaire, 'authorization');
  if (!authorizationResp.length) {
    return yield put(questionnairesAction.success({ form: capacity }));
  } else {
    yield put(userActions.update({ over_18: authorizationResp[0].over_18 }));
  }

  // const sharingnResp = yield call(requestQuestionnaire, 'data_sharing')
  // if (!sharingnResp.length)
  //   return yield put(questionnairesAction.success({ form: capacity }))

  const questionnairesResp = yield call(
    requestQuestionnaire,
    'healthlifestyle',
  );

  if (isEmpty(questionnairesResp)) {
    return yield put(questionnairesAction.success({ form: signature }));
  } else if (isEmpty(questionnairesResp[0].mobile)) {
    return yield put(questionnairesAction.success({ form: demographics }));
  } else if (isEmpty(questionnairesResp[0].participation)) {
    return yield put(questionnairesAction.success({ form: mobileUse }));
  } else if (isEmpty(questionnairesResp[0].medical_history)) {
    return yield put(questionnairesAction.success({ form: participation }));
  } else if (isEmpty(questionnairesResp[0].conditions)) {
    return yield put(questionnairesAction.success({ form: medicalHistory }));
  } else if (
    isEmpty(questionnairesResp[0].prescriptions) &&
    isEmpty(questionnairesResp[0].strokeSeizure)
  ) {
    return yield put(questionnairesAction.success({ form: medicalHistory }));
  } else if (
    isEmpty(questionnairesResp[0].prescriptions) &&
    isEmpty(questionnairesResp[0].diagnosis)
  ) {
    return yield put(questionnairesAction.success({ form: medicalHistory }));
  } else if (isEmpty(questionnairesResp[0].symptoms)) {
    return yield put(questionnairesAction.success({ form: medicalHistory }));
  } else if (isEmpty(questionnairesResp[0].prescriptions)) {
    return yield put(questionnairesAction.success({ form: medicalHistory }));
  }

  const releaseResp = yield call(requestQuestionnaire, 'release');
  if (!releaseResp.length)
    return yield put(questionnairesAction.success({ form: prescriptions }));

  return yield put(questionnairesAction.success({ form: release }));
}

export function* submitQuestionnaireSaga({ props, payload }) {
  try {
    const form = get(props, 'form');
    switch (form) {
      //-----------  Consent Flow  -----------//

      case eula:
        break;

      case euladisagree:

        yield call(saveQuestionnaire, 'eula', {
          ...payload,
          ...{ accepted: false },
        });
        break;

      case eulasignature:
        yield call(saveQuestionnaire, 'eula', {
          ...payload,
          ...{ accepted: true },
        });
        break;

      case consent:
        break;

      case capacity:
        const canProceed = yield select(canProceedSelector);
        const attempts = yield select(attemptsSelector);

        if (canProceed) {
          yield call(saveQuestionnaire, 'capacity', {
            ...payload,
            ...{
              capacity_passed: true,
              no_of_attempts: attempts,
            },
          });
        } else if (attempts > 0) {
          yield call(saveQuestionnaire, 'capacity', {
            ...payload,
            ...{
              no_of_attempts: attempts,
            },
          });
        } else {
          yield call(saveQuestionnaire, 'capacity', {
            ...payload,
            ...{
              capacity_passed: false,
              no_of_attempts: attempts,
            },
          });
        }
        break;

      case signature:
        yield call(saveQuestionnaire, 'authorization', payload);
        break;

      case sharing:
        yield call(saveQuestionnaire, 'data_sharing', payload);
        break;

      //-----------  Questionnaires Flow  -----------//

      case demographics:
        yield call(saveHealthLifestyleQuestionnaire, 'demographics', payload);
        break;

      case mobileUse:
        yield call(saveHealthLifestyleQuestionnaire, 'mobile', payload);
        break;

      case participation:
        yield call(saveHealthLifestyleQuestionnaire, 'participation', payload);
        break;

      case medicalHistory:
        yield call(
          saveHealthLifestyleQuestionnaire,
          'medical_history',
          payload,
        );
        break;

      case conditions:
        yield call(saveHealthLifestyleQuestionnaire, 'conditions', payload);
        break;

      case strokeSeizure:
        yield call(saveHealthLifestyleQuestionnaire, 'stroke_seizure', payload);
        break;

      case diagnosis:
        yield call(
          saveHealthLifestyleQuestionnaire,
          'diagnosis_dates',
          payload,
        );
        break;

      case symptoms:
        yield call(saveHealthLifestyleQuestionnaire, 'symptoms', payload);
        break;

      case prescriptions:
        yield call(saveHealthLifestyleQuestionnaire, 'prescriptions', payload);
        break;

      case release:
        yield call(saveQuestionnaire, 'release', payload);
        break;

      default:
        console.error('No Matching Form ID');
    }

    yield put(questionnairesAction.success({ form, data: payload }));
  } catch (error) {
    yield put(questionnairesAction.failure({ error }));
  }
} 

//-----------  Watchers  -----------//

export default function* questionnairesSagas() {
  yield all([
    takeEvery(STUDY.SUCCESS, stateInitializationSaga),
    takeEvery(questionnairesAction.REQUEST, submitQuestionnaireSaga),
  ]);
}
