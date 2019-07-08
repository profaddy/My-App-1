//-----------  Imports  -----------//

import get from 'lodash/get';

import Styled from './styles';

import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { withTheme } from 'styled-components';

import EulaForm from 'forms/EulaForm';
import StaticBase from 'components/StaticBase';
import ErrorModal from 'components/ErrorModal';
import DelayedUmmount from '@miro/core-ui/lib/components/DelayedUnmount';
import Modal from '@miro/core-ui/lib/components/Modal';

import { contentStyles, overlayStyles } from 'utilities/modal';
import { modalProps } from 'models/routing/helpers';

//-----------  Component  -----------//

class WelcomeScreen extends React.PureComponent {
  constructor(props) {
    super(props);

    this.authEl = document.getElementById(`${process.env.APP_ROOT}-auth`);
    this.staticEl = document.getElementById(`${process.env.APP_ROOT}-static`);
    this.cleanNode();
  }

  //-----------  Helpers  -----------//

  cleanNode = () => {
    if (this.staticEl) this.staticEl.parentNode.removeChild(this.staticEl);
  };

  //-----------  HTML Render  -----------//

  render() {
    const {
      theme,
      error,
      onExit,
      hasStudy,
      hasEula,
      onEulaSubmit,
      onEmailSubmit,
      isError,
      ...props
    } = this.props;

    return (
      this.authEl &&
      ReactDOM.createPortal(
        <StaticBase
          theme={get(theme, 'mode', 'dark')}
          hasEula={hasEula}
          isError={isError}
          {...props}
        >
          {hasStudy ? (
            <DelayedUmmount mounted={!props.hasEula}>
              <EulaForm onExit={onExit} onSubmit={onEulaSubmit} />
            </DelayedUmmount>
          ) : (
            <Modal
              label="Welcome to Miro"
              isOpen={
                props.hasUserLoaded &&
                props.hasStudyLoaded &&
                !hasStudy &&
                isError
              }
              contentStyles={contentStyles}
              overlayStyles={overlayStyles}
            >
              <ErrorModal error={error} {...modalProps} />
            </Modal>
          )}
        </StaticBase>,
        this.authEl,
      )
    );
  }
}

//-----------  Type Definitions  -----------//

WelcomeScreen.propTypes = {
  error: PropTypes.any,
  hasEula: PropTypes.bool,
  hasStudy: PropTypes.bool.isRequired,
  hasUserLoaded: PropTypes.bool.isRequired,
  hasStudyLoaded: PropTypes.bool.isRequired,
  onExit: PropTypes.func.isRequired,
  onEulaSubmit: PropTypes.func.isRequired,
  onEmailSubmit: PropTypes.func.isRequired,
};

//-----------  Export  -----------//

export default withTheme(WelcomeScreen);
