//-----------  Imports  -----------//

import styled from 'styled-components'

import vars   from '@miro/core-ui/lib/styles/variables'

//-----------  Definitions  ----------- */

const Styled = {}

//-----------  Medical Conditions Questionnaire  ----------- */

Styled.MedicalConditionsQuestionnaire = styled.div``

Styled.ConditionsBlock = styled.div`
  background     : ${vars.grayLighter};
  border-radius  : ${vars.radius};
  display        : flex;
  flex-direction : row;
  flex-wrap      : wrap;
  margin         : 1rem 0;
  max-height     : ${p => p.visible ? '300rem' : 0};
  opacity        : ${p => p.visible ? 1 : 0};
  overflow       : ${p => p.visible ? 'initial' : 'hidden'};
  padding        : ${p => p.visible ? '0 1.5rem 0.75rem' : '0 1.5rem'};
  transition     : ${vars.transition};

  div > input + label + div {
    background: ${vars.white};
  }
`

//-----------  Exports  ----------- */

export default Styled
