//-----------  Imports  -----------//

import styled            from 'styled-components'

import vars              from '@miro/core-ui/src/styles/variables'
import { ellipsis,
         verticalAlign } from '@miro/core-ui/src/styles/mixins'

//-----------  Definitions  ----------- */

const Styled  = {}
const btnSize = 22
const plySize = btnSize * 0.67

//-----------  Audio Block  ----------- */

Styled.AudioBlock = styled.div`
  background    : ${vars.white};
  border        : 1px solid ${p => p.active ? vars.blueLightest : vars.grayLight};
  border-radius : ${vars.radiusSm};
  padding       : 1rem 1.25rem;
  position      : relative;
  transition    : ${vars.transition};
  width         : 100%;

  > div:first-child {
    height         : 0% !important;
    pointer-events : none;
    position       : absolute;
    width          : 0% !important;
  }
`

Styled.AudioHeader = styled.header`
  align-items     : center;
  display         : flex;
  justify-content : space-between;

  > * {
    font-weight    : ${vars.fontWeightThin};
    letter-spacing : 0;
  }

  h6 {
    ${ ellipsis() }

    max-width: 15rem;
  }

  a {
    color     : ${vars.blueBright};
    font-size : 0.75em;

    span {
      font-size   : 1.5em;
      line-height : 0;
      margin-left : 0.25em;
      position    : relative;
      top         : 0em;
    }

    &:hover {
      color: ${vars.orange};
    }

    &:not([href]){
      color   : ${vars.gray};
      pointer : not-allowed;
    }
  }
`

Styled.AudioRange = styled.div`
  align-items     : center;
  display         : flex;
  flex-wrap       : wrap;
  justify-content : space-between;
  margin          : 1.67em 0 1em;

  > *:first-child {
    margin-bottom: 0.5em;
  }
`

Styled.AudioActions = styled.div`
  align-items     : center;
  display         : flex;
  justify-content : space-between;

  > div {
    flex        : 1 1 auto;
    margin-left : 35%;
  }
`

Styled.TimeDisplay = styled.time`
  color          : ${vars.grayDarker};
  font-size      : 0.6em;
  font-weight    : ${vars.fontWeightThin};
  letter-spacing : 0;
`

Styled.VolumeIcon = styled.a`
  cursor      : pointer;
  display     : inline-block;
  flex        : 0 0 23px;
  height      : 30px;
  position    : relative;
  width       : 23px;
  margin-left : 0.75rem;

  > i {
    background: ${p => p.muted ? vars.gray : vars.grayDark};

    &::after {
      border-color : transparent ${p => p.muted ? vars.gray : vars.grayDark} transparent transparent;
    }
  }

  > span {
    border        : 1px solid transparent;
    border-radius : 50%;
    border-right  : 1px solid ${p => p.muted ? vars.gray : vars.grayDark};
    bottom        : 0;
    height        : 12px;
    left          : 0;
    margin        : auto;
    position      : absolute;
    right         : 0;
    top           : 0;
    transition    : all 200ms;
    width         : 12px;

    & + span {
      height : 20px;
      width  : 20px;
    }
    ${p => p.muted && `
      border-radius : 0;
      border-width  : 0 1px 0 0;
      height        : 11px !important;
      transform     : rotate(45deg) translate3d(0, -50%, 0);
      width         : 11px !important;

      & + span {
        transform: rotate(-45deg) translate3d(0, 50%, 0);
      }
    `}
  }
`

Styled.SpeakerIcon = styled.i`
  ${ verticalAlign() }

  display    : block;
  height     : 7px;
  transition : ${vars.transition};
  width      : 5px;

  &:after {
    ${ verticalAlign() }

    border-style : solid;
    border-width : 7px 10px 7.5px 11px;
    content      : '';
    height       : 0;
    left         : -11px;
    transition   : ${vars.transition};
    width        : 0;
  }
`

Styled.PlayIcon = styled.a`
  border        : 1px solid ${vars.blueBright};
  border-radius : ${btnSize}px;
  box-sizing    : content-box;
  display       : block;
  flex          : 0 0 ${btnSize}px;
  font-size     : 0;
  height        : ${btnSize - 1}px;
  margin-right  : 1rem;
  padding       : ${btnSize * 0.25}px;
  position      : relative;
  text-align    : center;
  white-space   : nowrap;
  width         : ${btnSize}px;

  &:before, span {
    display                    : inline-block;
    transition                 : border 0.15s, width 0.15s, height 0.15s, margin 0.15s;
    transition-tiomig-function : cubic-bezier(1, 0, 0, 1);
    vertical-align             : middle;
  }

  &:before {
    content : '';
    height  : ${btnSize}px;
  }

  span {
    box-sizing    : content-box !important;
    border-bottom : 0 solid transparent;
    border-left   : ${btnSize * 0.2}px solid ${vars.blueBright};
    border-top    : 0 solid transparent;
    height        : ${btnSize * 0.6}px;
    margin        : 0;

    &:first-child {
      border-right: ${btnSize * 0.15}px solid transparent;
    }

    ${p => p.playing && `
      &:first-child {
        border-bottom : ${plySize / 2}px solid transparent;
        border-left   : ${plySize * 0.85}px solid ${vars.blueBright};
        border-right  : 0px solid transparent;
        border-top    : ${plySize / 2}px solid transparent;
        height        : 0;
        margin-left   : ${plySize / 10}px;
      }

      &:last-child {
        border-bottom : ${plySize / 2}px solid transparent;
        border-left   : ${plySize * 0.85}px solid ${vars.blueBright};
        border-right  : 0px solid transparent;
        border-top    : ${plySize / 2}px solid transparent;
        height        : 0;
        margin-left   : -${plySize * 0.85}px;
    `}
  }
`

//-----------  Exports  ----------- */

export default Styled
