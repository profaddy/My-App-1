//-----------  Imports  -----------//

// import Styled from './styles';

import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

//-----------  Component  -----------//

class BatteryIndexRoute extends React.Component {
  //-----------  HTML Render  -----------//

  render() {
    const { match } = this.props;

    return <Redirect to={`${match.url}/activities`} />;
  }
}

//-----------  Type Definitions  -----------//

BatteryIndexRoute.propTypes = {
  match: PropTypes.object.isRequired,
};

//-----------  Export  -----------//

export default BatteryIndexRoute;
