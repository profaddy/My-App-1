//-----------  Imports  -----------//

import styled from 'styled-components'

import vars   from '@miro/core-ui/lib/styles/variables'

//-----------  Definitions  ----------- */

const Styled = {}

//-----------  Radio Field  ----------- */

Styled.CheckboxFields = styled.div`
  display    : block;
  margin-top : 0.5rem;
  position   : relative;
`

Styled.Nested = styled.div`
  background     : ${vars.grayLighter};
  border-radius  : ${vars.radius};
  display        : flex;
  flex-direction : row;
  flex-wrap      : wrap;
  margin-bottom  : ${p => p.visible ? '1.4rem' : 0};
  max-height     : ${p => p.visible ? '45rem' : 0};
  opacity        : ${p => p.visible ? 1 : 0};
  overflow       : hidden;
  padding        : ${p => p.visible ? '1.5rem 1.5rem 0.75rem' : '0 1.5rem'};
  transition     : ${vars.transition};

  > * {
    flex   : 0 1 calc(50% - 2rem);
    margin : 0.75rem;

    label {
      margin         : 0;
      padding-bottom : 0;
    }

    &.miro-other {
      flex: 1 1 100%;
    }
  }
`

//-----------  Exports  ----------- */

export default Styled
