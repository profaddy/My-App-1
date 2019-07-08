//-----------  Imports  -----------//

import styled          from 'styled-components'

import vars            from '@miro/core-ui/lib/styles/variables'
import { centerAlign } from '@miro/core-ui/lib/styles/mixins'

//-----------  Definitions  ----------- */

const Styled = {}

//-----------  Yes No Field  ----------- */

Styled.ImageField = styled.div`
  ${p => p.isInvalid && `
    a {
      border-color : ${vars.redLight};
      color        : ${vars.red};
    }
  `}
`

Styled.Disclaimer = styled.div`
  font-size : 1.1rem;
  margin    : 0rem 0 0.5rem;

  p {
    max-width: 80rem;
  }
`

Styled.SideBySide = styled.div`
  align-items     : stretch;
  display         : flex;
  flex-direction  : row;
  justify-content : flex-start;
  margin-top      : 2rem;
`

Styled.Viewer = styled.div`
  background    : ${vars.grayLighter};
  border-radius : ${vars.radius};
  flex          : 0 0 25rem;
  height        : 18.57rem;
  overflow      : hidden;
  position      : relative;
  margin-right  : 15px;

  > * {
    height   : 100%;
    position : relative;
    width    : 25rem;
  }

  video {
    left    : -1px;
    opacity : 0.75;
  }

  img {
    z-index: 10;
  }
`

Styled.Sidebar = styled.aside`
  background    : ${vars.white};
  border-radius : ${vars.radius};
  flex          : 0 0 35rem;
  position      : relative;

  > * {
    ${ centerAlign() };
  }
`

Styled.Image = styled.img``

Styled.Actions = styled.div`
  margin-top: 2rem;

  > span + span {
    margin-left: 1rem;
  }
`

Styled.Background = styled.div`
  background    : transparent;
  border        : 2px dashed ${vars.grayLighter};
  border-radius : ${vars.radiusSm};
  height        : calc(100% - 10px);
  left          : 5px;
  position      : absolute;
  top           : 5px;
  width         : calc(100% - 11px);
`

//-----------  Exports  ----------- */

export default Styled
