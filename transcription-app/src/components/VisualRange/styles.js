//-----------  Imports  -----------//

import styled              from 'styled-components'

import vars                from '@miro/core-ui/src/styles/variables'
import { darken, lighten } from 'polished'

//-----------  Definitions  ----------- */

const Styled = {}

//-----------  Visual Range  ----------- */

Styled.VisualRange = styled.div`
  background-color : ${p => lighten(0.25, p.color)};
  border-radius    : 8px;
  height           : 4px;
  position         : relative;
  width            : 100%;

  &:before {
    background-color : ${p => p.color};
    border-radius    : 8px 0 0 8px;
    content          : '';
    display          : block;
    height           : 4px;
    left             : 0;
    position         : relative;
    top              : 0;
    width            : ${p => (p.width * 100)}%;
  }

  input {
    border     : none;
    padding    : 0;
    position   : absolute;
    top        : -2px;

    &::-webkit-slider-thumb {
      appearance       : none;
      background-color : ${p => darken(0.25, p.color)};
      border-radius    : 8px;
      cursor           : pointer;
      height           : 8px;
      width            : 8px;
    }
  }
`

//-----------  Exports  ----------- */

export default Styled
