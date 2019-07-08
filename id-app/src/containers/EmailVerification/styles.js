//-----------  Imports  -----------//

import styled from 'styled-components';

//-----------  Definitions  ----------- */

const Styled = {};

//-----------  Styleguide  ----------- */
Styled.EmailVerification = styled.div`
  h3 {
    text-transform: uppercase;
  }

  p {
    font-size: 1em;
  }
`;
Styled.EmailVerificationError = styled.div`
  color: red;

  h3 {
    text-transform: uppercase;
  }

  p {
    font-size: 1em;
  }
`;

//-----------  Exports  ----------- */
export default Styled;
