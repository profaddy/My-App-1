//-----------  Imports  -----------//

import { connect } from 'react-redux';

import { isLoggedInSelector } from 'models/app/selectors';

import StaticOverlay from './StaticOverlay';

//-----------  Redux Maps  -----------//

const mapState = state => ({
  isLoggedIn: isLoggedInSelector(state),
});

const mapDispatch = dispatch => ({});

//-----------  Exports  -----------//

export default connect(
  mapState,
  mapDispatch,
)(StaticOverlay);
