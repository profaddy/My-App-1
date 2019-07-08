//-----------  Imports  -----------//

import Styled from './styles';

import React from 'react';
import PropTypes from 'prop-types';

//-----------  Component  -----------//

const AuthTitle = ({ title, placeholder }) => (
  <Styled.AuthTitle>
    <h3>{title}</h3>
    <p>{placeholder}</p>
  </Styled.AuthTitle>
);

//-----------  Type Definitions  -----------//

AuthTitle.propTypes = {
  title: PropTypes.string,
  placeholder: PropTypes.string,
};

//-----------  Export  -----------//

export default AuthTitle;
