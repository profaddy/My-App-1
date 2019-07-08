//-----------  Imports  -----------//

import { connect } from 'react-redux';

import { BATTERIES } from 'models/batteries/actions';

import CreateBattery from './CreateBattery';

//-----------  Redux Maps  -----------//

const mapState = state => ({});

const mapDispatch = dispatch => ({
  onSubmit: BATTERIES.CREATE,
});

//-----------  Exports  -----------//

export default connect(
  mapState,
  mapDispatch,
)(CreateBattery);
