//-----------  Imports  -----------//

import styled          from 'styled-components'

import PageWrapper     from 'components/PageWrapper'

import vars            from '@miro/core-ui/lib/styles/variables'
import { centerAlign } from '@miro/core-ui/lib/styles/mixins'

//-----------  Definitions  ----------- */

const Styled = {}

//-----------  Consent Route  ----------- */

Styled.Overlay = {
  backgroundColor : vars.purpleDark,
  textAlign       : 'center',
  zIndex          : 1000,
}

Styled.IndexRoute = styled(PageWrapper)``

//-----------  Exports  ----------- */

export default Styled
