//-----------  Imports  -----------//

import styled          from 'styled-components'

import PageWrapper     from 'components/PageWrapper'

import vars            from '@miro/core-ui/lib/styles/variables'

//-----------  Definitions  ----------- */

const Styled = {}

//-----------  Capacity Route  ----------- */

Styled.SignatureRoute = styled(PageWrapper)`
  header {
    margin-bottom:0;
    border-bottom: 0px solid #efeef1;
  }

`

Styled.Modal = styled.div`
  text-align: left;

  > span:first-child {
    margin: 0rem 0 3rem;
  }
`

Styled.ConsentWrapper = styled.div`
  border  : 1px solid ${vars.gray};
  margin  : 1.5rem 0;
  padding : 1.5rem 1.5rem 0;
`

Styled.Actions = styled.footer`
  align-items     : center;
  display         : flex;
  flex-direction  : row;
  justify-content : space-between;
  margin-top      : 1rem;

  > span, > a.btn {
    display   : inline-block;
    font-size : 0.75rem;
    margin    : 0 0 0 1rem !important;
    width     : auto !important;

    span {
      font-weight: ${vars.fontWeightThin};
    }
  }

  > a:not(.btn) {
    color       : ${vars.blueBright};
    font-size   : 0.9rem;
    font-weight : ${vars.fontWeightThin};
    margin-left : 1rem;

    & + a {
      flex: 1 1 auto;
    }
  }
`

//-----------  Exports  ----------- */

export default Styled
