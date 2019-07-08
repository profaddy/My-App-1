//-----------  Imports  -----------//

import styled from 'styled-components'

import vars   from '@miro/core-ui/lib/styles/variables'

//-----------  Definitions  ----------- */

const Styled = {}

//-----------  Provider Fields  ----------- */

Styled.ProviderFields = styled.div`
  max-width: 52rem;
`

Styled.Row = styled.div`
  align-items     : flex-end;
  display         : flex;
  flex-direction  : row;
  justify-content : space-between;

  > * {
    flex         : 1 1 100%;
    margin-right : 2rem;
  }
`

//-----------  Exports  ----------- */

export default Styled
