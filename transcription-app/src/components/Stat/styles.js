//-----------  Imports  -----------//

import styled from 'styled-components'

import vars   from '@miro/core-ui/src/styles/variables'

//-----------  Definitions  ----------- */

const Styled = {}

//-----------  Stat  ----------- */

Styled.Stat = styled.span`
  color          : ${vars.grayDark};
  font-size      : 1.1em;
  font-weight    : ${vars.fontWeightThiner};
  letter-spacing : 0;
  margin-right   : 1.75em;

  svg {
    height         : auto;
    margin-right   : 0.5em;
    vertical-align : -0.33em;
    width          : 1.5em;

    path {
      fill: ${vars.blueBright};
    }
  }
`

//-----------  Exports  ----------- */

export default Styled
