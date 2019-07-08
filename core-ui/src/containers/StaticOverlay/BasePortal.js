//-----------  Imports  -----------//

import Styled from './styles';

import React from 'react';
import PropTypes from 'prop-types';

import Logo from 'components/Logo';

//-----------  Component  -----------//

const BasePortal = ({ theme, visible }) => (
  <Styled.BasePortal theme={theme} visible={visible}>
    <Styled.CenterWrapper>
      <Styled.LogoWrapper theme={theme}>
        <Logo width={18} />
        <h5>{(process.env.APP_TITLE || '').replace('Miro ', '')}</h5>
      </Styled.LogoWrapper>
    </Styled.CenterWrapper>
  </Styled.BasePortal>
);

//-----------  Type Definitions  -----------//

BasePortal.propTypes = {
  theme: PropTypes.string,
  visible: PropTypes.bool,
};

//-----------  Export  -----------//

export default BasePortal;
