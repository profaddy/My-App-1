//-----------  Imports  -----------//

import styled          from 'styled-components'

import vars            from '@miro/core-ui/lib/styles/variables'
import { centerAlign } from '@miro/core-ui/lib/styles/mixins'

//-----------  Definitions  ----------- */

const Styled = {}

//-----------  Welcome Form  ----------- */

Styled.ErrorModal = styled.form`
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
      color      : ${vars.grayDarker};
      margin-top : 1.75rem;
    }

    p {
      font-weight: ${vars.fontWeightThin};
      line-height: 200%;
    }

    input {
      margin: 2rem 0 1rem;
    }
  }

  > *:last-child {
    height : 25rem;
    width  : auto;
  }
`

Styled.Error = styled.div`
  background-color : ${vars.redLightest};
  border           : 1px solid ${vars.red};
  border-radius    : ${vars.radius};
  color            : ${vars.red};
  line-height      : 133%;
  margin-top       : 1.5rem;
  padding          : 0.75em 0.9em;
`

//-----------  Exports  ----------- */

export default Styled
