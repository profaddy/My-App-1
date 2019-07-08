//-----------  Imports  -----------//

import { connect } from 'react-redux';

import SignupSuccess from './SignupSuccess';
import { resendVerificationEmailActions } from 'models/signup/actions';

//-----------  Redux Maps  -----------//

const mapState = state => ({});

const mapDispatch = dispatch => ({
  onSubmit: resendVerificationEmailActions.resendVerificationEmail,
});

//-----------  Exports  -----------//

export default connect(
  mapState,
  mapDispatch,
)(SignupSuccess);
