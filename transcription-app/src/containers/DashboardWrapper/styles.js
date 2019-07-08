//-----------  Imports  -----------//

import styled from 'styled-components'

import vars   from '@miro/core-ui/src/styles/variables'

//-----------  Definitions  ----------- */

const Styled = {}

//-----------  Job Wrapper  ----------- */

Styled.DashboardWrapper = styled.main`
  flex     : 1 1 100%;
  margin   : 0;
  overflow : hidden;
  position : relative;

  > header + * {
    margin: 3rem 4%;
  }
`

Styled.DashboardHeader = styled.header`
  align-items      : center;
  background-color : ${vars.white};
  box-shadow       : ${vars.shadowLight};
  display          : flex;
  flex             : 0 0 auto;
  flex-direction   : row;
  justify-content  : space-between;
  padding          : 2rem 4%;

  > *:nth-child(2){
    flex        : 1 1 auto;
    margin-left : 2rem;

    h4 {
      color       : ${vars.black};
      font-weight : ${vars.fontWeight};

      & + h5 {
        font-weight : ${vars.fontWeightThin};
        margin-top  : 0.5em;
      }
    }
  }
`

Styled.StatsBlock = styled.div`
  flex     : 0 0 auto;
  position : relative;

  h2 {
    font-weight    : ${vars.fontWeightThin};
    letter-spacing : -0.015em;
    line-height    : 0.75em;

    small {
      font-size   : 0.5em;
      line-height : 0;
    }
  }

  span {
    color       : ${vars.grayDark};
    font-size   : 0.85em;
    font-weight : ${vars.fontWeightThin};
  }

  & + * {
    margin-left  : 2.75rem;
    padding-left : 2.75rem;

    &:after {
      border-left : 1px solid ${vars.gray};
      content     : '';
      height      : 76%;
      left        : 0;
      position    : absolute;
      top         : 12%;
      width       : 0;
    }
  }
`

//-----------  Exports  ----------- */

export default Styled
