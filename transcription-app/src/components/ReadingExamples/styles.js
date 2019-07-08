//-----------  Imports  -----------//

import styled      from 'styled-components'
import { lighten } from 'polished'

import vars        from 'styles/variables'

//-----------  Definitions  ----------- */

const Styled = {}

//-----------  Annotation Rules  ----------- */

Styled.ReadingExamples = styled.div`
  background-color : ${lighten(0.01, vars.grayLighter)};
  border-left      : 1px solid ${vars.grayLight};
  bottom           : 0;
  box-shadow       : ${vars.shadow};
  opacity          : ${p => p.active ? 1 : 0};
  overflow         : scroll;
  padding          : 2rem;
  transition       : all 0.25s ease-out;
  pointer-events   : ${p => p.active ? 'default' : 'none'};
  position         : absolute;
  right            : ${p => p.active ? 0 : '-37.5%'};
  top              : 0;
  width            : 37.5%;

  > a {
    color       : ${vars.red};
    display     : block;
    font-size   : 0.9em;
    font-style  : italic;
    font-weight : ${vars.fontWeightBold};
    margin      : 1.5rem 0;
  }
`

Styled.Title = styled.h4`
  border-left   : 4px solid ${vars.purpleBright};
  margin-bottom : 1.5rem;
  padding-left  : 0.67em;
`

Styled.Rules = styled.div`
  background-color : ${vars.white};
  border-radius    : ${vars.radiusLg};
  color            : ${vars.grayDarker};
  font-size        : 0.9em;
  font-weight      : ${vars.fontWeightThin};
  line-height      : 160%;
  margin-bottom    : 1.5rem;
  padding          : 1rem 2rem 1rem 0;
  transition       : all 0.3s ease-out;

  * {
    font-style     : normal;
    letter-spacing : 0;
    line-height    : 175%;
  }

  li + li {
    margin-top: 1rem;
  }

  strong {
    color       : ${vars.grayDarker};
    font-weight : ${vars.fontWeight};

    b {
      color       : ${vars.black};
      font-weight : ${vars.fontWeightBold};
    }
  }

  dfn {
    display     : block;
    font-weight : ${vars.fontWeightThiner};
  }
`

Styled.Examples = styled.div`
  background-color : ${vars.white};
  border-radius    : ${vars.radiusLg};
  color            : ${vars.grayDarker};
  font-size        : 0.7em;
  font-weight      : ${vars.fontWeightThin};
  transition       : all 0.3s ease-out;

  th, td {
    border-left : 1px solid ${vars.grayLighter};
    padding     : 0.85rem 0.5rem;
    text-align  : center;

    &:first-child {
      border-left   : none;
      padding-left  : 1rem;
      padding-right : 1rem;
    }

    &:last-child {
      padding-right: 1rem;
    }
  }

  thead th {
    border-bottom  : 1px solid ${vars.grayLighter};
    border-bottom  : 1px solid ${vars.grayLightest};
    border-left    : none;
    font-size      : 0.8em;
    padding        : 1rem 0.5rem;
    text-transform : uppercase;
    vertical-align : bottom;
  }

  tbody th {
    font-size      : 1em;
    text-transform : uppercase;
  }

  tbody td {
    width: 30%;
  }

  tbody tr:nth-child(even) {
    background-color: ${vars.grayLightest};
  }
`

//-----------  Exports  ----------- */

export default Styled
