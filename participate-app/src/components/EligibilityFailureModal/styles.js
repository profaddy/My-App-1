//-----------  Imports  -----------//

import styled from 'styled-components';

//-----------  Definitions  ----------- */

const Styled = {};

//-----------  Welcome Form  ----------- */

Styled.EligibilityFailureModal = styled.div`
  width: 100%;
  margin-top: 13%;
  h2 {
    max-width: 100%;
    text-align: left;
    margin-left: 311px;
    margin-bottom: 24px;
  }
  p {
    max-width: 100%;
    text-align: left;
    margin-left: 311px;
  }
  button {
    text-align: left;
  }
`;

Styled.EligibilityButton = styled.div`
  text-align: left;
  margin-left: 311px;
`;
Styled.EligibilityIcon = styled.div`
  text-align: left;
  margin-left: 311px;
`;
Styled.EligibilityMessage = styled.div`
  margin-bottom: 63px;
`;

//-----------  Exports  ----------- */

export default Styled;
