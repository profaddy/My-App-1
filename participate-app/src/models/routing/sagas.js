//-----------  Imports  -----------//

import isEmpty from 'lodash/isEmpty';

import { all, put, call, take, select, takeEvery } from 'redux-saga/effects';

import { ROUTING, sagaActions } from './actions';
import { stageSelector } from './selectors';

import { APP } from '@miro/core-ui/lib/models/app/actions';
import { AUTH } from '@miro/core-ui/lib/models/auth/actions';
import { STUDY } from 'models/study/actions';
import { modalsActions } from 'models/modals/actions';
import {
  completedAction,
  questionnairesAction,
  initialaction,
} from 'models/questionnaires/actions';
import { userActions } from 'models/user/actions';
import {
  attemptsSelector,
  canProceedSelector,
  isEligibleSelector,
} from 'models/user/selectors';
import { studySelector } from 'models/user/selectors';
import {
  brianConditionsSelector,
  medicalConditionsSelector,
} from 'models/questionnaires/selectors';

import { hasDataSharing } from 'data/studies';
import { basename } from 'utilities/routing';
import history from 'models/history';
import { requestEligibility } from './api';
import { submitEligibility } from './api';

import { modalProps as studyModal } from './helpers';
import { modalProps as userModal } from 'models/user/helpers';

import { name as eula } from 'forms/EulaForm';
import { name as consent } from 'forms/ConsentForm';
import { name as capacity } from 'forms/CapacityForm';
import { name as signature } from 'forms/SignatureForm';
import { name as sharing } from 'forms/DataSharingForm';
import { name as release } from 'forms/ReleaseForm';
import { name as eulasignature } from 'components/SignatureModal';
import { name as euladisagree } from 'components/EulaDisgareeModal';

import { name as demographics } from 'questionnaires/DemographicsQuestionnaire';
import { name as mobileUse } from 'questionnaires/MobileUseQuestionnaire';
import { name as participation } from 'questionnaires/ParticipationQuestionnaire';
import { name as medicalHistory } from 'questionnaires/MedicalHistoryQuestionnaire';
import { name as conditions } from 'questionnaires/MedicalConditionsQuestionnaire';
import { name as strokeSeizure } from 'questionnaires/StrokeSeizureLocationQuestionnaire';
import { name as diagnosis } from 'questionnaires/DiagnosisDatesQuestionnaire';
import { name as symptoms } from 'questionnaires/SymptomSeverityQuestionnaire';
import { name as prescriptions } from 'questionnaires/PrescriptionsQuestionnaire';

//-----------  Helpers  -----------//

export function* afterConsentsSaga() {
  try {
    const stage = yield select(stageSelector);
    const canProceed = yield select(canProceedSelector);

    switch (stage) {
      case eula:
        yield put(
          modalsActions.show('PROGRESS', {
            step: 'consent',
            subtitle: 'Next up: Capacity',
            message:
              "You've got a few more forms to wade through that'll take 20-30 minutes. Good luck! We'll see you after Capacity.",
          }),
        );
        yield call(history.push, '/consent/capacity');
        break;

      case consent:
        yield call(history.push, '/consent/capacity');
        break;

      case capacity:
        if (canProceed) yield call(history.push, '/consent/signature');
        else yield call(history.push, '/consent/capacity');
        break;

      case signature:
        if (hasDataSharing === basename)
          yield call(history.push, '/consent/sharing');
        else yield call(history.push, '/questionnaires');
        break;

      default:
        yield call(history.push, '/questionnaires');
    }
  } catch (error) {
    yield put(sagaActions.failure(error));
  }
}

//-----------  Sagas  -----------//

export function* watchStudySaga() {
  while (true) {
    yield take(STUDY.FAILURE);
    yield call(history.replace, '/');
    yield put(modalsActions.show('ERROR', studyModal, { preventClose: true }));
  }
}

export function* watchSignOutSaga() {
  while (true) {
    yield put(userActions.update({ isError: false }));
    yield take(AUTH.SIGN_OUT);
    yield call(history.replace, '/');
  }
}

