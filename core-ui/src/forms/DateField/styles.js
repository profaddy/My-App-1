//-----------  Imports  -----------//

import 'react-datepicker/dist/react-datepicker.css';

import styled from 'styled-components';

import vars from 'styles/variables';
import { centerAlign } from 'styles/mixins';

//-----------  Definitions  ----------- */

const Styled = {};

//-----------  Date Field  ----------- */

Styled.DateField = styled.div``;

Styled.FieldLabel = styled.label`
  color: ${vars.grayDarker};
  font-size: 1.15rem;
  font-weight: ${vars.fontWeightThin};
  margin-left: 3%;
`;

Styled.FieldWrapper = styled.div`
  display: inline-block;
  position: relative;
  cursor: pointer;

  input {
    width: 15rem;
  }

  .react-datepicker__navigation {
    margin-top: 0 !important;
  }

  ${p =>
    p.isInvalid &&
    `
    a {
      border-color : ${vars.redLight};
      color        : ${vars.red};
    }
  `}
`;

Styled.Icon = styled.span`
  background: ${vars.grayLightest};
  border-bottom-right-radius: ${vars.radiusLg};
  border-left: 1px solid ${vars.grayLighter};
  border-top-right-radius: ${vars.radiusLg};
  bottom: 1px;
  pointer-events: none;
  position: absolute;
  right: 1px;
  top: 1px;
  width: 3rem;

  svg {
    ${centerAlign()}

    height : auto;
    width: 1.25rem;

    path {
      fill: ${vars.blueLightest};
    }
  }
`;

//-----------  Exports  ----------- */

export default Styled;
