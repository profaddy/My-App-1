//-----------  Imports  -----------//

import styled      from 'styled-components'

import PageWrapper from 'components/PageWrapper'

import vars        from '@miro/core-ui/lib/styles/variables'

//-----------  Definitions  ----------- */

const Styled = {}

//-----------  Capacity Route  ----------- */

Styled.CapacityRoute = styled(PageWrapper)``


Styled.Instructions = styled.p`
  color       : ${vars.brown};
  font-size   : 1.15rem;
  font-style  : italic;
  font-weight : ${vars.fontWeightBold};
  margin      : -2rem 0 2rem;
  max-width   : 100%;
`

//-----------  Exports  ----------- */

export default Styled
