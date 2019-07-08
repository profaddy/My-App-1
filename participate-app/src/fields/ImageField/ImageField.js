//-----------  Imports  -----------//

import Styled from './styles';

import React from 'react';
import PropTypes from 'prop-types';
import Webcam from 'react-webcam';

import Button from '@miro/core-ui/lib/components/Button';
import FieldWrapper from '@miro/core-ui/lib/forms/FieldWrapper';

//-----------  Definitions  -----------//

const videoConstraints = { facingMode: 'user' };

//-----------  Component  -----------//

class ImageField extends React.PureComponent {
  state = {
    showImage: false,
    imageSrc: null,
  };

  //-----------  Event Handlers  -----------//

  componentDidMount() {
    if (!window.safari) {
      if (navigator.userAgent.indexOf('Chrome')) {
        navigator.permissions
          .query({ name: 'camera', userVisibleOnly: true })
          .then(permissionObj => {
            if (permissionObj.state === 'denied') {
              const alertMessage = `Hamburger Menu > Settings > Show advanced settings-> Content Settings -> Camera`;
              alert(
                `you have disabled the camera permissions for this site, if that was done accidently you can enable it folloeing below steps :\n${alertMessage}`,
              );
            }
          })
          .catch(error => {
            console.error('Got error :', error);
          });
      }
    }
  }
  resetCamera = evt => {
    evt.preventDefault();
    this.setState({ showImage: false });
  };

  captureImage = evt => {
    evt.preventDefault();

    if (this.webcam && this.webcam.getScreenshot) {
      const imageSrc = this.webcam.getScreenshot();

      this.setState({ showImage: true, imageSrc });
      this.props.input.onChange(imageSrc);
    }
  };

  setRef = webcam => {
    this.webcam = webcam;
  };

  //-----------  HTML Render  -----------//

  render() {
    const {
      id,
      meta,
      label,
      sidebar,
      invalid,
      children,
      ...props
    } = this.props;
    const { imageSrc, showImage } = this.state;

    const Sidebar = sidebar;

    return (
      <Styled.ImageField isInvalid={invalid}>
        {children}

        <Styled.Disclaimer>
          <p>
            Your signature on this form means that you understand the
            information given to you in this form, you accept the provisions in
            the form and you agree to join the study. You will not give up any
            legal rights by signing this consent form.
          </p>
        </Styled.Disclaimer>

        <Styled.SideBySide>
          <Styled.Viewer>
            {!showImage ? (
              <Webcam
                audio={false}
                ref={this.setRef}
                screenshotFormat="image/jpeg"
                videoConstraints={videoConstraints}
              />
            ) : (
              <Styled.Image src={imageSrc} />
            )}
            <Styled.Background />
          </Styled.Viewer>
          <Styled.Sidebar>
            <Sidebar />
          </Styled.Sidebar>
        </Styled.SideBySide>

        <Styled.Actions>
          <Button
            text="RETAKE"
            onClick={this.resetCamera}
            disabled={!showImage}
            small
          />
          <Button
            text="TAKE"
            onClick={this.captureImage}
            disabled={showImage}
            small
          />
        </Styled.Actions>
      </Styled.ImageField>
    );
  }
}

//-----------  Type Definitions  -----------//

ImageField.propTypes = {
  meta: PropTypes.object.isRequired,
  input: PropTypes.object.isRequired,
  invalid: PropTypes.bool,
  children: PropTypes.node,
};

//-----------  Export  -----------//

export default FieldWrapper(ImageField);
