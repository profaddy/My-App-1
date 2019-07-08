//-----------  Imports  -----------//

import styled              from 'styled-components'

import vars                from '@miro/core-ui/lib/styles/variables'
import { loadDelay }       from '@miro/core-ui/lib/utilities/constants'
import { centerAlign,
         horizontalAlign } from '@miro/core-ui/lib/styles/mixins'

//-----------  Definitions  ----------- */

const Styled = {}

//-----------  Auth Portal  ----------- */

Styled.StaticBase = styled.div`
  background-color : ${vars.purpleDark};
  bottom           : 0;
  left             : 0;
  position         : fixed;
  right            : 0;
  top              : 0;
  transition       : all ${loadDelay/1000}s;
  opacity          : ${p => p.visible ? 1 : 0};
  pointer-events   : ${p => p.visible ? 'auto' : 'none'};
  z-index          : 999;
`

Styled.CenterWrapper = styled.div`
  ${ centerAlign() }

  align-items     : center;
  display         : flex;
  flex-direction  : row;
  justify-content : center;
  max-width       : 70rem;
  padding         : 0 2rem;
  text-align      : center;
  width           : 100%;
`

Styled.LogoWrapper = styled.section`
  padding      : 12% 5%;
  padding-left : ${p => p.loading ? '5%' : 0};
  position     : relative;
  transition   : all ${loadDelay/1000}s;
  z-index      : 1;

  svg {
    width     : 100% !important;
    max-width : 12rem !important;
  }

  h5 {
    color          : ${vars.grayLighter};
    font-weight    : ${vars.fontWeightThin};
    margin         : 1.5rem 0;
    text-transform : uppercase;
  }
`

Styled.FormWrapper = styled.div`
  font-size   : 1.1rem;
  margin-left : ${p => p.loading ? '-45rem' : 0};
  opacity     : ${p => p.loading ? 0 : 1};
  transform   : scale3d(${p => p.loading ? '0.85, 0.85, 0.85' : '1, 1, 1'});
  transition  : all ${loadDelay/1000}s;
  width       : 45rem;
  margin-top  : 1.5rem;

  input {
    margin-bottom: 2rem;
  }

  button {
    margin-bottom : 1.5rem;
    width         : 100%;
  }

  i {
    color       : ${vars.grayLighter};
    font-size   : 0.85em;
    font-weight : ${vars.fontWeightThin};
  }
`

Styled.Loading = styled.small`
  ${ horizontalAlign() }
`
//-----------  Exports  ----------- */

export default Styled
