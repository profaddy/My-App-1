//-----------  Imports  -----------//

import styled from 'styled-components';

import vars from 'styles/variables';

//-----------  Definitions  ----------- */

const Styled = {};

//-----------  Radio Field  ----------- */

Styled.CardCheckboxFields = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  h4 {
    font-weight: ${vars.fontWeightThiner};
  }

  > * {
    flex: 0 0 25%;
    text-align: left;
  }
`;

Styled.FieldLabel = styled.label`
  color: ${vars.grayDarker};
  font-size: 1.15rem;
  font-weight: ${vars.fontWeightThin};
  margin-right: 3%;
`;

Styled.Checkbox = styled.div`
  label {
    font-size: 1em !important;
    font-weight: ${vars.fontWeightThin} !important;
    margin: 0 0 0.75rem !important;
    padding-left: 2.75rem !important;
    padding-top: 3px;
  }
`;

//-----------  Exports  ----------- */

export default Styled;
