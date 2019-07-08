//-----------  Imports  -----------//

import Styled    from './styles'

import React     from 'react'
import PropTypes from 'prop-types'

//-----------  Component  -----------//

const AudioControls = ({ active, onClose, ...props }) => (
  <Styled.AudioControls active={active}>
    <a onClick={onClose}>⟵ Back</a>
    <Styled.Title>Keyboard Shortcuts</Styled.Title>
    <Styled.Rules>
      <ul>
        <li>
          <strong><b>{'ctrl + spacebar'}</b></strong>
          <dfn>Play / Pause</dfn>
          <xmp>Toggles audio between play and pause mode.</xmp>
        </li>
        <li>
          <strong><b>{'ctrl + m'}</b></strong>
          <dfn>Mute / Unmute</dfn>
          <xmp>Mute or unmutes all audio sources.</xmp>
        </li>
        <li>
          <strong><b>{'ctrl + <'}</b></strong>
          <dfn>Jump Backward 5 Audio</dfn>
          <xmp>Rewinds the current audio source backwards 5 seconds.</xmp>
        </li>
        <li>
          <strong><b>{'ctrl + >'}</b></strong>
          <dfn>Jump Forward 5 Seconds</dfn>
          <xmp>Fast forwards the current audio source 5 seconds ahead.</xmp>
        </li>
        <li>
          <strong><b>{'ctrl + /'}</b></strong>
          <dfn>Restart File</dfn>
          <xmp>Returns the audio to the begining of the file.</xmp>
        </li>
      </ul>
    </Styled.Rules>
    <Styled.Title>Voice Commands</Styled.Title>
    <Styled.Rules>
      <ul>
        <li>
          <strong><b>"Play"</b></strong>
          <dfn>Will begin playing the active audio file.</dfn>
          <xmp>NOTE: Some browsers will prevent audio from playing without first interacting with the screen.</xmp>
        </li>
        <li>
          <strong><b>"Pause"</b></strong>
          <dfn>Will pause any playing audio.</dfn>
        </li>
      </ul>
    </Styled.Rules>
    <a onClick={onClose}>⟵ Back</a>
  </Styled.AudioControls>
)

//-----------  Type Definitions  -----------//

AudioControls.propTypes = {
  active  : PropTypes.bool,
  onClose : PropTypes.func.isRequired,
}

//-----------  Export  -----------//

export default AudioControls
