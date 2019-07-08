//-----------  Imports  -----------//

import { connect } from 'react-redux';

import { authActions } from 'models/auth/actions';

import SignInForm from './SignInForm';

import { verifiedEmailSelector } from 'models/emailverification/selectors';

//-----------  Redux Maps  -----------//

const mapState = state => ({
  initialValues: { email: verifiedEmailSelector(state) },
});

const mapDispatch = dispatch => ({
  onSubmit: authActions.signIn,
});

//-----------  Exports  -----------//

export default connect(
  mapState,
  mapDispatch,
)(SignInForm);
