//-----------  Imports  -----------//

import styled from 'styled-components'

import vars   from '@miro/core-ui/src/styles/variables'

//-----------  Definitions  ----------- */

const Styled = {}

//-----------  Activity List  ----------- */


Styled.ActivitiesList = styled.div`
  margin-top : 2rem;
  position   : relative;
  min-height : 8rem;

  > div:first-child {
    padding-top: 0;
  }
`

Styled.ActivityBlock = styled.div`
  border-left : 1px solid ${vars.grayLight};
  margin-left : 0.25rem;
  padding     : 0.5rem 0.75rem;
  position    : relative;

  h5 {
    color          : ${p => ('green' === p.color) ? vars.green : 'inherit'};
    font-weight    : ${vars.fontWeight};
    letter-spacing : 0;

    &::before {
      color      : ${p => vars[p.color]};
      content    : '•';
      font-size  : 1.25rem;
      display    : inline-block;
      left       : -0.25em;
      margin-top : -0.15em;
      position   : absolute;
    }
  }

  h6 {
    color          : ${vars.grayDark};
    font-size      : 0.8em;
    font-weight    : ${vars.fontWeightThiner};
    letter-spacing : 0;
    max-width      : 5rem;
  }
`

//-----------  Exports  ----------- */

export default Styled
