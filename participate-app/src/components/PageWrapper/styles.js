//-----------  Imports  -----------//

import styled from 'styled-components'

import vars   from '@miro/core-ui/lib/styles/variables'

//-----------  Definitions  ----------- */

const Styled = {}

//-----------  Page Wrapper  ----------- */

Styled.PageWrapper = styled.div`
  background-color : ${vars.grayLightest};
  flex             : 1 1 100%;
  min-height       : calc(100vh - 4.5rem);
  padding          : 7.75rem 5% 4rem;
  position         : relative;
`

Styled.PageHeader = styled.header`
  align-items     : flex-end;
  border-bottom   : 1px solid ${vars.grayLighter};
  display         : flex;
  flex-direction  : row;
  justify-content : space-between;
  margin-bottom   : 3rem;
`

Styled.PageTitle = styled.div`
  color          : ${vars.black};
  flex           : 0 0 auto;
  font-size      : 1.67rem;
  font-weight    : ${vars.fontWeightThin};
  letter-spacing : 0rem;
  padding-bottom : 0.85rem;
`

Styled.PageAction = styled.div`
  flex           : 0 0 auto;
  margin-top     : -0.85rem;
  padding-bottom : 0.85rem;
`

Styled.PageContent = styled.main`
`


//-----------  Exports  ----------- */

export default Styled
