//-----------  Imports  -----------//

import some from 'lodash/some';

import Styled from './styles';

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Logo from 'components/Logo';
import AppHeader from 'components/AppHeader';
import SidebarLink from 'components/SidebarLink';

import { sidebarShape } from 'models/sidebar/helpers';

//-----------  Component  -----------//

const AppSidebar = ({ links, pathname, ...props }) => (
  <Styled.AppSidebar>
    <Styled.SidebarWrapper>
      <AppHeader>
        <Link to="/">
          <Logo width={6} />
        </Link>
      </AppHeader>

      <Styled.ContentWrapper>
        {links.map((data, index) => (
          <SidebarLink
            key={index}
            data={data}
            pathname={pathname}
            hasIcons={some(links, 'icon')}
          />
        ))}
      </Styled.ContentWrapper>
    </Styled.SidebarWrapper>
  </Styled.AppSidebar>
);

//-----------  Type Definitions  -----------//

AppSidebar.propTypes = {
  links: PropTypes.arrayOf(PropTypes.shape(sidebarShape)).isRequired,
  pathname: PropTypes.string.isRequired,
};

//-----------  Export  -----------//

export default AppSidebar;
