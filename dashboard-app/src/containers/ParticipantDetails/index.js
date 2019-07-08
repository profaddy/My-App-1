//-----------  Imports  -----------//

import { connect } from 'react-redux';

import ParticipantDetails from './ParticipantDetails';
import { participantActions } from 'models/participant/action';
import { participantDetailsSelector } from 'models/participant/selector';

//-----------  Redux Maps  -----------//

const mapState = state => ({
  participantDetails: participantDetailsSelector(state),
  isEditing: state.participant.isEditing,
  reviewedEligibility: state.participant.reviewedEligibility,
  drugTestModal: state.participant.drugTestModal,
});

const mapDispatch = dispatch => ({
  getParticipant: (studyId, id) =>
    dispatch(participantActions.getParticipant(studyId, id)),
  startEditParticipant: data =>
    dispatch(participantActions.startEditParticipant(data)),
  stopEditParticipant: () => dispatch(participantActions.stopEditParticipant()),
  editParticipant: (studyId, data, successAction) =>
    dispatch(participantActions.editParticipant(studyId, data, successAction)),
  deleteParticipant: (studyId, id, successAction) =>
    dispatch(participantActions.deleteParticipant(studyId, id, successAction)),
  stopReviewedEligibility: () =>
    dispatch(participantActions.stopReviewedEligibility()),
  startReviewedEligibility: () =>
    dispatch(participantActions.startReviewedEligibility()),
  requestReviewedEligibility: values =>
    dispatch(participantActions.requestReviewedEligibility(values)),
  stopDrugTest: () => dispatch(participantActions.stopDrugTest()),
  startDrugTest: () => dispatch(participantActions.startDrugTest()),
  requestDrugTest: values =>
    dispatch(participantActions.requestDrugTest(values)),
});

//-----------  Exports  -----------//

export default connect(
  mapState,
  mapDispatch,
)(ParticipantDetails);
