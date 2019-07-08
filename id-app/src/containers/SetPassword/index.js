//-----------  Imports  -----------//

import get from 'lodash/get';
import { connect } from 'react-redux';
import SetPassword from './SetPassword';
import { setPasswordActions } from 'models/setPassword/actions';
import { verifyTokenActions } from 'models/verifyToken/actions';
import { verifyTokenSelector } from 'models/verifyToken/selectors';

//-----------  Redux Maps  -----------//
const mapState = (state, props) => ({
  isVerified: verifyTokenSelector(state),
  initialValues: {
    uid: get(props, 'match.params.uid'),
    token: get(props, 'match.params.token'),
  },
});

const mapDispatch = dispatch => ({
  onSubmit: setPasswordActions.request,
  onVerify: (uid, token) =>
    dispatch(verifyTokenActions.request({ uid, token })),
});

//-----------  Exports  -----------//

export default connect(
  mapState,
  mapDispatch,
)(SetPassword);
