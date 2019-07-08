//-----------  Imports  -----------//

import { connect } from 'react-redux';

import { authActions } from 'models/auth/actions';
import { userSelector } from 'models/user/selectors';

import AccountHeader from './AccountHeader';

//-----------  Redux Maps  -----------//

const mapState = state => ({
  user: userSelector(state),
});

const mapDispatch = dispatch => ({
  signOut: () => dispatch(authActions.signOut()),
});

//-----------  Exports  -----------//

export default connect(
  mapState,
  mapDispatch,
)(AccountHeader);
