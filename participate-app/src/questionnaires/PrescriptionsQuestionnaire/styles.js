//-----------  Imports  -----------//

import styled from 'styled-components'

import vars   from '@miro/core-ui/lib/styles/variables'

//-----------  Definitions  ----------- */

const Styled = {}

//-----------  Medical Diagnosis Questionnaire  ----------- */

Styled.PrescriptionsQuestionnaire = styled.div`
  max-width: 58rem;
`

Styled.Header = styled.div``

Styled.Row = styled.div`
  align-items     : center;
  display         : flex;
  flex-direction  : row;
  flex-wrap       : nowrap;
  justify-content : flex-start;
  margin-bottom   : 4rem;

  h4 {
    color       : ${vars.black};
    font-size   : 1.15rem;
    font-weight : ${vars.fontWeightBolder};
  }

  > div {
    flex       : 0 0 19.5rem;
    text-align : center;

    &:first-child {
      text-align: left;
    }
  }
`

Styled.Conditions = styled.div``

Styled.Condition = styled.div`
  align-content   : center;
  display         : flex;
  flex-direction  : row;
  flex-wrap       : nowrap;
  justify-content : flex-start;
  margin-bottom   : 1rem;

  label {
    margin: 0 !important;
  }

  > div:first-child {
    flex: 0 0 23rem;

    label > span {
      color       : ${vars.grayDarker};
      font-size   : 1.15rem;
      line-height : 22px;
      font-weight : ${vars.fontWeight};
    }
  }

  > div:last-child {
    flex       : 0 0 20rem;
    margin-top : -1.3rem !important;

    label + div {
      dsplay : inline-block;
      margin : 0.75rem auto 0;
    }
  }
`

Styled.Hidden = styled.div`
  background    : ${vars.grayLighter};
  border-radius : ${vars.radius};
  margin-bottom : ${p => p.visible ? '1.4rem' : 0};
  max-height    : ${p => p.visible ? '45rem' : 0};
  opacity       : ${p => p.visible ? 1 : 0};
  overflow      : hidden;
  padding       : ${p => p.visible ? '0.25rem 1.5rem 0.75rem' : '0 1.5rem'};
  transition    : ${vars.transition};
  max-width     : 34rem;
  margin-left   : 3rem;
  margin-bottom : 3rem;

  label span {
    font-size: 1rem;
  }

  textarea {
    height: 12rem;
  }

  > div:last-child {
    margin-top: 0.5rem !important;

    label ~ div {
      display: inline-block;

      label {
        font-size: 1rem;
      }

      & + div {
        margin-left: 1.75rem;
      }
    }
  }
`

//-----------  Exports  ----------- */

export default Styled
