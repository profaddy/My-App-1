//-----------  Imports  -----------//

import styled from 'styled-components';

import vars from 'styles/variables';

//-----------  Definitions  ----------- */

const Styled = {};

//-----------  Form Field  ----------- */

Styled.FormField = styled.div`
  margin: 2rem 0;
  position: relative;
  transition: ${vars.transition};
`;

Styled.FieldLabel = styled.label`
  color: ${p => (p.isInvalid ? vars.red : vars.grayDarker)};

  sup {
    color: ${vars.redLight};
  }
`;

Styled.FieldWrapper = styled.div`
  position: relative;

  ${p =>
    p.isInvalid &&
    `
    label {
      color: ${vars.red};
    }

    input {
      border-color : ${vars.red};
      color        : ${vars.red};
    }
  `}
`;

Styled.Notes = styled.small`
  display: block;
  font-size: 0.67em;
  margin: 1em 0 0 0;
`;

//-----------  Exports  ----------- */

export default Styled;
