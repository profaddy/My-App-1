import {
  PARTICIPANT,
  PARTICIPANTS,
  ADD_PARTICIPANT,
  ADD_PARTICIPANTS,
  EDIT_PARTICIPANT,
  FILE_UPLOAD_MODAL,
  GET_PARTICIPANT,
  DELETE_PARTICIPANT,
  CLOSE_DELETE_MODAL,
  REVIEWED_ELIGIBILITY,
  DRUG_TEST,
} from './action';

const defaultState = {
  participants: [],
  isLoading: false,
  error: null,
  selectedParticipants: [],
  isFormSubmitSuccess: false,
  isFileUploadOpen: false,
  isEditing: false,
  isAdding: false,
  addParticipantsLoading: false,
  participantDetails: { isLoading: false, error: false, hasData: false },
  currentEditParticipant: null,
  openDeleteConfirmModal: false,
  reviewedEligibility: false,
  drugTestModal: false,
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case PARTICIPANTS.REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case PARTICIPANTS.SUCCESS:
      return {
        ...state,
        participants: action.payload.results,
        count: action.payload.count,
        next: action.payload.next,
        previous: action.payload.previous,
        isLoading: false,
      };
    case PARTICIPANTS.ERROR:
      return {
        ...state,
        participants: [],
        isLoading: false,
        error: action.payload.error,
      };
    case PARTICIPANT.SELECTED:
      return {
        ...state,
        selectedParticipants: action.payload,
      };
    case PARTICIPANT.UNSELECTED:
      return {
        ...state,
        selectedParticipants: null,
      };
    case ADD_PARTICIPANT.START:
      return {
        ...state,
        isAdding: true,
        currentEditParticipant: null,
      };
    case EDIT_PARTICIPANT.START:
      return {
        ...state,
        currentEditParticipant: action.payload.data,
        isEditing: true,
      };
    case ADD_PARTICIPANT.SUCCESS:
    case EDIT_PARTICIPANT.SUCCESS:
    case EDIT_PARTICIPANT.STOP:
    case ADD_PARTICIPANT.STOP:
      return {
        ...state,
        isAdding: false,
        isEditing: false,
      };
    case FILE_UPLOAD_MODAL.OPEN:
      return {
        ...state,
        isFileUploadOpen: true,
      };
    case FILE_UPLOAD_MODAL.CLOSE:
      return {
        ...state,
        addParticipantsLoading: false,
        isFileUploadOpen: false,
      };
    case ADD_PARTICIPANTS.REQUEST:
      return {
        ...state,
        addParticipantsLoading: true,
      };
    case ADD_PARTICIPANTS.FAILURE:
      return {
        ...state,
        addParticipantsLoading: false,
      };
    case GET_PARTICIPANT.REQUEST:
      return {
        ...state,
        participantDetails: { isLoading: true, hasData: false, error: false },
      };
    case GET_PARTICIPANT.FAILURE:
      return {
        ...state,
        participantDetails: { isLoading: false, error: true, hasData: false },
      };
    case GET_PARTICIPANT.SUCCESS:
      return {
        ...state,
        participantDetails: {
          ...action.payload,
          isLoading: false,
          error: false,
          hasData: true,
        },
      };
    case DELETE_PARTICIPANT.REQUEST:
      return { ...state, openDeleteConfirmModal: true };
    case DELETE_PARTICIPANT.SUCCESS:
    case CLOSE_DELETE_MODAL.REQUEST:
      return {
        ...state,
        openDeleteConfirmModal: false,
      };
    case REVIEWED_ELIGIBILITY.START:
      return {
        ...state,
        reviewedEligibility: true,
      };
    case REVIEWED_ELIGIBILITY.STOP:
      return {
        ...state,
        reviewedEligibility: false,
      };

    case DRUG_TEST.START:
      return {
        ...state,
        drugTestModal: true,
      };
    case DRUG_TEST.SUCCESS:
      return {
        ...state,
        participantDetails: {
          ...state.participantDetails,
          drug_test_result: { ...action.payload.drug_test_result },
        },
      };
    case DRUG_TEST.STOP:
      return {
        ...state,
        drugTestModal: false,
      };
    // -- to reset form submit success flag when form is destroyed
    case '@@redux-form/DESTROY': {
      if (action.meta.form.includes('participant')) {
        return {
          ...state,
          isFormSubmitSuccess: false,
        };
      }
      return state;
    }
    default:
      return state;
  }
};
