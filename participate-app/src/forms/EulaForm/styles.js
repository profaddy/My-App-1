//-----------  Imports  -----------//

import styled from 'styled-components'

import vars   from '@miro/core-ui/lib/styles/variables'

//-----------  Definitions  ----------- */

const Styled = {}

//-----------  Elua Form  ----------- */

Styled.EulaForm = styled.form`
  background    : ${vars.white};
  border-radius : ${vars.radiusLg};
  padding       : 1.5rem;
  text-align    : left;

  > div {
    background : ${vars.grayLightest};
    border     : 1px solid ${vars.grayLighter};
    box-shadow : none;
    margin-top : 1rem;

    > div:first-child {
      padding: 1.33rem;
    }

    > div:last-child {
      height: 6rem;
    }
  }
`

Styled.EulaText = styled.div`
  font-size: 0.85rem;

  h5 {
    margin-top  : 2rem;
    font-weight : ${vars.fontWeightBolder};
  }

  h6 {
    margin-top  : 1rem;
    font-weight : ${vars.fontWeight};
  }

  ol, ul {
    padding-left: 2rem;

    li + li {
      margin-top: 1.5rem;
    }
  }
`

Styled.Actions = styled.footer`
  align-items     : center;
  display         : flex;
  flex-direction  : row;
  justify-content : flex-end;
  margin-top      : 1rem;

  > span, > button {
    display   : inline-block;
    font-size : 0.75rem;
    margin    : 0 0 0 1rem !important;
    width     : auto !important;

    span {
      font-weight: ${vars.fontWeightThin};
    }
  }

  > a {
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
