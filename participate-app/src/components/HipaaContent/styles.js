//-----------  Imports  -----------//

import styled from 'styled-components'

import vars   from '@miro/core-ui/lib/styles/variables'

//-----------  Definitions  ----------- */

const Styled = {}

//-----------  HIPAA Content ----------- */

Styled.HipaaWrapper = styled.div`
  margin-bottom:20px;
  p{
    max-width:100%
  }
`

Styled.FooterName = styled.div`
float:left
  span{
    border-bottom :2px solid
  }
`
Styled.FooterDate = styled.div`
  float:right
  span{
    border-bottom :2px solid
  }
`
Styled.Footer = styled.div`
`
//-----------  Exports  ----------- */

export default Styled
