//-----------  Imports  -----------//

import styled from 'styled-components'

import vars   from '@miro/core-ui/lib/styles/variables'

//-----------  Definitions  ----------- */

const Styled = {}

//-----------  Create Battery Wrapper  ----------- */

Styled.CreateBatteryWrapper = styled.div`
  > h3 {
    margin: 0 0 2rem;
  }
`;

Styled.Tabs = styled.nav`
  margin-bottom: 2.5rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  /* pointer-events: none; */

  > * {
    padding-bottom: 1.25rem;
    display: inline-block;
    font-size: 1.05rem;
    margin-bottom: -1px;
    border-bottom: 3px solid ${vars.blueBright};
  }

  > a {
    color: ${vars.blueBright};
    flex: 0 0 auto;

    &:hover {
      color: ${vars.blueBright};
    }
  }

  > span {
    flex: 1 1 auto;
    border-bottom-color: ${vars.blueBright};
    transition: ${vars.transition};

    svg {
      width: auto;
      height: 1rem;
      display: block;
      margin: 0 auto 2px;
      transition: ${vars.transition};

      path {
        fill: ${vars.blueBright} !important;
      }
    }

    &:last-child {
      display: none;
    }
  }


  > a.active ~ * {
    color: ${vars.gray};
    border-bottom-color: ${vars.grayLighter};

    path {
     fill: ${vars.grayLight} !important;
    }
  }
`;

//-----------  Exports  ----------- */

export default Styled
