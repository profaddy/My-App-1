//-----------  Imports  -----------//

import { connect } from 'react-redux';
import React from 'react';
import ReviewConsent from './ReviewConsent';
import { participantDetailsSelector } from 'models/participant/selector';
import { participantActions } from 'models/participant/action';

//-----------  Redux Maps  -----------//

const mapState = state => {
  const participantDetails = participantDetailsSelector(state);
  const authorization_participant =
    participantDetails && participantDetails.authorization_participant;
  const initialValues = authorization_participant
    ? {
        id: participantDetails.id,
        pi_verifyname: authorization_participant.pi_verifyname,
        pi_verifyphoto: authorization_participant.pi_verifyphoto,
        pi_verifysignature: authorization_participant.pi_verifysignature,
        // representative_signature:
        //   authorization_participant.representative_signature,
        pi_verifydob: authorization_participant.pi_verifydob,
      }
    : {};
  return {
    participantDetails,
    initialValues,
  };
};

const mapDispatch = dispatch => ({
  getParticipant: (studyId, id) =>
    dispatch(participantActions.getParticipant(studyId, id)),
  verifyParticipant: values =>
    dispatch(participantActions.verifyParticipant(values)),
});

const handleSubmit = (values, props) =>
  props.verifyParticipant({ ...values, study_id: props.match.params.studyId });

const ReviewConsentForm = props => (
  <ReviewConsent onSubmit={values => handleSubmit(values, props)} {...props} />
);

export default connect(
  mapState,
  mapDispatch,
)(ReviewConsentForm);
