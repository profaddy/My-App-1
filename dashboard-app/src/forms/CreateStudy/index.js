//-----------  Imports  -----------//

import { connect } from 'react-redux';

import { studyTypesSelector } from 'models/studyTypes/selectors';
import { studyTypesActions } from 'models/studyTypes/actions';
import { STUDIES } from 'models/studies/actions';

import CreateStudy from './CreateStudy';

//-----------  Redux Maps  -----------//

const mapState = state => ({
  studyTypes: studyTypesSelector(state),
});

const mapDispatch = dispatch => ({
  onSubmit: STUDIES.CREATE,
  requestStudyTypes: () => dispatch(studyTypesActions.request()),
});

//-----------  Exports  -----------//

export default connect(
  mapState,
  mapDispatch,
)(CreateStudy);
