//-----------  Imports  -----------//

import styled from 'styled-components';

import vars from 'styles/variables';
import { centerAlign } from 'styles/mixins';

//-----------  Definitions  ----------- */

const Styled = {};

//-----------  Error Block  ----------- */

Styled.ErrorBlock = styled.section`
  ${centerAlign()}

  align-items     : center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  z-index: 1;

  > svg {
    height: 6.5em;
    margin: -0.33em -0.1em;
    transform: scaleX(-1);
    width: auto;

    path {
      fill: ${vars.red};
    }
  }

  > div {
    border-left: 1px solid ${vars.red};
    max-width: 22em;
    padding: 0.25em 0 0.5em 1em;
    width: 100%;

    > h6 {
      color: ${vars.red};
      font-size: 0.85em;
      font-weight: ${vars.fontWeightBold};
      letter-spacing: 0;
      text-transform: uppercase;
    }

    > p {
      font-size: 0.75em;
      font-weight: ${vars.fontWeightThiner};
      letter-spacing: 0;
      margin: 0.33em 0 0.67em;
      overflow: hidden;
      text-overflow: ellipsis;
      text-transform: none;
      white-space: nowrap;
    }

    .btn {
      border-radius: 2px;
      font-size: 0.67em;
      padding: 0.5em 1.5em;
    }
  }
`;

//-----------  Exports  ----------- */

export default Styled;
