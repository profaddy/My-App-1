//-----------  Imports  -----------//

import styled from 'styled-components';
import { transparentize } from 'polished';

import vars from 'styles/variables';

//-----------  Definitions  ----------- */

const Styled = {};

//-----------  Yes No Field  ----------- */

Styled.YesNoField = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
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
  margin-right: 3%;
`;

Styled.YesNo = styled.a`
  background-color: ${p =>
    p.selected ? transparentize(0.85, vars.blue) : vars.white};
  border: 1px solid ${p => (p.selected ? vars.blueDark : vars.blueLightest)};
  border-radius: ${vars.radiusLg};
  color: ${p => (p.selected ? vars.blueDarker : vars.blueDark)};
  display: inline-block;
  font-weight: ${vars.fontWeightThin};
  line-height: 2.67rem;
  margin-right: 1rem;
  text-align: center;
  width: 5.5rem;
`;

//-----------  Exports  ----------- */

export default Styled;
