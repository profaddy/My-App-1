//-----------  Imports  -----------//

import Styled from './styles';

import React from 'react';
import ChooseQuestionnaires from '../../containers/ChooseQuestionnaires';
// import PropTypes from 'prop-types';

//-----------  Component  -----------//

class BatteryQuestionnairesRoute extends React.Component {
  //-----------  HTML Render  -----------//

  render() {
    // const { props, state } = this;

    return <ChooseQuestionnaires {...this.props} />;
  }
}

//-----------  Type Definitions  -----------//

BatteryQuestionnairesRoute.propTypes = {};

//-----------  Export  -----------//

export default BatteryQuestionnairesRoute;
