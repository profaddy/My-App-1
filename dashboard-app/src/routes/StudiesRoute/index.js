//-----------  Imports  -----------//

import { connect } from 'react-redux';

import { reverseStudiesSelector } from 'models/studies/selectors';
import { studiesActions } from 'models/studies/actions';

import StudiesRoute from './StudiesRoute';

//-----------  Redux Maps  -----------//

const mapState = state => ({
  studies: reverseStudiesSelector(state),
});

const mapDispatch = dispatch => ({
  requestStudies: () => dispatch(studiesActions.request()),
});

//-----------  Exports  -----------//

export default connect(
  mapState,
  mapDispatch,
)(StudiesRoute);
