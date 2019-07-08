//-----------  Imports  -----------//

import styled from 'styled-components';

import vars from 'styles/variables';
import { centerAlign } from 'styles/mixins';
import { themeSwap } from 'utilities/styles';

//-----------  Definitions  ----------- */

const Styled = {};

//-----------  App Sidebar  ----------- */

Styled.AppSidebar = styled.div`
  background-color: ${themeSwap(vars.brownDark, vars.purpleDark)};
  flex: 0 0 14rem;
  position: relative;
  transition: ${vars.transition};
  width: 14rem;
  z-index: 10;
`;

Styled.SidebarWrapper = styled.div`
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  position: relative;
  height: 100vh;

  > header {
    background-color: ${themeSwap(vars.brownLight, vars.purple)};

    > * {
      ${centerAlign()}
    }
  }

  > span {
    margin: 1.5rem;
  }
`;

Styled.ContentWrapper = styled.div`
  flex: 1 1 auto;
  margin-top: 6.75rem;
`;

//-----------  Exports  ----------- */

export default Styled;
