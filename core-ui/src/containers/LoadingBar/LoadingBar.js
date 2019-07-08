//-----------  Imports  -----------//

import Styled from './styles';

import React from 'react';
import PropTypes from 'prop-types';

//-----------  Component  -----------//

const LoadingBar = ({ requests, isError, ...props }) => {
  return (
    <Styled.LoadingBar>
      <Styled.Progress complete={requests === 0 || isError} error={isError} />
    </Styled.LoadingBar>
  );
};

//-----------  Type Definitions  -----------//

LoadingBar.propTypes = {
  isError: PropTypes.bool,
  requests: PropTypes.number.isRequired,
};

//-----------  Export  -----------//

export default LoadingBar;
