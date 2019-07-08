//-----------  Imports  -----------//

import styled from 'styled-components';

import vars from '@miro/core-ui/lib/styles/variables';
import { verticalAlign } from '@miro/core-ui/lib/styles/mixins';

//-----------  Definitions  ----------- */

const Styled = {};

//-----------  Search Form  ----------- */

Styled.CategoryTabs = styled('ul')`
  padding-inline-start: 0;
  display: flex;
  justify-content: flex-start;
  list-style-type: none;
  border-bottom: 1px solid gray;
`;
Styled.Tab = styled('li')`
  cursor: pointer;
  padding: .8rem 1.4rem;
  color: ${vars.grayDark};
  border-bottom: 1px solid gray;
  position: relative;
  top: 1px;
  font-size: 1.1rem;

  ${props => props.active && `
    border: 1px solid gray;
    border-bottom: 1px solid white;
    color: black;
  `};
`;

//-----------  Exports  ----------- */

export default Styled;