export function* formRoutingSaga({ payload }) {
  let brainConditions, medicalConditions;

  try {
    const { form } = payload;
    switch (form) {
      //-----------  Consent Flow  -----------//

      case eula:
        yield put(initialaction(true));
        yield put(modalsActions.show('SIGNATURE'));
        break;

      case euladisagree:
        yield put(
          modalsActions.show('ELIGIBILITYFAILURE', {}, { preventClose: true }),
        );
        break;

      case eulasignature:
        yield put(
          modalsActions.show('PROGRESS', {
            step: 'eula',
            subtitle: 'Next up: Consent',
            message:
              "You've got a few more forms to wade through that'll take 20-30 minutes. Good luck! We'll see you after Consent.",
          }),
        );
        yield call(history.replace, '/consent/info');
        break;

      case consent:
        yield put(
          modalsActions.show('PROGRESS', {
            step: 'consent',
            subtitle: 'Next up: Capacity',
            message:
              "You've got a few more forms to wade through that'll take 20-30 minutes. Good luck! We'll see you after Consent.",
          }),
        );
        yield call(afterConsentsSaga);
        yield call(history.replace, '/consent/capacity');
        break;

      case capacity:
        const canProceed = yield select(canProceedSelector);
        const attempts = yield select(attemptsSelector);

        if (canProceed) {
          yield put(
            modalsActions.show('PROGRESS', {
              step: 'capacity',
              subtitle: 'Next up: Authorization',
              message:
                "You've got a few more forms to wade through that'll take 20-30 minutes. Good luck! We'll see you after Authorization.",
            }),
          );
          yield call(history.push, '/consent/signature');
        } else if (attempts > 0) {
          yield put(modalsActions.show('FAILURE', { attempts }));
          yield call(history.push, '/consent/info');
        } else {
          yield call(checkEligibilitySaga);
        }
        break;

      case signature:
        if (hasDataSharing === basename)
          yield call(history.replace, '/consent/sharing');
        else yield call(completeConsentSaga);
        break;

      case sharing:
        yield call(completeConsentSaga);
        break;

      //-----------  Questionnaires Flow  -----------//

      case demographics:
        yield call(history.push, `/questionnaires/${mobileUse}`);
        break;

      case mobileUse:
        yield call(history.push, `/questionnaires/${participation}`);
        break;

      case participation:
        yield call(history.push, `/questionnaires/${medicalHistory}`);
        break;

      case medicalHistory:
        yield call(history.push, `/questionnaires/${conditions}`);
        const eligible = yield select(isEligibleSelector);
        if (eligible == true) {
          yield call(completeQuestionnairesSaga);
        }
        break;

      case conditions:
        brainConditions = yield select(brianConditionsSelector);
        medicalConditions = yield select(medicalConditionsSelector);

        if (!isEmpty(brainConditions))
          yield call(history.push, `/questionnaires/${strokeSeizure}`);
        else if (!isEmpty(medicalConditions))
          yield call(history.push, `/questionnaires/${diagnosis}`);
        else {
          yield call(checkEligibilitySaga);
        }
        break;

      case strokeSeizure:
        yield call(history.push, `/questionnaires/${diagnosis}`);
        break;

      case diagnosis:
        yield call(history.push, `/questionnaires/${symptoms}`);
        break;

      case symptoms:
        yield call(history.push, `/questionnaires/${prescriptions}`);
        break;

      case prescriptions:
        yield call(history.push, `/release`);
        break;

      case release:
        yield call(checkEligibilitySaga);
        break;
    }

    yield put(sagaActions.success(form));
  } catch (error) {
    yield put(sagaActions.failure(error));
  }
}

export function* checkEligibilitySaga() {
  let { id } = yield select(studySelector);
  const { screening_eligibility } = yield call(requestEligibility, `${id}`);
  yield put(userActions.update({ eligible: screening_eligibility }));
  if (screening_eligibility) {
    yield call(completeQuestionnairesSaga);
  } else {
    yield put(
      modalsActions.show('ELIGIBILITYFAILURE', {}, { preventClose: true }),
    );
    yield call(submitEligibility, `${id}`);
  }
}
export function* completeConsentSaga() {
  const step = 'signature';
  const subtitle = 'Next up: Health & Lifestyle Questions';
  const message =
    "Thanks. We've got a few questions about your health. Almost there!";

  try {
    yield call(history.replace, '/questionnaires');
    yield put(modalsActions.show('PROGRESS', { step, subtitle, message }));

    yield put(sagaActions.success('questionnaires'));
  } catch (error) {
    yield put(sagaActions.failure(error));
  }
}

export function* completeQuestionnairesSaga() {
  const step = 'questionnaires';
  const subtitle = 'Congratulations!';
  const message = `You made it! We'll be in touch at the study's end when your results are available. In the meantime, do your brain a favor; put your electronics down and go play outside! See you soon!`;

  try {
    yield put(completedAction());
    yield call(history.replace, '/');
    yield put(
      modalsActions.show(
        'PROGRESS',
        { step, subtitle, message },
        { preventClose: true },
      ),
    );
    yield put(sagaActions.success('completed'));
  } catch (error) {
    yield put(sagaActions.failure(error));
  }
}

//-----------  Watchers  -----------//

export default function* routingSagas() {
  yield all([
    //takeEvery(APP.INIT, watchStudySaga),
    //takeEvery(APP.INIT, watchSignOutSaga),
    takeEvery(AUTH.SUCCESS, watchStudySaga),
    takeEvery(AUTH.SUCCESS, watchSignOutSaga),
    takeEvery(questionnairesAction.SUCCESS, formRoutingSaga),
  ]);
}
