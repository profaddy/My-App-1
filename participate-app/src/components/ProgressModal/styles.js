//-----------  Imports  -----------//

import styled          from 'styled-components'

import vars            from '@miro/core-ui/lib/styles/variables'
import { centerAlign } from '@miro/core-ui/lib/styles/mixins'

//-----------  Definitions  ----------- */

const Styled = {}

//-----------  Welcome Form  ----------- */

Styled.ProgressModal = styled.form`
  ${ centerAlign() }

  padding: 0 2rem;

  > p {
    margin: 2rem auto;
  }
`

Styled.ProgressBar = styled.div`
  align-items     : flex-start;
  display         : flex;
  flex-direction  : row;
  justify-content : space-between;
  margin          : 2rem auto;
  max-width       : 48rem;
  position        : relative;

  &::before, &::after {
    border-radius : 1rem;
    content       : ' ';
    height        : 0.75rem;
    position      : absolute;
    top           : 3.15rem;
    width         : 100%;
  }

  &::before {
    background : ${vars.white};
    box-shadow : inset 3px 1px 9px rgba(0,0,0,0.15);
    width      : 100%;
    z-index    : 0;
  }

  &::after {
    background : linear-gradient(to right, ${vars.blueLightest}, ${vars.blueBright});
    width      : ${p => p.width}%;
    z-index    : 1;
  }
`

Styled.Step = styled.div`
  flex       : 0 0 ${p => p.width}%;
  text-align : center;

  small {
    display : block;
    height  : 1rem;
  }

  h5 {
    color       : ${p => p.completed ? vars.blueBright : vars.grayDark};
    font-weight : ${vars.fontWeightThin};
    max-width   : 7rem;
    margin      : 0 auto;
  }
`

Styled.Icon = styled.div`
  background    : ${p => p.completed ? vars.blueBright : vars.white};
  border-radius : 100%;
  box-shadow    : ${vars.shadow};
  height        : 45px;
  margin        : 1rem auto;
  position      : relative;
  width         : 45px;
  z-index       : 5;

  span {
    ${ centerAlign() }

    color       : ${p => p.completed ? vars.white : vars.blueBright};
    font-size   : ${p => p.completed ? '2rem' : '1.5rem'};
    font-weight : ${p => p.completed ? vars.fontWeightBold : vars.fontWeightThin};
  }
`

//-----------  Exports  ----------- */

export default Styled
