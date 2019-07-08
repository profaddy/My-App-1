//-----------  Imports  -----------//

import styled          from 'styled-components'

import vars            from '@miro/core-ui/lib/styles/variables'
import { centerAlign } from '@miro/core-ui/lib/styles/mixins'

//-----------  Definitions  ----------- */

const Styled = {}

//-----------  Capacity Route  ----------- */

Styled.SignatureModal = styled.div`
  ${ centerAlign() }
  margin-top: 0 !important;
  text-align: left;

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
Styled.Button = styled.div`
  margin-top: 2rem;
  float:left;
  margin-right:2rem

  > span + span {
    margin-left: 1rem;
  }
`


//-----------  Exports  ----------- */

export default Styled