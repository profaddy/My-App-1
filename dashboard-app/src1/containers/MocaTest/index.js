//-----------  Imports  -----------//

import get from 'lodash/get';

import { calculateTotals } from './config';

import { connect } from 'react-redux';
import { getFormValues } from 'redux-form';

import MocaTest from './MocaTest';

//-----------  Redux Maps  -----------//

const mapState = (state, props) => {
  const values = getFormValues('MocaTest')(state);

  return {
    initialValues: { immediate_memory: '0', ...props.initialValues },
    calculated: {
      total: calculateTotals(values),
      isBlind: !!+get(values, 'is_blind', '0'),
    },
  };
};

const mapDispatch = (dispatch, props) => ({});

//-----------  Exports  -----------//

export default connect(
  mapState,
  mapDispatch,
)(MocaTest);
