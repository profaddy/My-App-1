//-----------  Imports  -----------//

import styled from 'styled-components'

import vars   from '@miro/core-ui/lib/styles/variables'

//-----------  Definitions  ----------- */

const Styled = {}

//-----------  Release Form  ----------- */

Styled.ReleaseForm = styled.form`
  border-top: 1px dashed ${vars.grayLight};

  > div:first-child {
    padding-top: 1.5rem;
  }
`

Styled.ReleaseSection = styled.div`
  border-bottom  : 1px dashed ${vars.gray};
  margin-bottom  : 3rem;
  margin-top     : -1px;
  padding-bottom : 3rem;

  label {
    display      : block;
    padding-left : 0;
  }
`

Styled.Fields = styled.div``

Styled.Disclaimer = styled.div`
  font-size : 1.1rem;
  margin    : 3rem 0 2.5rem;

  p {
    max-width: 48rem;
  }
`

//-----------  Exports  ----------- */

export default Styled
