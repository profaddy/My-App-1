//-----------  Imports  -----------//

import { connect } from 'react-redux';
import { formValueSelector } from 'redux-form';

import MedicalConditionsQuestionnaire from './MedicalConditionsQuestionnaire';

import { form, hasPsych, hasNeuro } from './config';

//-----------  Redux Maps  -----------//

const mapState = state => ({
  hasPsych: 'yes' === formValueSelector(form)(state, hasPsych),
  hasNeuro: 'yes' === formValueSelector(form)(state, hasNeuro),
});

const mapDispatch = (dispatch, props) => ({});

//-----------  Exports  -----------//

export const name = form;

export default connect(
  mapState,
  mapDispatch,
)(MedicalConditionsQuestionnaire);
