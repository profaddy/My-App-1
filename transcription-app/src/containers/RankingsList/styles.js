//-----------  Imports  -----------//

import styled from 'styled-components'

import vars   from '@miro/core-ui/src/styles/variables'

//-----------  Definitions  ----------- */

const Styled = {}

function rankingColor({ ranking }){
  switch (ranking){
    case 1  : return vars.yellow
    case 2  : return vars.orange
    case 3  : return vars.blue
    default : return vars.gray
  }
}

//-----------  Rankings List  ----------- */

Styled.RankingsList = styled.div`
  position   : relative;
  min-height : 8rem;

  > div {
    border-bottom : 1px solid ${vars.grayLight};
    padding       : 0 0 0.75em 0.75em;

    &:last-child {
      border-bottom: none;
    }
  }
`

Styled.RankingBlock = styled.div`
  align-items     : center;
  display         : flex;
  flex-direction  : row;
  justify-content : flex-start;
  margin-top      : 1rem;

  > *:first-child {
    flex         : 0 0 1rem;
    margin-right : 5%;
    transform    : scale(1.5);
  }

  > *:nth-child(2){
    flex         : 0 0 auto;
    margin-right : 5%;
  }

  h6 {
    flex        : 0 0 40%;
    font-size   : 0.85em;
    font-weight : ${vars.fontWeight};
    text-align  : left;
  }
`

Styled.Time = styled.h6`
  color: ${p => rankingColor(p)}
`

//-----------  Exports  ----------- */

export default Styled
