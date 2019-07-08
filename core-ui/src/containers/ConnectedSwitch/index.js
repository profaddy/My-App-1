//-----------  Imports  -----------//

import { connect } from 'react-redux';

import ConnectedSwitch from './ConnectedSwitch';

//-----------  Redux Maps  -----------//

const mapState = state => ({
  location: state.router.location,
});

const mapDispatch = dispatch => ({});

//-----------  Exports  -----------//

export default connect(
  mapState,
  mapDispatch,
)(ConnectedSwitch);
