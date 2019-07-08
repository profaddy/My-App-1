//-----------  Imports  -----------//

import { calculateTotals } from './config';

import { connect } from 'react-redux';
import { getFormValues } from 'redux-form';

import TicsTest from './TicsTest';

//-----------  Redux Maps  -----------//

const mapState = (state, props) => {
  const values = getFormValues('TicsTest')(state);

  return {
    calculated: {
      total: calculateTotals(values),
    },
  };
};

const mapDispatch = (dispatch, props) => ({});

//-----------  Exports  -----------//

export default connect(
  mapState,
  mapDispatch,
)(TicsTest);
