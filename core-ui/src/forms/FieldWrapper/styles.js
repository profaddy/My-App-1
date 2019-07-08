//-----------  Imports  -----------//

import styled from 'styled-components';

// import vars from 'styles/variables';

//-----------  Definitions  ----------- */

const Styled = {};

//-----------  Field Wrapper  ----------- */

Styled.FieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

Styled.Label = styled.label`
  ${p =>
    p.empty &&
    `
    margin: 0;
  `}
`;

//-----------  Exports  ----------- */

export default Styled;
