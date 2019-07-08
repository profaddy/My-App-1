//-----------  Imports  -----------//

import React from 'react';
import CreateBatteryForm from './CreateBatteryForm';

//-----------  Component  -----------//

class CreateBattery extends React.Component {

  //-----------  HTML Render  -----------//

  render() {
    const { ...props } = this.props;

    return <CreateBatteryForm {...props} />;
  }
}

//-----------  Type Definitions  -----------//

CreateBattery.propTypes = {};

//-----------  Export  -----------//

export default CreateBattery;
