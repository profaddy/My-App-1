//-----------  Imports  -----------//

import styled from 'styled-components';

import vars from '@miro/core-ui/lib/styles/variables';
import { verticalAlign } from '@miro/core-ui/lib/styles/mixins';
import variables from '@miro/core-ui/lib/styles/variables';
import { Link } from 'react-router-dom';
import gamecard from 'assets/gamecard.png';
//-----------  Definitions  ----------- */

const Styled = {};

//-----------  Search Form  ----------- */

Styled.QuestionnaireCard = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid gray;
  padding: 14px;
  margin: 0.6207rem;
  width: 215px;
  height: 251px;
`;
Styled.InnerCard = styled('div')`
  display: block;
`;
Styled.CheckboxContainer = styled('div')`
  display: flex;
  justify-content: flex-end;
`;
Styled.CheckboxInput = styled('input')`
  display: inline-block !important;
`;
Styled.View = styled('p')`
  cursor: pointer;
  font-size: 14px;
  margin: 15px 0;
  font-size: 14px;
  font-style: italic;
  color: #0064ff;
`;
Styled.Duration = styled('p')`
  font-size: 16px;
  margin: 5px 0;
`;
Styled.Name = styled('h3')`
  font-size: 18px;
  margin: 10px 0;
`;
Styled.Pages = styled('p')`
  font-size: 16px;
  margin: 5px 0;
`;

export default Styled;
