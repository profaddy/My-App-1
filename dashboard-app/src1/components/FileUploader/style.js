//-----------  Imports  -----------//

import styled from 'styled-components';
// import ReactDropZone from 'react-dropzone';
import vars from '@miro/core-ui/lib/styles/variables';
//-----------  Definitions  ----------- */

const Styled = {};

//-----------  Form Wrapper  ----------- */

Styled.Header = styled.header`
  align-items: center;
  display: flex;
  flex-direction: column;
`;

Styled.Container = styled.div`
  
`;
Styled.Filename = styled('div')`
  word-break: break-all;
`

Styled.Title = styled.div`
  color: ${vars.black};
  flex: 0 0 auto;
  font-size: 1.33rem;
  font-weight: ${vars.fontWeightBold};
  letter-spacing: 0.1rem;
`;

Styled.SubTitle = styled.div`
  margin-top: 20px;
  margin-bottom: 10px;
  color: ${vars.black};
  font-size: 1rem;
  letter-spacing: 0rem;
`;

Styled.Body = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  width: 100%;
`;

Styled.ColumnDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

Styled.RowDiv = styled.div`
  display: flex;
`;

Styled.UploadZone = styled.div`
  display: flex;
  flex-direction: column;
  width: 85%;
  height: 50%;
  justify-content: space-around;
  align-items: center;
`;

Styled.BrowseSpan = styled.span`
  text-decoration: underline;
  color: blue;
  text-transform: uppercase;
`;

Styled.ErrorDiv = styled('div')`
  font-size: 10px;
  font-style: italic;
  color: tomato;
  margin-top: 4px;
  font-size: 12px;
`;

export default Styled;
