//-----------  Imports  -----------//

import { connect } from 'react-redux';

import EmailVerification from './EmailVerification';

import { emailverificationActions } from '../../models/emailverification/actions';
import {
  emailverificationSelector,
  emailverificationErrorSelector,
} from '../../models/emailverification/selectors';

//-----------  Redux Maps  -----------//

const mapState = state => ({
  data: emailverificationSelector(state),
  error: emailverificationErrorSelector(state),
});

const mapDispatch = dispatch => ({
  verify: token => dispatch(emailverificationActions.request(token)),
});

//-----------  Exports  -----------//

export default connect(
  mapState,
  mapDispatch,
)(EmailVerification);
