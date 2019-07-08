//-----------  Imports  -----------//

import { darken,
         transparentize } from 'polished'
import styled             from 'styled-components'

import vars               from '@miro/core-ui/src/styles/variables'

//-----------  Definitions  ----------- */

const Styled = {}

//-----------  Job Title  ----------- */

Styled.SubjectTitle = styled.div`
  position: relative;

  h3 {
    font-weight    : ${vars.fontWeightBolder};
    margin-bottom  : 1.25em;
    text-transform : uppercase;

    ${p => p.alert && `
      &::before {
        color      : ${vars[p.color]};
        content    : '•';
        display    : inline-block;
        left       : -1em;
        margin-top : -1px;
        position   : absolute;
      }
    `}
  }

  > span:last-child {
    margin-right: 0;
  }
`

Styled.AlertBlock = styled.div`
  background-color : ${p => transparentize(0.85, vars[p.color])};
  border-radius    : ${vars.radius};
  font-size        : 1.05em;
  padding          : 0.5em;
  position         : absolute;
  right            : 1.25rem;
  top              : 0;

  span {
    color  : ${p => darken(0.2, vars[p.color])};
    margin : 0 0.5em 0 0.25em;
  }

  svg {
    vertical-align: -4px;

    path {
      fill: ${p => darken(0.2, vars[p.color])} !important;
    }
  }
`

//-----------  Exports  ----------- */

export default Styled
