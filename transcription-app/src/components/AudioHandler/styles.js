//-----------  Imports  -----------//

import styled          from 'styled-components'

import vars            from '@miro/core-ui/src/styles/variables'
import { centerAlign } from '@miro/core-ui/src/styles/mixins'

//-----------  Definitions  ----------- */

const Styled = {}

//-----------  Audio Handler  ----------- */

Styled.AudioHandler = styled.div`
  overflow : hidden;
  position : relative;
  width    : 100%;
`


Styled.RouteSlider = styled.div`
  align-items     : stretch;
  display         : flex;
  flex-direction  : row;
  flex-wrap       : nowrap;
  justify-content : flex-start;

  > div {
    flex: 0 0 49%;

    &:first-child {
      margin-left : -${p => p.currentIndex * 51}%;
      transition  : ${vars.transition};
    }

    & + * {
      margin-left: 2%;
    }
  }

  > a {
    border        : 1px dashed ${vars.gray};
    border-radius : ${vars.radiusSm};
    flex          : 0 0 49%;
    position      : relative;
    z-index       : 15;

    span {
      ${ centerAlign() }

      color       : ${vars.blueBright};
      display     : block;
      font-size   : 0.9em;
      font-weight : ${vars.fontWeightThin};

      strong {
        color: ${vars.blueBright};
      }
    }

    &:not([href]){
      color  : ${vars.gray};
      cursor : not-allowed;
    }
  }
`

Styled.Cover = styled.div`
  background-image : linear-gradient(to right, rgba(255,255,255,0.5), rgba(255,255,255,1));
  bottom           : -1px;
  position         : absolute;
  right            : -1px;
  top              : -1px;
  width            : 50%;
  z-index          : 10;
`

//-----------  Exports  ----------- */

export default Styled
