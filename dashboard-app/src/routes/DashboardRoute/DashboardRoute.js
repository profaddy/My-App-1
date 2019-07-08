//-----------  Imports  -----------//

// import Styled from './styles';

import React from 'react';
// import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

//-----------  Component  -----------//

class DashboardRoute extends React.Component {
  //-----------  HTML Render  -----------//

  render() {
    // const { props, state } = this;

    return <Redirect to="/studies" />;
  }
}

//-----------  Type Definitions  -----------//

DashboardRoute.propTypes = {};

//-----------  Export  -----------//

export default DashboardRoute;
