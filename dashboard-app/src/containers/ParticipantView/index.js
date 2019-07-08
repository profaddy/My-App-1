//-----------  Imports  -----------//

import { connect } from 'react-redux';
import { push } from 'connected-react-router';

import {
  errorSelector,
  isLoadingSelector,
  hasLoadedSelector,
  dataSelector,
  selectedParticipantSelector,
  currentEditParticipant,
} from 'models/participant/selector';
import {
  participantActions,
  participantsActions,
} from 'models/participant/action';

import Partipant from './ParticipantView';

//-----------  Redux Maps  -----------//

const mapState = state => ({
  error: errorSelector(state),
  data: dataSelector(state),
  isLoading: isLoadingSelector(state),
  hasLoaded: hasLoadedSelector(state),
  selectedParticipant: selectedParticipantSelector(state),
  count: state.participant.count || 0,
  isEditing: state.participant.isEditing,
  isAdding: state.participant.isAdding,
  currentEditParticipant: currentEditParticipant(state),
  isFileUploadOpen: state.participant.isFileUploadOpen,
  addParticipantsLoading: state.participant.addParticipantsLoading,
});

const mapDispatch = dispatch => ({
  requestParticipant: () => dispatch(participantActions.request()),
  requestAddParticipant: (values, props) => {
    return dispatch(
      participantActions.addParticipant({
        ...values,
        study_id: props.match.params.studyId,
      }),
    );
  },
  requestAddParticipants: (studyId, file) =>
    dispatch(participantsActions.addParticipants(studyId, file)),
  requestParticipants: (studyId, page, offset) =>
    dispatch(participantsActions.request({ studyId, page, offset })),
  selectParticipant: participant =>
    dispatch(participantActions.select(participant)),
  unselectParticipant: () => dispatch(participantActions.unselect()),
  deleteParticipant: (studyId, id) =>
    dispatch(participantActions.deleteParticipant(studyId, id)),
  editParticipant: (studyId, data) =>
    dispatch(participantActions.editParticipant(studyId, data)),
  startEditParticipant: id =>
    dispatch(participantActions.startEditParticipant(id)),
  startAddParticipant: () => dispatch(participantActions.startAddParticipant()),
  stopAddParticipant: () => dispatch(participantActions.stopAddParticipant()),
  stopEditParticipant: () => dispatch(participantActions.stopEditParticipant()),
  openFileUploadModal: () =>
    dispatch(participantsActions.openFileUploadModal()),
  closeFileUploadModal: () =>
    dispatch(participantsActions.closeFileUploadModal()),
  push: path => dispatch(push(path)),
});

//-----------  Exports  -----------//

export default connect(
  mapState,
  mapDispatch,
)(Partipant);
