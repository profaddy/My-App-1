//-----------  Imports  -----------//

import styled from 'styled-components'

import vars   from '@miro/core-ui/lib/styles/variables'

//-----------  Definitions  ----------- */

const Styled = {}

//-----------  Card Wrapper  ----------- */

Styled.CardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: stretch;

  > * {
    flex: 0 0 31%;
    margin-top: 2.5rem;
    margin-right: 3.5%;
    width: 31%;

    &:nth-child(3n){
      margin-right: 0;
    }
  }
`;

//-----------  Exports  ----------- */

export default Styled
