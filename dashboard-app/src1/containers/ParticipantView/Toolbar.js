import React from 'react';
import Styled from './style';
import UploadButton from 'components/Upload';
import Button from '@miro/core-ui/lib/components/Button';
import Modal from '@miro/core-ui/lib/components/Modal';
// import Search from 'assets/icons/search.svg';
import ParticipantForm from 'containers/ParticipantForm';
import FileUploader from 'components/FileUploader';

export const transformValues = values => ({
  ...values,
  phone_number: ('' + values.phone_number).replace(/\D/g, ''),
  mob: ('' + values.mob).replace(/\D/g, ''),
});

export default class Toolbar extends React.Component {
  handleParticipantFormSubmit = (values, dispatch, props) => {
    const { isEditing, onParticpantFormSubmit, editParticipant } = this.props;
    isEditing
      ? editParticipant(
          this.props.match.params.studyId,
          transformValues(values),
        )
      : onParticpantFormSubmit(transformValues(values), props);
  };

  render() {
    const { selectedFilter } = this.props;
    const keepFormOpen = this.props.isAdding || this.props.isEditing;
    return (
      <Styled.Toolbar>
        <h3>{selectedFilter && selectedFilter.label.toUpperCase()}</h3>
        <Styled.ToolbarRight>
          <Styled.SearchAndUploadDiv>
            {/* <Styled.SearchBoxCotainer>
              <Styled.Input type="text" placeholder="Search" />
              <span>
                <Search />
              </span>
            </Styled.SearchBoxCotainer> */}
            <Styled.UploadContainer onClick={this.props.openFileUploadModal}>
              <UploadButton />
            </Styled.UploadContainer>
          </Styled.SearchAndUploadDiv>
          <Styled.VerticalDivider />
          <Button small active onClick={this.props.startAddParticipant}>
            Add Participant
          </Button>
        </Styled.ToolbarRight>
        <Modal
          isOpen={keepFormOpen}
          onRequestClose={this.props.stopAddParticipant}
        >
          <ParticipantForm
            onSubmit={this.handleParticipantFormSubmit}
            {...this.props}
            initialValues={this.props.currentEditParticipant}
          />
        </Modal>
        <Modal
          isOpen={this.props.isFileUploadOpen}
          onRequestClose={this.props.closeFileUploadModal}
        >
          <FileUploader
            onFileSubmit={file =>
              this.props.requestAddParticipants(
                this.props.match.params.studyId,
                file,
              )
            }
            accept="text/csv"
            fileTypeInfo=".csv"
            header={{
              title: 'IMPORT PARTICIPANT INFO FROM A FILE',
              subTitle: 'Import data from a .csv files',
            }}
            buttonTxt="continue"
            uploadTxt="Uploading CSV..."
            isLoading={this.props.addParticipantsLoading}
            {...this.props}
          />
        </Modal>
      </Styled.Toolbar>
    );
  }
}
