import React from 'react';
import ReactDropZone from 'react-dropzone';
import Styled from './style';
import FileIcon from 'assets/icons/file.svg';
import Button from '@miro/core-ui/lib/components/Button';
import get from 'lodash/get';

export default class FileUploader extends React.Component {
  state = {
    acceptedFile: null,
  };

  onDrop = acceptedFiles => {
    acceptedFiles && this.setState({ acceptedFile: acceptedFiles[0] });

    if (this.props.onChange) {
      this.props.onChange(acceptedFiles[0]);
    }
  };

  handleContinue = () => this.props.onFileSubmit(this.state.acceptedFile);

  render() {
    return (
      <Styled.Container>
        {!!this.props.header && (
          <Styled.Header>
            <Styled.Title>{get(this.props, ['header', 'title'])}</Styled.Title>
            <Styled.SubTitle>
              {get(this.props, ['header', 'subTitle'])}
            </Styled.SubTitle>
          </Styled.Header>
        )}
        <Styled.Body>
          <ReactDropZone
            onDrop={this.onDrop}
            style={{
              width: '100%',
              height: '200px',
              border: '1px dashed lightgray',
              borderRadius: 3,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              cursor: 'pointer',
            }}
            accept={this.props.accept}
          >
            <Styled.UploadZone>
              <Styled.RowDiv
                style={{ justifyContent: 'center', width: '100%' }}
              >
                <FileIcon />
                <Styled.ColumnDiv
                  style={{
                    marginLeft: 8,
                    alignItems: 'flex-start',
                    justifyContent: 'space-around',
                  }}
                >
                  <div>UPLOAD FILE</div>
                  <div style={{ color: '#989696' }}>
                    DRAG A FILE HERE or CLICK to{' '}
                    <Styled.BrowseSpan>Browse</Styled.BrowseSpan>
                  </div>
                </Styled.ColumnDiv>
              </Styled.RowDiv>
              {!!this.props.fileTypeInfo && (
                <Styled.RowDiv style={{ color: '#989696' }}>
                  Accepted File Type: {this.props.fileTypeInfo}
                </Styled.RowDiv>
              )}
            </Styled.UploadZone>
          </ReactDropZone>
          <Styled.Filename>{this.state.acceptedFile && this.state.acceptedFile.name}</Styled.Filename>
        </Styled.Body>
        {!!!this.props.hideButton && (
          <Button
            medium
            active
            style={{
              marginTop: 30,
              pointerEvents: this.props.isLoading ? 'none' : 'auto',
            }}
            onClick={this.handleContinue}
            {...!this.state.acceptedFile && { disabled: true }}
          >
            {this.props.isLoading
              ? this.props.uploadTxt || 'Uploading ...'
              : this.props.buttonTxt || 'upload'}
          </Button>
        )}
        <Styled.ErrorDiv>{this.props.error}</Styled.ErrorDiv>
      </Styled.Container>
    );
  }
}
