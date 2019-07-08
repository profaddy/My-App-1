//-----------  Imports  -----------//

import styled          from 'styled-components'

import vars            from '@miro/core-ui/src/styles/variables'
import { centerAlign } from '@miro/core-ui/src/styles/mixins'

//-----------  Definitions  ----------- */

const Styled = {}

//-----------  Dashboard Route  ----------- */

Styled.DashboardRoute = styled.div`
  display         : flex;
  flex-direction  : row;
  justify-content : space-between;
`

Styled.Column = styled.div`
  display         : flex;
  flex            : 1 1 auto;
  flex-direction  : column;
  justify-content : flex-start;

  & + div {
    flex        : 0 0 35%;
    margin-left : 1.25rem;
  }

  > div + div {
    margin-top: 1.25rem;
  }
`

Styled.CompletedModal = styled.div`
  margin: 5rem 3rem 4rem;

  h1 {
    color          : ${vars.blueBright};
    font-weight    : ${vars.fontWeightBolder};
    text-transform : uppercase;
  }

  h2 {
    color          : ${vars.yellow};
    font-weight    : ${vars.fontWeightBolder};
    margin         : 1.5rem 0;
    text-transform : uppercase;
  }

  h3 {
    border-bottom  : 1px solid ${vars.grayLighter};
    color          : ${vars.black};
    font-weight    : ${vars.fontWeightBolder};
    margin-bottom  : 2rem;
    padding-bottom : 2rem;
    text-transform : uppercase;
  }
`

//-----------  Exports  ----------- */

export default Styled
