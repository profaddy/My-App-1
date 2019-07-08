//-----------  Imports  -----------//

import styled          from 'styled-components'

import vars            from '@miro/core-ui/src/styles/variables'
import { centerAlign } from '@miro/core-ui/src/styles/mixins'

//-----------  Definitions  ----------- */

const Styled = {}

//-----------  Assignments List  ----------- */

Styled.AssignmentsList = styled.div`
  min-height : 5rem;
  position   : relative;

  h3::before {
    display: none;
  }
`

Styled.AssignmentBlock = styled.div`
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

  > *:last-child {
    flex        : 0 0 8.5rem;
    font-size   : 1em;
    margin-left : 1em;
    text-align  : right;
  }
`

Styled.Current = styled.div`
  align-self  : flex-end;
  font-size   : 1em !important;
  margin-left : 2em !important;
  margin-top  : -1.5em;
  text-align  : left !important;

  small {
    color: ${vars.gray};
  }

  h5 {
    letter-spacing : 0;
    margin         : 0.67em 0;
  }

  .btn {
    width: 100%;
  }
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
