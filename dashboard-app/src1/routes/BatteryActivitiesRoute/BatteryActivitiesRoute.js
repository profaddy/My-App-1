//-----------  Imports  -----------//

import React from 'react';
// import PropTypes from 'prop-types';
import PageWrapper from 'components/PageWrapper';

import ChooseActivities from 'containers/ChooseActivities';

//-----------  Component  -----------//

class BatteryActivitiesRoute extends React.Component {
  //-----------  HTML Render  -----------//

  render() {
    // const { props, state } = this;

    return <ChooseActivities {...this.props} />;
  }
}

//-----------  Type Definitions  -----------//

BatteryActivitiesRoute.propTypes = {};

//-----------  Export  -----------//

export default BatteryActivitiesRoute;
