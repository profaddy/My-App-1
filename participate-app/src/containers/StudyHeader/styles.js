//-----------  Imports  -----------//

import styled from 'styled-components'

import vars   from '@miro/core-ui/lib/styles/variables'

//-----------  Definitions  ----------- */

const Styled = {}

//-----------  Study Header  ----------- */

Styled.StudyHeader = styled.div`
  border-bottom  : 1px solid ${vars.grayLighter};
  margin-bottom  : 3rem;
  margin-top     : -1rem;
  padding-bottom : 2rem;

  > div + div {
    margin-top: 1.5rem;
  }

  strong {
    font-weight   : ${vars.fontWeightBolder};
    line-height   : 150%;
    padding-right : 1rem;
  }

  span {
    font-weight: ${vars.fontWeightThin};
    line-height: 150%;
  }
`

Styled.IRBStamp = styled.div`
  background : ${vars.grayLight};
  left       : 0;
  padding    : 0.75rem 5%;
  position   : absolute;
  right      : 0;
  top        : 0;
`

Styled.Inner = styled.div`
  background : ${vars.white};
  display    : inline-block;
  padding    : 0.5rem 1rem;

  h6 {
    font-size      : 0.67rem;
    letter-spacing : 0.001rem;
    line-height    : 125%;
  }
`

//-----------  Exports  ----------- */

export default Styled
