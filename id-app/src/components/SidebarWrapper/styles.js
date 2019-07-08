//-----------  Imports  -----------//

import styled from 'styled-components';

import vars from '@miro/core-ui/lib/styles/variables';

//-----------  Definitions  ----------- */

const Styled = {};

//-----------  Page Wrapper  ----------- */

Styled.SidebarWrapper = styled.div`
  align-items: center;
  background-color: ${vars.white};
  display: flex;
  flex: 1 1 100%;
  flex-direction: row;
`;

Styled.PageSidebar = styled.aside`
  align-self: stretch;
  background-color: ${vars.purpleDark};
  margin-right: 5vw;
  padding: 0 5vw;
`;

Styled.CenterWrapper = styled.div`
  align-items: stretch;
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: 100vh;
  width: 100%;
`;

Styled.LogoWrapper = styled.section`
  display: flex;
  flex-flow: column;
  justify-content: center;
  padding: 7%;
  text-align: center;
  width: 100%;
  z-index: 1;

  svg {
    width: 100% !important;
    max-width: 15rem !important;
  }

  h5 {
    color: ${vars.grayLighter};
    font-weight: ${vars.fontWeightThin};
    margin: 1.5rem 0;
    text-transform: uppercase;
  }
`;

Styled.PageContent = styled.main``;

//-----------  Exports  ----------- */

export default Styled;
