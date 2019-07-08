//-----------  Imports  -----------//

import get from 'lodash/get';

import BasePortal from './BasePortal';

import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { withTheme } from 'styled-components';

import DelayedUmmount from 'components/DelayedUnmount';
import { loadDelay } from 'utilities/constants';

//-----------  Component  -----------//

class StaticOverlay extends React.Component {
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
    const { theme, isLoggedIn, ...props } = this.props;

    return (
      this.authEl &&
      ReactDOM.createPortal(
        <DelayedUmmount delay={loadDelay} mounted={!isLoggedIn}>
          <BasePortal
            theme={get(theme, 'mode', 'light')}
            visible={!isLoggedIn}
            {...props}
          />
        </DelayedUmmount>,
        this.authEl,
      )
    );
  }
}

//-----------  Type Definitions  -----------//

StaticOverlay.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
};

//-----------  Export  -----------//

export default withTheme(StaticOverlay);
