//-----------  Imports  -----------//

import styled from 'styled-components'

import vars   from '@miro/core-ui/lib/styles/variables'

//-----------  Definitions  ----------- */

const Styled = {}

//-----------  Demographics Questionnaire  ----------- */

Styled.DemographicsQuestionnaire = styled.div``

Styled.DateOfBirth = styled.div`
  align-items     : center;
  display         : flex;
  flex-direction  : row;
  justify-content : flex-start;
  margin-bottom   : 1.5rem;

  label {
    font-size     : 0.95rem;
    margin-bottom : 0.5rem;
  }

  > *:first-child {
    margin-right : 1.5rem;
    width        : 6rem;
  }

  > *:last-child {
    margin : 0 !important;
    width  : 10rem;
  }
`

//-----------  Exports  ----------- */

export default Styled
