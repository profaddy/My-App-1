//-----------  Imports  -----------//

import Styled from './styles';

import React from 'react';
// import PropTypes from 'prop-types';

import LoadingIcon from 'components/LoadingIcon';

//-----------  Component  -----------//

const RouteLoader = props => {
  return (
    <Styled.RouteLoader>
      <Styled.Center>
        <LoadingIcon />
        Loading...
      </Styled.Center>
    </Styled.RouteLoader>
  );
};

//-----------  Type Definitions  -----------//

RouteLoader.propTypes = {};

//-----------  Export  -----------//

export default RouteLoader;
