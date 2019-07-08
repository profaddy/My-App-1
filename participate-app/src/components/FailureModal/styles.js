//-----------  Imports  -----------//

import styled          from 'styled-components'

import vars            from '@miro/core-ui/lib/styles/variables'
import { centerAlign } from '@miro/core-ui/lib/styles/mixins'

//-----------  Definitions  ----------- */

const Styled = {}

//-----------  Capacity Route  ----------- */

Styled.FailureModal = styled.div`
  ${ centerAlign() }

  text-align: left;

  svg {
    height        : auto;
    margin-bottom : 0.5rem;
    width         : 4rem;
  }

  h2 {
    color: ${vars.grayDarker};
  }

  h4 {
    color      : ${vars.yellow};
    margin-top : 1rem;

    strong {
      color       : ${vars.yellow};
      font-weight : ${vars.fontWeightBolder};
    }
  }

  p {
    font-weight   : ${vars.fontWeightThin};
    line-height   : 200%;
    margin-bottom : 1.5rem;
  }
`

//-----------  Exports  ----------- */

export default Styled