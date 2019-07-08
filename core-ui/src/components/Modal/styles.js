//-----------  Imports  -----------//

import styled from 'styled-components';
import { transparentize } from 'polished';

import vars from 'styles/variables';

//-----------  Definitions  ----------- */

const Styled = {};

//-----------  Modal  ----------- */

Styled.ModalOverlay = {
  backgroundColor: transparentize(0.5, vars.grayDarkest),
  textAlign: 'center',
  zIndex: 1000,
};

Styled.ModalContent = {
  backgroundColor: vars.white,
  border: 'none',
  borderRadius: vars.radius,
  bottom: 'auto',
  boxShadow: vars.shadowDark,
  fontSize: '95%',
  left: 'auto',
  margin: '2rem auto',
  maxWidth: vars.blockWidth,
  overflowX: 'auto',
  padding: '4rem 2rem',
  position: 'relative',
  right: 'auto',
  textAlign: 'center',
  // top             : 0,
};

Styled.ModalBlock = styled.div`
  > * + * {
    margin-top: 2rem;
  }
`;

Styled.CloseIcon = styled.span`
  color: ${vars.grayDark};
  font-size: 1.2rem;
  position: absolute;
  right: 1rem;
  top: 1rem;
  transition: ${vars.transition};
  z-index: 10;

  &:hover,
  &:focus {
    color: ${vars.red};
    cursor: pointer;
  }
`;

//-----------  Exports  ----------- */

export default Styled;
