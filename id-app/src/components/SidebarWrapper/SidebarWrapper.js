//-----------  Imports  -----------//

import Styled from './styles';

import React from 'react';
import PropTypes from 'prop-types';

import Logo from '@miro/core-ui/lib/components/Logo';

//-----------  Component  -----------//

const SidebarWrapper = ({ children, ...props }) => (
  <Styled.SidebarWrapper {...props}>
    <Styled.PageSidebar>
      <Styled.CenterWrapper>
        <Styled.LogoWrapper>
          <Logo width={18} />
        </Styled.LogoWrapper>
      </Styled.CenterWrapper>
    </Styled.PageSidebar>

    <Styled.PageContent>{children}</Styled.PageContent>
  </Styled.SidebarWrapper>
);

//-----------  Type Definitions  -----------//

SidebarWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

//-----------  Export  -----------//

export default SidebarWrapper;
