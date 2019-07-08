//-----------  Imports  -----------//

import styled from 'styled-components';

import vars from '@miro/core-ui/lib/styles/variables';
import { ellipsis } from '@miro/core-ui/lib/styles/mixins';

//-----------  Definitions  ----------- */

const Styled = {}

//-----------  Card  ----------- */

Styled.Card = styled.div`
  padding: 1.25rem 1.25rem;
  border-radius: ${vars.radius};
  box-shadow: ${vars.shadowLight};
  display: flex;
  flex-direction: column;
  align-items: stretch;
`;

Styled.CardTitle = styled.div`
  ${ ellipsis() };

  flex: 0 0 auto;
  color: ${vars.grayDarkest};
  font-size: 1.1rem;
  letter-spacing: 0;
  border-bottom: 1px solid ${vars.gray};
  padding-bottom: 0.75rem;
  margin-bottom: 1rem;
`;

Styled.CardDetails = styled.ul`
  margin: 0;
  padding: 0 1.25rem 0.25rem;
  flex: 1 0 auto;

  li {
    color: ${vars.blueBright};
    font-size: 1.15rem;

    strong {
      letter-spacing: 0;
      color: ${vars.grayDarker};
      display: block;
      font-size: 0.8rem;
    }

    span {
      font-size: 0.9rem;
      letter-spacing: 0;
      color: ${vars.grayDarker};
      font-weight: ${vars.fontWeightThiner};
      overflow-wrap: break-word;
    }
  }
`;

Styled.CardActions = styled.div`
  margin-top: 1rem;
  flex: 0 0 auto;
`;

//-----------  Exports  ----------- */

export default Styled
