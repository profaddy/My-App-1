//-----------  Imports  -----------//

import styled          from 'styled-components'

import vars            from '@miro/core-ui/lib/styles/variables'
import { centerAlign } from '@miro/core-ui/lib/styles/mixins'

//-----------  Definitions  ----------- */

const Styled = {}

//-----------  Welcome Form  ----------- */

Styled.WelcomeForm = styled.form`
  ${ centerAlign() }

  align-items     : center;
  display         : flex;
  flex-direction  : row;
  justify-content : space-between;
  margin          : auto;
  max-width       : 62rem;
  width           : 90%;

  > *:first-child {
    max-width  : 25rem;
    text-align : left;

    h3 {
      color: ${vars.grayDarker};
    }

    p {
      font-weight: ${vars.fontWeightThin};
      line-height: 200%;
    }

    input {
      margin: 2rem 0 1rem;
    }

    label {
      display: none;
    }
  }

  > *:last-child {
    height : 25rem;
    width  : auto;
  }
`

//-----------  Exports  ----------- */

export default Styled
