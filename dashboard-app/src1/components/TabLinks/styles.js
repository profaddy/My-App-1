//-----------  Imports  -----------//

import styled from 'styled-components'

import vars   from '@miro/core-ui/lib/styles/variables'

//-----------  Definitions  ----------- */

const Styled = {}

//-----------  Base Tabs  ----------- */

Styled.TabLinks = styled.nav`
  margin-bottom: 2.5rem;
  border-bottom: 1px solid ${vars.gray};

  > a {
    color: ${vars.gray};
    padding-bottom: 0.75rem;
    display: inline-block;
    font-size: 1.15rem;
    margin-bottom: -1px;
    border-bottom: 3px solid transparent;

    &:hover {
      color: ${vars.blueBright};
    }

    & + a {
      margin-left: 5%;
    }

    &.active {
      color: ${vars.blueBright};
      border-bottom: 3px solid ${vars.blueBright};
    }
  }
`;

//-----------  Exports  ----------- */

export default Styled
