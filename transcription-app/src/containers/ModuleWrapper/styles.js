//-----------  Imports  -----------//

import styled from 'styled-components'

import vars   from 'styles/variables'

//-----------  Definitions  ----------- */

const Styled = {}

//-----------  Module Wrapper  ----------- */

Styled.ModuleWrapper = styled.div`
  border-top  : 1px solid ${vars.grayLight};
  padding-top : 1.5rem;
`

Styled.ModuleHeader = styled.header`
  margin-bottom : 1.67rem;

  strong {
    color          : ${vars.black};
    font-weight    : ${vars.fontWeight};
    font-size      : 1.15em;
    letter-spacing : 0;
    margin-right   : 1.75rem;

    &::before {
      color        : ${vars.blueBright};
      content      : '•';
      margin-right :  0.5rem;
    }
  }
`

Styled.ModuleContent = styled.div`
  align-items     : flex-start;
  display         : flex;
  flex-direction  : row;
  justify-content : space-between;
`

Styled.MainColumn = styled.div`
  flex      : 0 0 60%;
  max-width : 60%;

  > *:last-child {
    margin-top : 3%;
  }

  > a {
    color       : ${vars.red};
    display     : block;
    font-size   : 0.75rem;
    font-style  : italic;
    font-weight : ${vars.fontWeightBold};
    margin-top  : 1rem;
  }
`

Styled.SideColumn = styled.div`
  flex: 0 0 38%
`

Styled.Block = styled.div`
  background-color : ${vars.white};
  border-radius    : ${vars.radiusLg};
  box-shadow       : ${vars.shadowLight};
  padding          : 2rem 1.75rem;
`

//-----------  Exports  ----------- */

export default Styled
