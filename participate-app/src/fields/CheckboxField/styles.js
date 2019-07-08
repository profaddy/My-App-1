//-----------  Imports  -----------//

import styled from 'styled-components'

import vars   from '@miro/core-ui/lib/styles/variables'

//-----------  Definitions  ----------- */

const Styled = {}

//-----------  Radio Field  ----------- */

Styled.CheckboxField = styled.div`
  position: relative;

  label > span {
    font-size   : 1.15rem;
    font-weight : ${vars.fontWeightThin};
    max-width   : auto;
  }

  > div:last-child > label {
    margin-bottom: 0;
  }
`

//-----------  Exports  ----------- */

export default Styled
