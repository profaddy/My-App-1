//-----------  Imports  -----------//

import styled from 'styled-components';

import vars from '@miro/core-ui/lib/styles/variables';
import { verticalAlign } from '@miro/core-ui/lib/styles/mixins';

//-----------  Definitions  ----------- */

const Styled = {};

//-----------  Search Form  ----------- */

Styled.Tabs = styled.ul`
  border-bottom: 1px solid gray;
  list-style-type: none;
  margin: 2.48276rem 0.6207rem;
  padding: 0;
  overflow: hidden;
  font-size: 1.2rem;
  color: gray;
`;
Styled.Tab = styled.li`
  cursor: pointer;
  float: left;
  margin-right: 2rem;
  padding-bottom: 1rem;
  ${props => props.active && 'border-bottom: 1px solid blue'};
  ${props => props.active && 'color: blue'};
`;

//-----------  Exports  ----------- */

export default Styled;
