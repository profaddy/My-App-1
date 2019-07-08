//-----------  Imports  -----------//

import { connect } from 'react-redux';

import { batteriesSelector } from 'models/batteries/selectors';
import { batteriesActions } from 'models/batteries/actions';

import BatteriesRoute from './BatteriesRoute';

//-----------  Redux Maps  -----------//

const mapState = state => ({
  batteries: batteriesSelector(state),
});

const mapDispatch = dispatch => ({
  requestBatteries: () => dispatch(batteriesActions.request()),
});

//-----------  Exports  -----------//

export default connect(
  mapState,
  mapDispatch,
)(BatteriesRoute);
