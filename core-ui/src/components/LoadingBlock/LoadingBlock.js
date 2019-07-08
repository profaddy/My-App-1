//-----------  Imports  -----------//

import Styled from './styles';

import React from 'react';
import PropTypes from 'prop-types';

import LoadingIcon from 'components/LoadingIcon';

//-----------  Component  -----------//

const LoadingBlock = ({ title, ...props }) => {
  return (
    <Styled.LoadingBlock>
      <LoadingIcon />
      <h6>{title || 'Loading...'}</h6>
    </Styled.LoadingBlock>
  );
};

//-----------  Type Definitions  -----------//

LoadingBlock.propTypes = {
  title: PropTypes.string,
};

//-----------  Export  -----------//

export default LoadingBlock;
