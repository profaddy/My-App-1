//-----------  Imports  -----------//

import styled from 'styled-components';

import vars from 'styles/variables';

//-----------  Definitions  ----------- */

const Styled = {};

//-----------  Radio Field  ----------- */

Styled.CheckboxField = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  h4 {
    font-weight: ${vars.fontWeightThiner};
  }

  > * {
    flex: 0 0 25%;
    text-align: center;
  }
`;

Styled.FieldLabel = styled.label`
  padding-left: 2.75rem !important;
  padding-top: 2px;

  > div {
    margin-left: -0.75rem;
  }
`;

//-----------  Exports  ----------- */

export default Styled;
