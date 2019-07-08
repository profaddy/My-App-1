//-----------  Imports  -----------//

import styled             from 'styled-components'
import { transparentize } from 'polished'

import vars               from '@miro/core-ui/lib/styles/variables'

//-----------  Definitions  ----------- */

const Styled = {}

//-----------  Yes No Field  ----------- */

Styled.YesNoField = styled.div`
  display    : block;
  margin-top : 0.5rem;
  position   : relative;

  ${p => p.invliad && `
    a {
      border-color : ${vars.redLight};
      color        : ${vars.red};
    }
  `}
`

Styled.YesNo = styled.a`
  background-color : ${p => p.selected ? transparentize(0.85, vars.blue) : vars.white};
  border           : 1px solid ${p => p.selected ? vars.blueDark : vars.blueLightest};
  border-radius    : ${vars.radiusLg};
  color            : ${p => p.selected ? vars.blueDarker : vars.blueDark};
  display          : inline-block;
  font-weight      : ${vars.fontWeightThin};
  line-height      : 2.67rem;
  margin-right     : 1rem;
  text-align       : center;
  width            : 5.5rem;
`

//-----------  Exports  ----------- */

export default Styled
