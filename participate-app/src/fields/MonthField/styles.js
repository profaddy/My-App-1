//-----------  Imports  -----------//

import styled from 'styled-components'

import vars   from '@miro/core-ui/lib/styles/variables'

//-----------  Definitions  ----------- */

const Styled = {}

//-----------  Yes No Field  ----------- */

Styled.MonthField = styled.div`
  position: relative
`

Styled.Wrapper = styled.div`
  align-items    : flex-start;
  display        : flex;
  flex-direction : flex-end;
  position       : relative;

  ${p => p.invliad && `
    a {
      border-color : ${vars.redLight};
      color        : ${vars.red};
    }
  `}
`

Styled.HalfBlock = styled.div`
  display    : inline-block;
  margin-top : 1rem;
  position   : relative;
  width      : 3.5rem;

  select {
    text-align: center;
  }

  h6 {
    color       : ${vars.grayDarker};
    font-size   : 0.75em;
    font-weight : ${vars.fontWeightThin};
    position    : absolute;
    top         : -1.5rem;
  }

  & + div {
    margin-left : 1rem;
    width       : 5rem;
  }
`

//-----------  Exports  ----------- */

export default Styled
