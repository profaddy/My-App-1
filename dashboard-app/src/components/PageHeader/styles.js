//-----------  Imports  -----------//

import styled from 'styled-components';

import vars from '@miro/core-ui/lib/styles/variables';
import { verticalAlign } from '@miro/core-ui/lib/styles/mixins';

//-----------  Definitions  ----------- */

const Styled = {};

//-----------  Search Form  ----------- */

Styled.PageHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

Styled.PageTitle = styled.div`
  font-size: 0.8rem;
  color: ${vars.grayDarkest};
`;

//-----------  Exports  ----------- */

export default Styled;
