//-----------  Imports  -----------//

import { connect } from 'react-redux';

import {
  errorSelector,
  hasLoadedSelector as hasUserLoadedSelector,
} from 'models/user/selectors';
import {
  hasStudySelector,
  hasLoadedSelector as hasStudyLoadedSelector,
} from 'models/study/selectors';
import {
  questionnaireSelector,
  hasEulaSelector,
} from 'models/questionnaires/selectors';

import { userActions } from 'models/user/actions';
import { questionnairesAction } from 'models/questionnaires/actions';
import { modalsActions } from 'models/modals/actions';
import { isErrorSelector } from 'models/user/selectors';

import WelcomeScreen from './WelcomeScreen';

import { name } from 'forms/EulaForm';

//-----------  Redux Maps  -----------//

const mapState = state => ({
  error: errorSelector(state),
  hasEula: hasEulaSelector(state),
  hasStudy: hasStudySelector(state),
  hasUserLoaded: hasUserLoadedSelector(state),
  hasStudyLoaded: hasStudyLoadedSelector(state),
  isError: isErrorSelector(state),
});

const mapDispatch = dispatch => ({
  onExit: () =>
    dispatch(modalsActions.show('EULADISAGREE', {}, { preventClose: true })),
  onEulaSubmit: questionnairesAction,
  onEmailSubmit: data => dispatch(userActions.update(data)),
});

//-----------  Exports  -----------//

export default connect(
  mapState,
  mapDispatch,
)(WelcomeScreen);
