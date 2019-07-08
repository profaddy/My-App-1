//-----------  Imports  -----------//

import styled from 'styled-components';

import vars from '@miro/core-ui/lib/styles/variables';
import { verticalAlign } from '@miro/core-ui/lib/styles/mixins';

//-----------  Definitions  ----------- */

const Styled = {};

//-----------  Search Form  ----------- */

Styled.SearchForm = styled.form`
  border-right: 1px solid ${vars.grayLight};
  display: flex;
  max-width: 24rem;
  min-width: 17rem;
  position: relative;
  width: 30%;

  svg {
    ${verticalAlign()}

    height : auto;
    left: 6%;
    width: 1.9rem;

    path {
      fill: ${vars.blueDark};
    }
  }

  div {
    align-self: center;
    padding-left: 8%;
    width: 100%;

    label {
      display: none;
    }

    input {
      border: none;
      color: ${vars.grayDarker};
      font-size: 1rem;

      &::placeholder {
        color: ${vars.grayDark};
      }
    }
  }
`;

//-----------  Exports  ----------- */

export default Styled;
