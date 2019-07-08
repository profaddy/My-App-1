//-----------  Imports  -----------//

import styled             from 'styled-components'
import { transparentize } from 'polished'

import vars               from '@miro/core-ui/src/styles/variables'

//-----------  Definitions  ----------- */

const Styled = {}

//-----------  Diff Select  ----------- */

Styled.DiffSelect = styled.span`
  position: relative;
`

Styled.Display = styled.span`
  cursor   : pointer;
  position : relative;

  &:before {
    background-color : ${p => transparentize(0.75, p.decided ? vars.green : vars.red)};
    border-radius    : ${vars.radiusSm};
    bottom           : -0.2em;
    content          : '';
    left             : -0.1em;
    min-width        : 0.5em;
    position         : absolute;
    right            : -0.1em;
    top              : -0.2em;
  }

  &:after {
    content : '';
    display : inline-block;
  }
`

Styled.Selector = styled.div`
  background     : ${vars.white};
  border-radius  : ${vars.radius};
  box-shadow     : ${vars.shadow};
  left           : calc(50% - 0.75em);
  opacity        : ${p => p.focus ? 1 : 0};
  padding        : 0.25rem 1rem 1rem;
  pointer-events : ${p => p.focus ? 'normal' : 'none'};
  position       : absolute;
  top            : calc(100% + 0.2em);
  transition     : ${vars.transition};
  width          : 20rem;
  z-index        : 10;

  &::after {
    border-bottom  : 0.4em solid ${vars.white};
    border-left    : 0.5em solid transparent;
    border-right   : 0.5em solid transparent;
    content        : '';
    height         : 0;
    left           : 0.25em;
    pointer-events : none;
    position       : absolute;
    right          : 100%;
    top            : -0.4em;
    width          : 0;
  }
`

Styled.Selection = styled.div`
  align-items     : center;
  cursor          : pointer;
  display         : flex;
  flex-direction  : row;
  font-weight     : ${vars.fontWeightThiner};
  justify-content : space-between;
  letter-spacing  : 0;

  > *:first-child {
    flex: 1 1 auto;
  }

  > *:last-child {
    flex       : 0 0 2.5rem;
    text-align : center;
  }

  small {
    font-size : 0.6em;
    color     : ${vars.grayDarker};

    &::before {
      content      : '•';
      display      : inline-block;
      font-size    : 1.5em;
      line-height  : 0;
      margin-right : 0.25em;
      color        : ${p => vars[p.color]};
    }
  }

  p {
    font-size      : 0.85em;
    font-weight    : ${vars.fontWeightThiner};
    letter-spacing : 0;
    margin         : 0 0 0 0.75em;

    strong {
      font-style  : italic;
      font-weight : ${vars.fontWeightBolder};
    }
  }

  textarea {
    border         : 1px dashed ${vars.grayLight};
    border-radius  : ${vars.radiusSm};
    font-size      : 0.85em;
    font-weight    : ${vars.fontWeightThiner};
    min-height     : 5rem;
    letter-spacing : 0;
    margin-top     : 0.67em;
    padding        : 0.5em;
  }

  & + div {
    border-top : 1px dashed ${vars.grayLight};
    margin-top : 0.67em;
  }
`

Styled.RadioButton = styled.span`
  background    : ${p => p.selected ? vars.blue : vars.white};
  border        : 1px solid ${vars.gray};
  border-radius : 10em;
  box-shadow    : inset 0 0 0 1px ${vars.white};
  display       : block;
  height        : 10px;
  margin        : 1rem auto 0;
  transition    : ${vars.transition};
  width         : 10px;
`

//-----------  Exports  ----------- */

export default Styled
