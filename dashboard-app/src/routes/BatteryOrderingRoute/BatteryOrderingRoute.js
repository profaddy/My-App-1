//-----------  Imports  -----------//

import Styled from './styles';

import React from 'react';
import BatteryOrdering from 'containers/BatteryOrdering';

// import PropTypes from 'prop-types';

//-----------  Component  -----------//

class BatteryOrderingRoute extends React.Component {
  //-----------  HTML Render  -----------//

  render() {
    // const { props, state } = this;

    return <BatteryOrdering {...this.props} />;
  }
}

//-----------  Type Definitions  -----------//

BatteryOrderingRoute.propTypes = {};

//-----------  Export  -----------//

export default BatteryOrderingRoute;
