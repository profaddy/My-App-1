//-----------  Imports  -----------//

import styled      from 'styled-components'

import PageWrapper from 'components/PageWrapper'

import vars        from '@miro/core-ui/lib/styles/variables'

//-----------  Definitions  ----------- */

const Styled = {}

//-----------  Form Wrapper  ----------- */

Styled.FormWrapper = styled(PageWrapper)``

Styled.FormContent = styled.div`
  margin: 1.5rem 0;

  label {
    display      : block;
    padding-left : 0;
  }

  .miro-field + .miro-field {
    margin-top: 2.5rem;
  }
`

Styled.FormActions = styled.div`
  align-content   : center;
  border-top      : 1px solid ${vars.grayLighter};
  display         : flex;
  flex-direction  : row;
  justify-content : flex-start;
  margin-top      : 3rem;
  padding-top     : 2rem;

  button {
    margin-left : 1rem;
    width       : 14rem;
  }
`

//-----------  Exports  ----------- */

export default Styled
