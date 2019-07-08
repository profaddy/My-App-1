//-----------  Imports  -----------//

import Styled from './styles';

import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

//-----------  Component  -----------//

const TabLinks = ({ tabs }) => (
  <Styled.TabLinks>
    {tabs.map(({ path, title }) => (
      <NavLink to={path} key={path}>
        {title}
      </NavLink>
    ))}
  </Styled.TabLinks>
);

//-----------  Type Definitions  -----------//

TabLinks.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      path: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

//-----------  Export  -----------//

export default TabLinks;
