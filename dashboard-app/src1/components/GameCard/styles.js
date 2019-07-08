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

Styled.GameCard = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-image: url(${gamecard});
  background-repeat: no-repeat;
  padding: 8px;
  margin: 1rem 2rem 2rem 0;
  width: 327px;
  height: 193px;
`;
Styled.InnerCard = styled('div')`
  background-color: white;
  display: block;
  padding: 8px;
  width: 314px;
`;
Styled.CheckboxContainer = styled('div')`
  display: flex;
  justify-content: flex-end;
  input[type='checkbox'] + label {
    padding-left: 1.1rem;
  }
`;
Styled.CheckboxInput = styled('input')`
  display: inline-block !important;
`;
Styled.View = styled('p')`
  cursor: pointer;
  margin: 4px 0;
  font-size: 1rem;
  font-style: italic;
  color: #0064ff;
`;
Styled.Duration = styled('p')`
  margin: 4px 0;
`;
Styled.Name = styled('h3')`
  margin: 4px 0;
`;

Styled.Checkbox = styled.div`
  label {
    font-size: 1em !important;
    font-weight: ${vars.fontWeightThin} !important;
    margin: 0 0 0.75rem !important;
    padding-left: 2.75rem !important;
    padding-top: 3px;
  }
`;

export default Styled;
