//-----------  Imports  -----------//

import Styled from './styles';

import React from 'react';
import PropTypes from 'prop-types';

//-----------  Component  -----------//

const FieldError = ({ children, ...props }) => (
  <Styled.FieldError {...props}>
    <Styled.ArrowBottom {...props} />
    <Styled.Message {...props}>
      <p>{children || ''}</p>
    </Styled.Message>
    <Styled.ArrowTop {...props} />
  </Styled.FieldError>
);

//-----------  Type Definitions  -----------//

FieldError.propTypes = {
  warning: PropTypes.bool,
  children: PropTypes.node,
  isActive: PropTypes.bool.isRequired,
  isInvalid: PropTypes.bool.isRequired,
};

//-----------  Export  -----------//

export default FieldError;
