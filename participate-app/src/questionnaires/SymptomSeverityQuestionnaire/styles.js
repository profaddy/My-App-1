//-----------  Imports  -----------//

import styled from 'styled-components'

import vars   from '@miro/core-ui/lib/styles/variables'

//-----------  Definitions  ----------- */

const Styled = {}

//-----------  Medical Diagnosis Questionnaire  ----------- */

Styled.SymptomSeverityQuestionnaire = styled.div`
  max-width: 58rem;
`

Styled.Header = styled.div``

Styled.Row = styled.div`
  align-content   : center;
  display         : flex;
  flex-direction  : row;
  flex-wrap       : nowrap;
  justify-content : space-between;
  margin-bottom   : 1rem;

  h4 {
    color       : ${vars.black};
    font-size   : 1.15rem;
    font-weight : ${vars.fontWeightBolder};
  }

  > div:first-child {
    flex       : 1 1 auto;
    text-align : left;
  }

  > div:last-child {
    align-content   : center;
    display         : flex;
    flex            : 0 0 27.5rem;
    flex-direction  : row;
    justify-content : space-between;
    text-align      : center;

    h4 {
      margin: 0 auto;
    }

    h6 {
      color       : ${vars.grayDarker};
      flex        : 0 0 25%;
      font-size   : 1rem;
      font-weight : ${vars.fontWeight};
    }
  }
`

Styled.Conditions = styled.div`
  margin-top: 2rem;
`

Styled.Condition = styled.div`
  align-content   : center;
  display         : flex;
  flex-direction  : row;
  flex-wrap       : nowrap;
  justify-content : space-between;
  margin-bottom   : 3rem;

  label {
    margin: 0 !important;
  }

  > div:first-child {
    flex: 1 1 auto;

    label > span {
      color       : ${vars.grayDarker};
      font-size   : 1.15rem;
      line-height : 22px;
      font-weight : ${vars.fontWeight};
    }
  }

  > div:last-child {
    flex         : 0 0 31rem;
    margin-right : -1rem;
    margin-top   : -1.3rem !important;

    > div {
      align-content   : center;
      display         : flex;
      flex-direction  : row;
      justify-content : space-around;
    }
  }
`

//-----------  Exports  ----------- */

export default Styled
