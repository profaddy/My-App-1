import React from 'react';
import Styled from './styles';
import Modal from '@miro/core-ui/lib/components/Modal';
import ParticipantForm from 'containers/ParticipantForm';
import { transformValues } from 'containers/ParticipantView/Toolbar';
import { birthMonthFormatter } from 'utilities/formatters';
import DeleteIcon from 'assets/icons/delete.svg';
import EditIcon from 'assets/icons/edit.svg';

export default props => {
  const initialValues = {
    ...props.participantDetails,
    mob: birthMonthFormatter(props.participantDetails.mob),
  };
  return (
    <Styled.ToolbarLeft>
      <Styled.ToolbarEdit>
        <EditIcon
          style={{ cursor: 'pointer' }}
          onClick={() => props.startEditParticipant(props.participantDetails)}
        />
      </Styled.ToolbarEdit>
      <Styled.ToolbarDelete>
        <DeleteIcon
          style={{ cursor: 'pointer' }}
          onClick={() =>
            props.deleteParticipant(
              props.match.params.studyId,
              props.participantDetails.id,
              'GO_TO_DASHBOARD',
            )
          }
        />
      </Styled.ToolbarDelete>
      {/* <Styled.ToolbarSome>Some</Styled.Toolbar> */}
      <Modal
        isOpen={props.isEditing}
        onRequestClose={props.stopEditParticipant}
      >
        <ParticipantForm
          onSubmit={values =>
            props.editParticipant(
              props.match.params.studyId,
              transformValues(values),
              'getDetails',
            )
          }
          initialValues={initialValues}
          isEditing={props.isEditing}
        />
      </Modal>
    </Styled.ToolbarLeft>
  );
};
