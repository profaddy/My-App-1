//-----------  Imports  -----------//

import styled from 'styled-components'

import vars   from '@miro/core-ui/lib/styles/variables'

//-----------  Definitions  ----------- */

const Styled = {}

//-----------  Capacity Route  ----------- */

Styled.ConsentModal = styled.div`

  text-align: left;
  padding: 0 2rem;
  width: 38%;
  margin: 0 auto;

  > p {
    max-width: 100%;
  }

  `
  Styled.ModalSwitch = styled.div`
  border-bottom  : 1px dashed ${vars.grayLighter};
  font-size      : 0.95rem;
  font-weight    : ${vars.fontWeightBold};
  padding-top    : 1rem;

  a {
    color           : ${vars.blueBright};
    text-decoration : underline;
  }
`
Styled.Modal = styled.div`
  text-align: left;

  > span:first-child {
    margin: 4rem 0 3rem;
  }
`
  Styled.Details = styled.div`
  border-style: solid;
  border-width: 2px;
  padding:2rem;
  display: inline-block;
  `
Styled.Button = styled.div`
  margin-top: 2rem;
  float:left;
  margin-right:2rem;

  > span + span {
    margin-left: 1rem;
  }
`


//-----------  Exports  ----------- */

export default Styled