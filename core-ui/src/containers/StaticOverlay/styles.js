//-----------  Imports  -----------//

import styled from 'styled-components';

import vars from 'styles/variables';
import { centerAlign } from 'styles/mixins';
import { loadDelay } from 'utilities/constants';
import { themeSwap } from 'utilities/styles';

//-----------  Definitions  ----------- */

const Styled = {};

//-----------  Auth Portal  ----------- */

Styled.BasePortal = styled.div`
  background-color: ${themeSwap(vars.grayDarkest, vars.purpleDark)};
  bottom: 0;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
  transition: all ${loadDelay / 1000}s;
  z-index: 999;
  opacity: ${p => (p.visible ? 1 : 0)};
`;

Styled.CenterWrapper = styled.div`
  ${centerAlign()}

  align-items     : center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  max-width: ${vars.largeWidth};
  padding: 0 2rem;
  text-align: center;
  width: 100%;
`;

Styled.LogoWrapper = styled.section`
  background-color: ${themeSwap(vars.grayDarkest, vars.purpleDark)};
  box-shadow: 0 0 4rem ${themeSwap(vars.grayDarkest, vars.purpleDark)};
  padding: 12% 10%;
  position: relative;
  transition: all ${loadDelay / 1000}s;
  z-index: 1;

  svg {
    width: 100% !important;
    max-width: 18rem !important;
  }

  h5 {
    color: ${vars.grayLighter};
    font-weight: ${vars.fontWeightThin};
    margin: 1.5rem 0;
    text-transform: uppercase;
  }
`;

//-----------  Exports  ----------- */

export default Styled;
