//-----------  Imports  -----------//

import styled from 'styled-components'

import vars   from '@miro/core-ui/lib/styles/variables'

//-----------  Definitions  ----------- */

const Styled = {}

//-----------  Form Field  ----------- */

Styled.FormField = styled.div`


  input, textarea {
    font-size: 1.1rem;

    &::placeholder {
      font-size: 1.1rem;
    }
  }

  textarea {
    line-height: 150%;
  }
`

//-----------  Exports  ----------- */

export default Styled
