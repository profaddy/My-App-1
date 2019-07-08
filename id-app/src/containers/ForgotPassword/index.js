//-----------  Imports  -----------//

import { connect } from 'react-redux';

import ForgotPasswordForm from './ForgotPasswordForm';

import { forgotPasswordActions } from 'models/forgotPassword/actions';

//-----------  Redux Maps  -----------//

const mapState = state => ({});

const mapDispatch = dispatch => ({
  onSubmit: forgotPasswordActions.reset,
});

//-----------  Exports  -----------//

export default connect(
  mapState,
  mapDispatch,
)(ForgotPasswordForm);
