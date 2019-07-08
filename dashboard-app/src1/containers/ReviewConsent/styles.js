//-----------  Imports  -----------//

import styled from 'styled-components';

import vars from '@miro/core-ui/lib/styles/variables';

//-----------  Definitions  ----------- */

const Styled = {};

//-----------  Review Consent  ----------- */

Styled.ReviewConsentContainer = styled.div`
  display: flex;
  height: 100%;
  background-color: ${vars.grayLighter};
`;

Styled.ReviewConsent = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  margin: 2rem;
  width: 100%;
`;

Styled.ReviewConsentHeader = styled.div`
  height: 3.5rem;
  background-color: ${vars.blueBright};
  width: 100%;
  color: white;
  padding: 16px 50px 16px 50px;
`;

Styled.ReviewConsentBody = styled.div`
  padding: 30px 50px 30px 50px;
`;

Styled.ReviewConsentFooter = styled.div`
  padding: 30px 50px 30px 50px;
`;

Styled.Bold = styled.div`
  font-weight: bold;
  font-size: 16px;
`;

Styled.GovtDiv = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-top: 30px;
`;

Styled.GovtDivParticipantName = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 100px;
`;

Styled.GovtDivName = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 200px;
  height: 45px;
  background-color: ${vars.grayLight};
  justify-content: center;
  align-items: center;
  font-weight: bold;
  margin-bottom: 10px;
`;

Styled.GovtPicDiv = styled.div`
  height: 250px;
  width: 400px;
  border: 0.5px black solid;
  padding: 10px;
`;

Styled.Selfie = styled.div`
  height: 250px;
  padding: 10px;
  width: 250px;
  margin-right: 30px;
  border: 0.5px black solid;
`;

Styled.DashedBorder = styled.div`
  background-image: linear-gradient(
    to right,
    black 33%,
    rgba(255, 255, 255, 0) 0%
  );
  background-position: bottom;
  background-size: 10px 1px;
  background-repeat: repeat-x;
  height: 60px;
  margin-bottom: 50px;
`;

Styled.Signature = styled.div`
  height: 250px;
  width: 300px;
  border: 0.5px black solid;
  margin-right: 30px;
  padding: 10px;
`;

Styled.CheckboxDiv = styled.div`
  display: flex;
  width: 250px;
  > div {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }
`;

Styled.BolderAndCaps = styled.div`
  font-size: 30px;
  font-weight: 600;
  text-transform: uppercase;
  margin: 30px 0 30px 0;
`;

//-----------  Exports  ----------- */

export default Styled;
