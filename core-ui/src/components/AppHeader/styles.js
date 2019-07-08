//-----------  Imports  -----------//

import styled from 'styled-components';

import vars from 'styles/variables';
import { themeSwap } from 'utilities/styles';

//-----------  Definitions  ----------- */

const Styled = {};

//-----------  App Header  ----------- */

Styled.AppHeader = styled.header`
  align-items: stretch;
  background-color: ${themeSwap(vars.white, vars.purpleDark)};
  box-shadow: ${vars.shadowDark};
  color: ${themeSwap(vars.grayDarker, vars.white)};
  display: flex;
  flex: 0 0 4.5rem;
  flex-direction: row;
  justify-content: space-between;
  position: relative;
  transition: ${vars.transition};
  z-index: 10;
`;

//-----------  Exports  ----------- */

export default Styled;
