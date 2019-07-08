//-----------  Imports  -----------//

import styled from 'styled-components';

import vars from '@miro/core-ui/lib/styles/variables';
import { centerAlign } from '@miro/core-ui/lib/styles/mixins';

//-----------  Definitions  ----------- */

const Styled = {};

//-----------  Yes No Field  ----------- */

Styled.SignatureField = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: justify-content;
  position: relative;

  ${p =>
    p.isInvalid &&
    `
    a {
      border-color : ${vars.redLight};
      color        : ${vars.red};
    }
  `}
`;

Styled.Clear = styled.a`
  color: ${vars.blueLight};
  font-style: italic;
  font-weight: ${vars.fontWeightThin};
  position: absolute;
  right: 0;
  bottom: 13rem;
`;

Styled.SignatureWrapper = styled.div`
  background: ${vars.white};
  border: 1px solid ${vars.grayLight};
  border-radius: ${vars.radiusLg};
  position: relative;

  > canvas {
    z-index: 10;
    position: relative;
  }

  &::before,
  &::after {
    ${centerAlign()}

    z-index: 0;
  }

  &::before {
    border-top: 1px dashed ${vars.gray};
    content: '';
    height: 0;
    width: 90%;
  }

  &::after {
    background: ${vars.white};
    color: ${vars.gray};
    content: 'Draw Here';
    font-size: 0.9rem;
    font-style: italic;
    padding: 0 1rem;
  }
`;

//-----------  Exports  ----------- */

export default Styled;
