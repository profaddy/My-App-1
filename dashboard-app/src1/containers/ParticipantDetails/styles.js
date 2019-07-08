//-----------  Imports  -----------//

import styled from 'styled-components';
// import { transparentize } from 'polished';

import vars from '@miro/core-ui/lib/styles/variables';

//-----------  Definitions  ----------- */

const Styled = {};

//-----------  Participant Details  ----------- */

Styled.ParticipantDetails = styled.div`
  padding-left: 50px;
  padding-top: 50px;
  padding-right: 50px;
  display: flex;
  flex-direction: column;
`;

Styled.Details = styled.div`
  min-height: 200px;
`;

Styled.Toolbar = styled.div`
  display: flex;
  justify-content: space-between;
`;

Styled.UserTitle = styled.div`
  font-size: 30px;
  min-width: 200px;
  padding: 10px 0 10px 0;
`;

Styled.ToolbarActions = styled.div`
  width: 200px;
`;

Styled.LocationAndNextStep = styled.div`
  min-width: 350px;
  max-width: 490px;
  display: flex;
  justify-content: flex-start;
  margin-top: 10px;
`;

Styled.LocationDiv = styled.div`
  padding: 5px 10px 5px 10px;
  color: ${vars.blueLight};
  border-radius: 2px;
  min-width: 80px;
  background-color: ${vars.blueLightest};
`;

Styled.NextStepDiv = styled.div`
  padding: 5px 10px 5px 10px;
  color: ${vars.blueLight};
  border-radius: 2px;
  background-color: ${vars.blueLightest};
  display: flex;
  align-items: center;
  margin-left: 20px;
`;

Styled.EligibilityPart = styled.div`
  padding: 20px 0 20px 0;
`;

Styled.EligibilityPartHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

Styled.EligibilityTitle = styled.div`
  font-size: 30px;
  min-width: 200px;
  padding: 10px 0 10px 0;
`;

Styled.UserDetails = styled.div`
  display: flex;
  padding: 15px 0 15px 0;
  width: 50%;
`;

Styled.UserDetailsContainer = styled.div`
  padding: 25px 0 25px 0;
  font-size: 18px;
  display: flex;
`;

Styled.UserDetailsLeft = styled.div`
  flex: 1;
`;

Styled.UserDetailsRight = styled.div`
  flex: 1;
  background-color: ${vars.grayLightest};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  align-items: flex-start;
  padding-left: 45px;
  padding-top: 40px;
`;

Styled.UserDetailsKey = styled.div`
  font-weight: bolder;
  min-width: 200px;
`;

Styled.UserDetailsValue = styled.div`
  min-width: 100px;
  white-space: nowrap;
  h6 > a {
    padding-left: 0.5rem;
    font-size: 0.85rem;
    color: ${vars.blue};
    font-style: italic;
  }
`;

Styled.Dot = styled.div`
  border-radius: 5px;
  height: 10px;
  width: 10px;
  margin-right: 3px;
`;

Styled.Accordions = styled.div`
  width: 55%;
`;

Styled.Steppers = styled.div`
  width: 35%;
`;

Styled.EligibilityPartBody = styled.div`
  display: flex;
  margin-top: 50px;
  justify-content: space-between;
`;

Styled.AccordionDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: space-between;
  justify-content: space-around;
  min-height: 300;
  width: 100%;
  padding: 10px;
`;

Styled.AccordionDetailsRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px;
`;

Styled.AccordionDetailsKey = styled.div`
  display: flex;
  margin: 5px;
  justify-content: flex-start;
  align-items: center;
`;

Styled.ToolbarLeft = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

Styled.ToolbarEdit = styled.div``;

Styled.ToolbarDelete = styled.div`
  margin: 0 0 0 10px;
`;

Styled.Bold = styled.div`
  font-weight: bold;
  font-size: 16px;
`;

Styled.SignatureDiv = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
`;

Styled.ReviewedContaoner = styled.div`
  display: flex;
  min-height: 350px;
  flex-direction: column;
  justify-content: space-around;
`;

Styled.DrugForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 0 15% 5% 15%;
`;

Styled.CheckboxDiv = styled.div`
  display: flex;
  flex-direction: column;
  > div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 70%;
  }
`;

Styled.Footer = styled.footer`
  display: flex;
  padding-top: 1.5rem;
  justify-content: space-between;
  width: 50%;
`;

//-----------  Exports  ----------- */

export default Styled;
