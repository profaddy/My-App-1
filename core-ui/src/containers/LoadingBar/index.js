//-----------  Imports  -----------//

import { connect } from 'react-redux';

import LoadingBar from './LoadingBar';

//-----------  Redux Maps  -----------//

const mapState = state => ({
  requests: state.requests.count,
  isError: state.requests.error,
});

const mapDispatch = dispatch => ({});

//-----------  Exports  -----------//

export default connect(
  mapState,
  mapDispatch,
)(LoadingBar);
