//-----------  Imports  -----------//

import { connect } from 'react-redux';

import {
  signUpActions,
  licensingBoardActions,
  practiceAreaActions,
  institutionActions,
} from 'models/signup/actions';

import {
  registrationCheckSelector,
  licensingBoardsSelector,
  practiceAreasSelector,
  institutionsSelector,
} from 'models/signup/selectors';

import { formValueSelector, destroy } from 'redux-form';

import SignUpForm from './SignUpForm';
import warnAboutUnsavedForm from './warn';

//-----------  Redux Maps  -----------//

const selector = formValueSelector('signup');

const mapState = state => ({
  // registrationCheck: registrationCheckSelector(state),
  licensingBoards: licensingBoardsSelector(state),
  selectedPracticeArea: selector(state, 'practice_area_id'),
  selectedInstitution: selector(state, 'institution_id'),
  selectedLicensingBoard: selector(state, 'licensing_board_id'),
  practiceAreas: practiceAreasSelector(state),
  institutions: institutionsSelector(state),
});

const mapDispatch = dispatch => ({
  onSubmit: signUpActions.signUp,
  destroyForm: () => dispatch(destroy('signup')),
  // requestRegistrationCheck: email => dispatch(signUpActions.requestRegistrationCheck(email)),
  requestLicensingBoards: () => dispatch(licensingBoardActions.request()),
  requestPracticeAreas: () => dispatch(practiceAreaActions.request()),
  requestInstitutions: () => dispatch(institutionActions.request()),
});

//-----------  Exports  -----------//

// export default connect(
//   mapState,
//   mapDispatch,
// )(SignUpForm);

export default warnAboutUnsavedForm(
  connect(
    mapState,
    mapDispatch,
  )(SignUpForm),
  'signup',
);
