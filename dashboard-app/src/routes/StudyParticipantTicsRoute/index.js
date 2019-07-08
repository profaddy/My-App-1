//-----------  Imports  -----------//

import { connect } from 'react-redux';

import history from 'models/history';
import { participantDetailsSelector } from 'models/participant/selector';
import { participantActions } from 'models/participant/action';
import StudyParticipantTicsRoute from './StudyParticipantTicsRoute';

//-----------  Redux Maps  -----------//

const mapState = state => ({
  participantDetails: participantDetailsSelector(state),
});

const mapDispatch = (dispatch, props) => ({
  onSubmitSuccess: () => history.push(props.match.url.replace('/tics', '')),
  getParticipant: (studyId, id) =>
    dispatch(participantActions.getParticipant(studyId, id)),
});

//-----------  Exports  -----------//

export default connect(
  mapState,
  mapDispatch,
)(StudyParticipantTicsRoute);
