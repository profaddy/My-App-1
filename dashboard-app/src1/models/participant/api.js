import api from '@miro/core-ui/lib/utilities/api';
import urlCreator from 'utilities/api.creator';

export const requestParticipants = async (studyId, page, offset) => {
  return api.get(
    urlCreator(
      `/participants/?study_id=${studyId}&page=${page}&offset=${offset}`,
    ),
  );
};

export const requestAddParticipant = async data => {
  return api.post(urlCreator(`/participants/`), data);
};

export const requestDeleteParticipant = async (studyId, id) => {
  return api.delete(urlCreator(`/participants/${id}/?study_id=${studyId}`));
};

export const requestEditParticipant = async (studyId, id, data) => {
  return api.put(urlCreator(`/participants/${id}/?study_id=${studyId}`), data);
};

export const requestAddParticipants = async file => {
  const formData = new FormData();
  formData.append('file', file);
  return api.post(urlCreator(`/participants/add_list/`), formData, {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  });
};

export const requestParticipant = async (studyId, id) => {
  return api.get(urlCreator(`/participants/${id}/?study_id=${studyId}`));
};

export const verifyParticipant = async ({ id, ...data }) => {
  return api.put(
    urlCreator(`/questionnaire/authorization/${id}/update/`),
    data,
  );
};

export const finalReview = async ({
  representative_signature,
  participantId,
  studyId,
}) =>
  api.post(
    urlCreator(`/participant/${participantId}/sign_off/?study_id=${studyId}`),
    {
      representative_signature,
    },
  );

export const drugTest = async ({ participantId, studyId, ...data }) =>
  api.put(
    urlCreator(`/participants/${participantId}/drug_test/?study_id=${studyId}`),
    data,
  );

export const requestRegistrationCheck = ({ email }) => {
  return api.get(`/rest-auth/email_exists/`, { params: { email } });
};
