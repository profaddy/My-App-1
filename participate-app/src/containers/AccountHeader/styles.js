//-----------  Imports  -----------//

import styled from 'styled-components'

import vars   from 'styles/variables'

//-----------  Definitions  ----------- */

const Styled = {}

//-----------  Account Header  ----------- */

Styled.AccountHeader = styled.div`
  align-self    : center;
  font-size     : 0.9em;
  font-weight   : 300;
  padding-right : 2rem;
  position      : relative;

  > *:last-child {
    border-color : ${vars.gray};
    color        : ${vars.grayLight};
    margin-left  : 2rem;
  }
`

//-----------  Exports  ----------- */

export default Styled
