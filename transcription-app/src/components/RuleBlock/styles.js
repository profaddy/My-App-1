//-----------  Imports  -----------//

import styled     from 'styled-components'
import { darken } from 'polished'

import vars       from 'styles/variables'

//-----------  Definitions  ----------- */

const Styled = {}

//-----------  Rule Block  ----------- */

Styled.RuleBlock = styled.div`
  margin-bottom: 1rem;
`

Styled.RuleHeader = styled.a`
  align-items      : center;
  background-color : ${darken(0.02, vars.grayLightest)};
  display          : flex;
  flex-direction   : row;
  justify-content  : space-between;
  margin-bottom    : 0.25rem;
  padding          : 0.75rem 0.85rem;

  &:hover {
    background-color: ${darken(0.01, vars.grayLightest)};
  }

  h5 {
    border-left  : 4px solid ${p => vars[p.color]};
    padding-left : 0.67em;
  }

  strong {
    color       : ${vars.grayDark};
    font-size   : 2em;
    line-height : 0;
    margin-top  : -0.2em;
  }
`

Styled.RuleContent = styled.div`
  background-color : ${darken(0.045, vars.grayLightest)};
  box-shadow       : 0 0 0.33rem rgba(0,0,0,0.05);
  font-size        : 0.9em;
  max-height       : ${p => p.active ? '20rem' : 0};
  overflow         : hidden;
  padding          : ${p => p.active ? '1.25rem' : 0} 1.25rem;
  transition       : all 0.3s ease-in-out;

  * {
    color       : ${vars.grayDarker};
    font-size   : 1em;
    font-weight : ${vars.fontWeightThin};
    line-height : 160%;
    opacity     : ${p => p.active ? 1 : 0};
    transition  : all 0.3s ease-out;
  }

  ol, ul {
    margin       : 0;
    padding-left : 1.5em;

    li + li {
      margin-top: 0.33rem;
    }

    & + h5 {
      margin-top: 1rem;
    }
  }

  > a {
    color       : ${vars.red};
    display     : block;
    font-size   : 0.9em;
    font-style  : italic;
    font-weight : ${vars.fontWeightBold};
    margin-top  : 1.5rem;
  }

  h5 {
    color          : ${vars.black};
    font-weight    : ${vars.fontWeightBold};
    text-transform : uppercase;
  }

  p strong, p strong i, b {
    color       : ${vars.black} !important;
    font-weight : ${vars.fontWeightBold} !important;
  }
`

//-----------  Exports  ----------- */

export default Styled
