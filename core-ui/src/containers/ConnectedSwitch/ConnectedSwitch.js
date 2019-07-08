//-----------  Imports  -----------//

import React from 'react';
import PropTypes from 'prop-types';
import { Switch } from 'react-router-dom';

//-----------  Component  -----------//

const ConnectedSwitch = ({ children, ...props }) => (
  <Switch {...props}>{children}</Switch>
);

//-----------  Type Definitions  -----------//

ConnectedSwitch.propTypes = {
  location: PropTypes.any.isRequired,
  children: PropTypes.node.isRequired,
};

//-----------  Export  -----------//

export default ConnectedSwitch;
