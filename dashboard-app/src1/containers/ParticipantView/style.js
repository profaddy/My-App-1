//-----------  Imports  -----------//

import styled from 'styled-components';

//-----------  Definitions  ----------- */

const Styled = {};

//-----------  Index Route  ----------- */

Styled.RootDiv = styled.div`
  padding-left: 50px;
  padding-top: 20px;
  margin-right: 30px;
`;

Styled.FilterDiv = styled.div`
  display: flex;
  border-bottom: 1px solid black;
`;

Styled.Toolbar = styled.div`
  display: flex;
  margin-top: 10px;
  min-height: 70px;
  align-items: center;
  justify-content: space-between;
`;

Styled.ToolbarRight = styled.div`
  display: flex;
  height: 34px;
  align-items: flex-start;
  justify-content: space-between;
  width: 48%;
  max-width: 580px;
`;

Styled.Input = styled.input`
  height: 100%;
  width: 300px;
  text-indent: 33px;
`;

Styled.SearchAndUploadDiv = styled.div`
  display: flex;
  width: 65%;
  justify-content: flex-end;
  height: 100%;
  position: relative;
`;

Styled.VerticalDivider = styled.div`
  height: 100%;
  width: 1px;
  background-color: lightgrey;
`;

Styled.UploadContainer = styled.div`
  cursor: pointer;
`;

Styled.SearchBoxCotainer = styled.div`
  > span {
    position: absolute;
    top: 6px;
    left: 6px;
  }
`;

//-----------  Exports  ----------- */

export default Styled;
