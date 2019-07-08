//-----------  Imports  -----------//

import Styled from './styles';

import React from 'react';
import PropTypes from 'prop-types';

//-----------  Component  -----------//

const AppHeader = ({ children, ...props }) => {
  return <Styled.AppHeader>{children}</Styled.AppHeader>;
};

//-----------  Type Definitions  -----------//

AppHeader.propTypes = {
  children: PropTypes.node.isRequired,
};

//-----------  Export  -----------//

export default AppHeader;
