//-----------  Imports  -----------//

import styled from 'styled-components'

import vars   from 'styles/variables'

//-----------  Definitions  ----------- */

const Styled = {}

//-----------  Transcriber  ----------- */

Styled.Transcriber = styled.div`
  border        : 1px solid ${vars.grayLighter};
  border-radius : ${vars.radiusSm};
`

Styled.Stimuli = styled.header`
  background    : ${vars.grayLightest};
  border-bottom : 1px solid ${vars.grayLighter};
  font-size     : 1.15rem;
  padding       : 1.33rem 1.25rem;

  span {
    color       : ${vars.grayDarker};
    font-weight : ${vars.fontWeightThin};
  }
`

Styled.TextArea = styled.textarea`
  border      : none;
  color       : ${vars.grayDarker} !important;
  font-size   : 1.15rem;
  font-weight : ${vars.fontWeightThiner};
  line-height : 185%;
  max-width   : 100%;
  min-height  : 20rem;
  padding     : 1.25rem;
`

//-----------  Exports  ----------- */

export default Styled
