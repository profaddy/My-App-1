//-----------  Imports  -----------//

import styled          from 'styled-components'

import vars            from '@miro/core-ui/src/styles/variables'
import { centerAlign } from '@miro/core-ui/src/styles/mixins'

//-----------  Definitions  ----------- */

const Styled = {}

//-----------  Jobs List  ----------- */

Styled.SubjectsList = styled.div`
  position   : relative;
  min-height : 8rem;

  > div {
    border-bottom : 1px solid ${vars.grayLight};
    padding       : 0 0 0.75em 0.75em;

    &:last-child {
      border-bottom: none;
    }
  }
`

Styled.SubjectBlock = styled.div`
  align-items     : center;
  display         : flex;
  flex-direction  : row;
  justify-content : space-between;
  margin-top      : 1rem;

  > *:first-child {
    flex      : 1 1 auto;
    font-size : 0.75em;

    span {
      font-size: 1.2em;
    }
  }

  h6 {
    color       : ${vars.yellow};
    flex        : 0 0 6rem;
    font-size   : 0.8em;
    font-style  : italic;
    font-weight : ${vars.fontWeightBold};
    text-align  : center;
  }

  > *:last-child {
    flex        : 0 0 7.5rem;
    font-size   : 1em;
    margin-left : 1em;
    text-align  : right;

    .btn {
      padding-left : 0;
      padding-right: 0;
      width        : 100%;
    }
  }
`

Styled.Date = styled.h6`
  color      : ${p => p.today ? vars.orange : vars.grayDark};
  margin-top : 1.5em;
`

Styled.Empty = styled.div`
  ${ centerAlign() }

  font-weight    : ${vars.fontWeightBold};
  text-align     : center;
  text-transform : uppercase;

  small {
    color          : ${vars.grayDark};
    display        : block;
    font-size      : 0.8rem;
    font-weight    : ${vars.fontWeightThin};
    margin-top     : 0.33rem;
    text-transform : none;

    span {
      font-size      : 1.5em;
      padding        : 0 0.25em;
      vertical-align : -0.15em;
    }
  }
`

//-----------  Exports  ----------- */

export default Styled
