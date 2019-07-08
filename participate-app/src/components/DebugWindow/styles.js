//-----------  Imports  -----------//

import styled      from 'styled-components'
import vars        from '@miro/core-ui/lib/styles/variables'

//-----------  Definitions  ----------- */

const Styled = {}

//-----------  Form Wrapper  ----------- */

Styled.DebugWindow = styled.div`
  background: rgb(226, 241, 255);
  position: fixed;
  bottom: 0;
  right: 0;
  width: 500px;
  z-index: 100;
  max-height: 100vh;
  overflow: scroll;

  h2 {
    font-size: 1.4rem;
  }

  ${p => p.minimized && `
    top: 100vh;
    margin-top: -4em;
  `}
`

Styled.DebugHeader = styled.div`
  background: rgb(190, 214, 237);
  padding: 1rem;
  cursor: pointer;
`

Styled.DebugContent = styled.div`
  padding: 1rem;
`

//-----------  Exports  ----------- */

export default Styled
