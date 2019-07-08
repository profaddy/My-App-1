//-----------  Imports  -----------//

import styled          from 'styled-components'

import PageWrapper     from 'components/PageWrapper'

import vars            from '@miro/core-ui/lib/styles/variables'
import { centerAlign } from '@miro/core-ui/lib/styles/mixins'

//-----------  Definitions  ----------- */

const Styled = {}

//-----------  Release Route  ----------- */

Styled.ReleaseRoute = styled(PageWrapper)`

  > h3 {
    border-bottom: 1px solid ${vars.grayLighter};
  }
`

Styled.Disclaimer = styled.div`
  font-size : 1.1rem;
  margin    : 3rem 0 2.5rem;

  p {
    max-width: 48rem;
  }
`

//-----------  Exports  ----------- */

export default Styled
