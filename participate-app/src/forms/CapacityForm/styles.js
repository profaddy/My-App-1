//-----------  Imports  -----------//

import styled from 'styled-components'

import vars   from '@miro/core-ui/lib/styles/variables'

//-----------  Definitions  ----------- */

const Styled = {}

//-----------  Consent Form  ----------- */

Styled.CapacityForm = styled.form`
  cursor: ${p => p.disabled ? 'not-allowed' :  'default'};

  > * {
    opacity        : ${p => p.disabled ? 0.75   : 1};
    pointer-events : ${p => p.disabled ? 'none' : 'default'};
    transform      : ${vars.transform};
  }

  * {
    max-width: 100%;
  }
`

//-----------  Exports  ----------- */

export default Styled
