//-----------  Imports  -----------//

import { connect } from 'react-redux';

import { appActions } from 'models/app/actions';
import { isLoggedInSelector } from 'models/app/selectors';

import AppWrapper from './AppWrapper';

//-----------  Redux Maps  -----------//

const mapState = (state, props) => ({
  isMounted: props.mounted || isLoggedInSelector(state),
});

const mapDispatch = dispatch => ({
  appInit: () => dispatch(appActions.init()),
});

//-----------  Exports  -----------//
export default connect(
  mapState,
  mapDispatch,
)(AppWrapper);
