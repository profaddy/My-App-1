//-----------  Imports  -----------//

import styled from 'styled-components';

import vars from 'styles/variables';

//-----------  Definitions  ----------- */

const Styled = {};

//-----------  Radio Field  ----------- */

Styled.RadioFields = styled.div`
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
  color: ${vars.black};
  flex: 1 1 auto;
  font-size: 1.15rem;
  font-weight: ${vars.fontWeightThin};
  justify-self: flex-start;
  margin: 0;
  position: relative;
  text-transform: uppercase;
`;

//-----------  Exports  ----------- */

export default Styled;
