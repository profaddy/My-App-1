//-----------  Imports  -----------//

import styled from 'styled-components';

import vars from '@miro/core-ui/lib/styles/variables';

//-----------  Definitions  ----------- */

const Styled = {};

//-----------  Page Wrapper  ----------- */

Styled.PageWrapper = styled.div`
  padding-top: 3rem;
  background-color: ${vars.white};
  flex: 1 1 100%;
  padding-bottom: 4rem;
`;

Styled.Breadcrumbs = styled.header`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  padding: 4rem 4vw 2.5rem 4vw;
`;

Styled.Breadcrumb = styled.span`
  font-weight: ${vars.fontWeightBold};
  color: ${vars.grayDark};
  font-size: 1.2rem;
  letter-spacing: 0;

  &:last-child {
    color: ${vars.grayDarker};
  }

  & + span::before {
    content: '/';
    display: inline-block;
    color: ${vars.grayDark};
    padding: 0 0.5em;
  }
`;

Styled.PageContent = styled.main`
  > * {
    padding-left: 4vw;
    padding-right: 4vw;
  }
`;

Styled.FullWidth = styled.div`
  margin-left: -4vw;
  margin-right: -4vw;
  padding-top: 1rem;
  margin-bottom: -4rem;
  padding-bottom: 2rem;
  background: ${vars.blueGreyLight};

  > * {
    margin: 0 1.5rem;
    background: ${vars.white};
    padding: 2rem;
    min-height: 600px;
  }
`;

//-----------  Exports  ----------- */

export default Styled;
