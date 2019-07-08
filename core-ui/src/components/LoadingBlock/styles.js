//-----------  Imports  -----------//

import styled from 'styled-components';

import vars from 'styles/variables';
import { centerAlign } from 'styles/mixins';

//-----------  Definitions  ----------- */

const Styled = {};

//-----------  Loading Block  ----------- */

Styled.LoadingBlock = styled.div`
  ${centerAlign()}

  align-items     : center;
  color: ${vars.gray};
  display: flex;
  justify-content: center;
  text-align: center;
  transition: ${vars.transition};
  z-index: 1;

  svg {
    height: auto;
    width: 2.5em;

    path {
      fill: ${vars.gray};
    }
  }

  h6 {
    font-size: 0.75em;
    font-weight: ${vars.fontWeightThiner};
    letter-spacing: 0.1em;
    margin-left: 1em;
    text-transform: uppercase;
    white-space: nowrap;
  }
`;

//-----------  Exports  ----------- */

export default Styled;
