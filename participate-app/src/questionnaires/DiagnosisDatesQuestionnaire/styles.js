//-----------  Imports  -----------//

import styled from 'styled-components';

import vars from '@miro/core-ui/lib/styles/variables';

//-----------  Definitions  ----------- */

const Styled = {};

//-----------  Medical Diagnosis Questionnaire  ----------- */

Styled.DiagnosisDatesQuestionnaire = styled.div`
  max-width: 58rem;
`;

Styled.Header = styled.div``;

Styled.Row = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  margin-bottom: 4rem;

  h4 {
    color: ${vars.black};
    font-size: 1.15rem;
    font-weight: ${vars.fontWeightBolder};
  }

  .conditionsCheckbox {
    max-width: 25.3%;
  }

  > div {
    flex: 0 0 16rem;
    text-align: center;

    &:first-child {
      flex: 1 1 auto;
      text-align: left;
    }
  }
`;

Styled.Conditions = styled.div``;

Styled.Condition = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  margin-bottom: 3rem;

  label {
    margin: 0 !important;
  }

  > div {
    flex: 0 0 14rem;
    margin-top: -1rem !important;

    label + div {
      margin-left: auto;
      margin-right: auto;
    }

    &:first-child {
      flex: 1 1 auto;

      label > span {
        color: ${vars.grayDarker};
        font-size: 1.15rem;
        line-height: 22px;
        font-weight: ${vars.fontWeight};
      }
    }
  }
`;

//-----------  Exports  ----------- */

export default Styled;
