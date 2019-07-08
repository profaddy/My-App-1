//-----------  Imports  -----------//

import Styled from './styles';

import React from 'react';
import PropTypes from 'prop-types';

//-----------  Component  -----------//

const Avatar = ({ url, ranking, ...props }) => (
  <Styled.Avatar
    style={{ backgroundImage: `url(${url})` }}
    ranking={ranking}
    {...props}
  >
    <Styled.Badge ranking={ranking} />
  </Styled.Avatar>
);

//-----------  Type Definitions  -----------//

Avatar.propTypes = {
  url: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired,
};

//-----------  Export  -----------//

export default Avatar;
