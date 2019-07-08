//-----------  Imports  -----------//

import styled from 'styled-components'

import vars   from '@miro/core-ui/lib/styles/variables'

//-----------  Definitions  ----------- */

const Styled = {}

//-----------  Label  ----------- */

Styled.Label = styled.span`
  align-items     : center;
  color           : ${vars.black};
  display         : flex;
  flex-direction  : row;
  font-size       : 1.4rem;
  font-weight     : ${vars.fontWeightBold};
  justify-content : flex-start;
  line-height     : 150%;
  max-width       : 48rem;
  padding-left    : 0 !important;
  position        : initial;
`

Styled.Index = styled.span`
  align-self   : flex-start;
  margin-right : 0.5rem;
`

Styled.Notes = styled.span`
  color       : ${vars.greenDarker};
  font-size   : 0.75em;
  font-style  : italic;
  font-weight : ${vars.fontWeightThin};
  margin-left : 1rem;
`

//-----------  Exports  ----------- */

export default Styled
