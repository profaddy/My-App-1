//-----------  Imports  -----------//

import styled from 'styled-components';

import vars from '@miro/core-ui/lib/styles/variables';

//-----------  Definitions  ----------- */

const Styled = {};

//-----------  Reviews  ----------- */

Styled.Reviews = styled.div`
  display: flex;
  padding: 70px 70px 50px 100px;
  flex-direction: column;
`;

Styled.Header = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
  text-transform: uppercase;
`;

Styled.Body = styled.div`
  display: flex;
  width: 80%;
  flex-direction: column;
`;

Styled.Heads = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 50px;
  width: 90%;
`;

Styled.Categories = styled.div`
  display: flex;
  justify-content: space-around;
`;

Styled.Rating = styled.div`
  display: flex;
  justify-content: space-around;
  padding-bottom: 40px;
`;

Styled.CheckboxDiv = styled.div`
  display: flex;
  flex-direction: column;
  > div > div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 50%;
  }
`;

Styled.CheckBoxContainer = styled.div`
  margin-bottom: 40px;
  display: flex;
  > div:nth-child(2) {
    display: flex !important;
    justify-content: space-around !important;
    > div {
      min-width: 100px;
      text-align: center;
    }
  }
`;

Styled.FormDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

Styled.Footer = styled.footer`
  display: flex;
  flex-direction: column;
  padding-top: 1.5rem;
  justify-content: space-between;
  width: 100%;
`;

//-----------  Exports  ----------- */

export default Styled;
