//-----------  Imports  -----------//

import styled from 'styled-components';

import vars from '@miro/core-ui/lib/styles/variables';
import { verticalAlign } from '@miro/core-ui/lib/styles/mixins';

//-----------  Definitions  ----------- */

const Styled = {};

//-----------  Search Form  ----------- */

Styled.StudyContainer = styled.div`
  margin: 2rem;
  padding: 2rem;
`;
Styled.CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 2rem;
`;

//-----------  Exports  ----------- */

export default Styled;
