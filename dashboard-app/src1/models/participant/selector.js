//-----------  Imports  -----------//

import { createSelector } from 'reselect';

import { birthMonthFormatter } from 'utilities/formatters';

//-----------  Inputs  -----------//

export const dataSelector = ({ participant }) => participant.participants || [];
export const errorSelector = ({ participant }) => participant.error;
export const isLoadingSelector = ({ participant }) => participant.isLoading;
export const hasLoadedSelector = ({ participant }) => participant.hasLoaded;
export const isEditingSelector = ({ participant }) => participant.isEditing;
export const selectedParticipantSelector = ({ participant }) =>
  participant.selectedParticipants;
export const participantDetailsSelector = ({ participant }) =>
  participant.participantDetails;
export const currentEditParticipantSelector = ({ participant }) =>
  participant.currentEditParticipant;

//-----------  Selectors  -----------//

export const currentEditParticipant = createSelector(
  [isEditingSelector, currentEditParticipantSelector],
  currentEditFunc,
);
export const participantIdSelector = createSelector(
  [participantDetailsSelector],
  participantIdFunc,
);

//-----------  Functions  -----------//

export function currentEditFunc(isEditing, currentEditParticipant) {
  const currentParticipant =
    isEditing && currentEditParticipant ? currentEditParticipant : {};

  if (currentParticipant && currentParticipant.mob)
    currentParticipant.mob = birthMonthFormatter(currentParticipant.mob);

  return currentParticipant;
}

export function participantIdFunc(participantDetails) {
  return participantDetails.id;
}
