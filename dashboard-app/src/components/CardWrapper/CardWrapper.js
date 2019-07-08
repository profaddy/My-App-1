//-----------  Imports  -----------//

import Styled from './styles';

import React from 'react';
import PropTypes from 'prop-types';

//-----------  Component  -----------//

const CardWrapper = ({ children }) => (
  <Styled.CardWrapper>
    {children}
  </Styled.CardWrapper>
);

//-----------  Type Definitions  -----------//

CardWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

//-----------  Export  -----------//

export default CardWrapper;
