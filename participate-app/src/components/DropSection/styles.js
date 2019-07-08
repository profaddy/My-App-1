//-----------  Imports  -----------//

import styled from 'styled-components'

import vars   from '@miro/core-ui/lib/styles/variables'

//-----------  Definitions  ----------- */

const Styled = {}

//-----------  Drop Section  ----------- */

Styled.DropSection = styled.div`
  margin-bottom : -0.75rem;
  padding-top   : 1.5rem;
`

Styled.Title = styled.a`
  align-items     : center;
  color           : ${vars.black};
  display         : flex;
  flex-direction  : row;
  font-size       : 1.1rem;
  font-weight     : ${vars.fontWeightBold};
  justify-content : flex-start;

  svg {
    height       : auto;
    margin-right : 1rem;
    transition   : ${vars.transition};
    width        : 1.25rem;
    transform    : ${p => p.active ? 'rotate(-90deg)' : 'rotate(-90deg)'};

    path {
      fill       : ${p => p.viewed ? vars.green : vars.gray};
      opacity    : 0.75;
      transition : ${vars.transition};
    }
  }

  &:hover svg path {
    opacity: 1;
  }
`

Styled.Content = styled.div`
  border-left : 1px solid ${vars.grayLighter};
  margin      : 1rem 0.67rem 0;
  max-height  : ${p => p.active ? 'auto' : 0};
  opacity     : ${p => p.active ? 1 : 0};
  overflow    : hidden;
  padding     : 0.5rem 1.67rem 0;
  transition  : ${vars.transition};

  p {
    max-width: 100%;
  }

  > p:first-child {
    margin-top: 0;
  }
`

Styled.Next = styled.a`
  align-items     : center;
  display         : flex;
  flex-direction  : row;
  font-size       : 0.8rem;
  justify-content : flex-start;
  margin          : 1rem 0 1.5rem 0.33rem;

  svg {
    height       : auto;
    margin-right : 1.1rem;
    transition   : ${vars.transition};
    width        : 0.75rem;

    path {
      fill: ${vars.grayLight};
    }
  }
`

//-----------  Exports  ----------- */

export default Styled
