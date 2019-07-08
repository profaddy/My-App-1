//-----------  Imports  -----------//

import styled from 'styled-components';

//-----------  Definitions  ----------- */

const Styled = {};

//-----------  Welcome Form  ----------- */

Styled.ScreeningCompleteModal = styled.div`
  width: 100%;
  margin-top: 13%;
  h2 {
    max-width: 100%;
    text-align: left;
    margin-left: 75px;
    margin-bottom: 24px;
  }
  p {
    max-width: 100%;
    text-align: left;
    margin-left: 75px;
  }
  button {
    text-align: left;
  }
`;
Styled.EligibilityDisclaimer = styled.div`
  margin-left: 550px;
  padding-top: 120px;
`;
Styled.EligibilityButton = styled.div`
  text-align: left;
  margin-left: 75px;
`;
Styled.EligibilityIcon = styled.div`
  text-align: left;
  margin-left: 195px;
  float: left;
`;
Styled.EligibilityMessage = styled.div`
  margin-bottom: 63px;
`;

//-----------  Exports  ----------- */

export default Styled;
