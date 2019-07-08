//-----------  Imports  -----------//

import styled from 'styled-components';

import vars from '@miro/core-ui/lib/styles/variables';
//-----------  Definitions  ----------- */

const Styled = {};

//-----------  Form Wrapper  ----------- */

Styled.Header = styled.header`
  align-items: flex-start;
  display: flex;
`;

Styled.Title = styled.div`
  color: ${vars.black};
  flex: 0 0 auto;
  font-size: 1.33rem;
  font-weight: ${vars.fontWeightBold};
  letter-spacing: 0rem;
`;

Styled.Form = styled.form`
  padding: 0 4rem;
  margin-right: 120px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
`;

Styled.Body = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  > div {
    padding: 0;
    margin: 0;
    width: 300px;
    > label {
      padding-left: 0px;
    }
  }
`;

Styled.Footer = styled.footer`
  display: flex;
  padding-top: 1.5rem;
  justify-content: space-between;
  width: 50%;
`;

Styled.Divider = styled.div`
  margin-top: 10px;
  width: 100%;
  border: 0.5px dashed lightgray;
  background-color: lightgrey;
`;

Styled.Checkbox = styled.div`
  display: flex;

  > label {
    padding-left: 40px !important;
    backgroung-color: red;
  }
`;

Styled.CheckboxDiv = styled.div`
  display: flex;
  flex-direction: column;
  > div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`;

//-----------  Exports  ----------- */

export default Styled;
