//-----------  Imports  -----------//

import styled from 'styled-components';

import vars from 'styles/variables';
import { centerAlign } from 'styles/mixins';

//-----------  Definitions  ----------- */

const Styled = {};

//-----------  Yes No Field  ----------- */

Styled.SignatureField = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  position: relative;
`;

Styled.FieldWrapper = styled.div`
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

Styled.FieldLabel = styled.label`
  color: ${vars.grayDarker};
  font-size: 1.15rem;
  font-weight: ${vars.fontWeightThin};
  margin-bottom: 0.5rem;
`;

Styled.Clear = styled.a`
  color: ${vars.blueLight};
  font-style: italic;
  font-weight: ${vars.fontWeightThin};
  position: absolute;
  right: 0;
  top: 0.33rem;
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
