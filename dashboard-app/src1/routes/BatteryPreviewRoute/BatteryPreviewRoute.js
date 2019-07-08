//-----------  Imports  -----------//

import Styled from './styles';

import React from 'react';
// import PropTypes from 'prop-types';
import BatteryPreview from 'containers/BatteryPreview';

//-----------  Component  -----------//

class BatteryPreviewRoute extends React.Component {
  //-----------  HTML Render  -----------//

  render() {
    // const { props, state } = this;

    return <BatteryPreview {...this.props} />;
  }
}

//-----------  Type Definitions  -----------//

BatteryPreviewRoute.propTypes = {};

//-----------  Export  -----------//

export default BatteryPreviewRoute;
