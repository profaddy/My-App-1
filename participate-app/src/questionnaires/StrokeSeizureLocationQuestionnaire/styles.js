//-----------  Imports  -----------//

import styled from 'styled-components'

import vars   from '@miro/core-ui/lib/styles/variables'

//-----------  Definitions  ----------- */

const Styled = {}

//-----------  Stroke / Seizure Questionnaire  ----------- */

Styled.StrokeSeizureLocationQuestionnaire = styled.div`
  max-width: 28rem;
`

Styled.Condition = styled.div`
  margin-bottom: 5rem;
`

Styled.Type = styled.div`
  border-bottom : 1px solid ${vars.grayDarker};
  margin-bottom : 1.25rem;
`

Styled.Unknown = styled.div`
  border-bottom  : 1px dashed ${vars.gray};
  margin-bottom  : 1.25rem;
  padding-bottom : 1.25rem;
  text-align     : right;

  > div {
    display: inline-block;
  }
`

Styled.Header = styled.div`
  align-items     : baseline;
  display         : flex;
  flex-direction  : row;
  flex-wrap       : nowrap;
  justify-content : space-between;
  margin-bottom   : 1rem;

  > div {
    flex: 0 0 8rem;
  }

  > h5 {
    font-weight: ${vars.fontWeightBolder};
  }
`

Styled.Types = styled.div`
  margin-top: 1rem;

  > div > div {
    align-content   : center;
    display         : flex;
    flex-direction  : row;
    justify-content : space-between;
    margin-right    : -1.75rem;
    text-align      : center;

    label {
      flex      : 0 0 10rem;
      font-size : 1.15rem;
      margin    : 0;

      & ~ div {
        align-content   : center;
        display         : flex;
        flex            : 0 0 1rem;
        flex-direction  : row;
        justify-content : space-between;
        margin          : -0.25rem 0.5rem 0;
        text-align      : center;

        label {
          display: none;
        }
      }
    }
  }
`

//-----------  Exports  ----------- */

export default Styled
