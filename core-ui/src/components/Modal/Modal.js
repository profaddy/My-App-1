//-----------  Imports  -----------//

import Styled from './styles';

import React from 'react';
import PropTypes from 'prop-types';
import ReactModal from 'react-modal';

//-----------  Component  -----------//

class Modal extends React.Component {
  constructor(props) {
    super(props);

    this.bodyEl = document.getElementById(process.env.APP_ROOT);
  }

  //-----------  HTML Render  -----------//

  render() {
    const {
      label,
      children,
      preventClose,
      overlayStyles,
      contentStyles,
      ...props
    } = this.props;

    const style = {
      overlay: { ...Styled.ModalOverlay, ...overlayStyles },
      content: { ...Styled.ModalContent, ...contentStyles },
    };

    return (
      <ReactModal
        style={style}
        closeTimeoutMS={300}
        appElement={this.bodyEl}
        contentLabel={label || 'Modal'}
        shouldCloseOnOverlayClick={!preventClose}
        {...props}
      >
        <Styled.ModalBlock>
          {!preventClose && !!props.onRequestClose && (
            <Styled.CloseIcon onClick={props.onRequestClose}>
              ╳
            </Styled.CloseIcon>
          )}
          {children}
        </Styled.ModalBlock>
      </ReactModal>
    );
  }
}

//-----------  Type Definitions  -----------//

Modal.propTypes = {
  label: PropTypes.string,
  isOpen: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onAfterOpen: PropTypes.func,
  preventClose: PropTypes.bool,
  onRequestClose: PropTypes.func,
  contentStyles: PropTypes.object,
  overlayStyles: PropTypes.object,
};

//-----------  Export  -----------//

export default Modal;
